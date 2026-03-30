import {LitElement, html, css} from 'lit';
import {query, property, state} from 'lit/decorators.js';
import {customElement} from 'lit/decorators.js';
import {map} from 'lit/directives/map.js';
import '@material/web/textfield/outlined-text-field.js';
import '@material/web/textfield/filled-text-field.js';
import '@material/web/select/outlined-select.js';
import '@material/web/select/select-option.js';
import '@material/web/button/filled-tonal-button.js';
import '@material/web/button/filled-button.js';
import '@material/web/button/text-button.js';
import '@material/web/iconbutton/icon-button.js';
import '@material/web/dialog/dialog.js';
import '@material/web/progress/circular-progress.js';
import '@patternfly/elements/pf-accordion/pf-accordion.js';
import {calcSubStyles} from './calc-sub-styles';
import {roundTo1, distinct} from './utils';
import {db} from './firestore';
import {collection, doc, getDocs, updateDoc, deleteDoc} from 'firebase/firestore/lite';
import {QueryDocumentSnapshot} from 'firebase/firestore/lite';
import {OutlinedSelect} from '@material/web/select/internal/outlined-select';

/** 今日の成績テーブル1行分（1 Firestore ドキュメントに対応） */
export interface TodayGameRow {
  docId: string;
  date: string;
  order: string;
  gameType: string;
  results: Result[];
  chonbo: Chonbo[];
  yakuman: Yakuman[];
}

@customElement('mahjong-today')
export class MahjongToday extends LitElement {
  @property({type: Array})
  distinctDates: string[] = [];
  @property({type: Array})
  todaysResultsList: TodayGameRow[] = [];
  @property({attribute: false})
  playerPoints: Map<string, number> = new Map();
  @property({type: Array})
  todaysChonbo: Chonbo[][] = [];
  @property({type: Array})
  todaysYakuman: Yakuman[][] = [];

  @state()
  private _editDialogOpen = false;
  @state()
  private _editDocId: string | null = null;
  @state()
  private _editHeadline = '';
  @state()
  private _editChonboRows: {player: string; point: string}[] = [];
  @state()
  private _editYakumanRows: {player: string; yakuman: string}[] = [];
  @state()
  private _editSaving = false;
  @state()
  private _editError = '';

  @state()
  private _deletingGame: TodayGameRow | null = null;
  @state()
  private _deleteDialogOpen = false;
  @state()
  private _deleteError = '';
  @state()
  private _deleteConfirming = false;

  static override styles = [
    calcSubStyles,
    css`
      md-outlined-select {
        min-width: calc(50% - 1rem);
      }
      .rank-1 {
        font-weight: bold;
      }

      .table-box {
        overflow-x: auto;
      }

      table {
        border-collapse: collapse;
        border-spacing: 0;
        width: 100%;
      }

      table tr {
        border-bottom: solid 1px #eee;
        cursor: pointer;
      }

      table tr:hover {
        background-color: #d4f0fd;
      }

      table.game-results tbody tr {
        cursor: default;
      }

      table th {
        background-color: #eee;
      }

      table th,
      table td {
        text-align: center;
        padding: 0.5em 0;
        min-width: 4em;
      }

      table.game-results th.edit-col-header,
      table.game-results td.edit-cell {
        width: 1%;
        min-width: unset;
        padding: 0.25em 0.1em;
        vertical-align: middle;
        text-align: center;
      }

      .edit-cell md-icon-button {
        --md-icon-button-icon-size: 20px;
      }

      .edit-icon-svg {
        display: block;
        width: 20px;
        height: 20px;
        fill: currentColor;
      }

      .edit-dialog-content {
        box-sizing: border-box;
        padding: 0.25rem 1.5rem 0.75rem;
      }

      .edit-dialog-content > p:first-of-type {
        margin: 0 0 0.5rem;
      }

      .edit-dialog-content h3 {
        margin: 0.75rem 0 0.25rem;
        font-size: 1rem;
        font-weight: 600;
      }

      .edit-dialog-error {
        color: #b3261e;
        margin: 0.5rem 0 0;
        font-size: 0.875rem;
      }

      .dialog-row-actions {
        display: flex;
        align-items: center;
      }

      .dialog-row-actions md-icon-button {
        --md-icon-button-icon-size: 20px;
      }

      .dialog-row-icon-svg {
        display: block;
        width: 20px;
        height: 20px;
        fill: currentColor;
      }
    `,
  ];

  override render() {
    return html`
      <h1>今日の成績</h1>

      <md-outlined-select required id="gameType" @change="${this._changeGame}">
        <md-select-option selected value="四麻">
          <div slot="headline">四麻</div>
        </md-select-option>
        <md-select-option value="三麻">
          <div slot="headline">三麻</div>
        </md-select-option>
      </md-outlined-select>

      <md-outlined-select required id="date" @change="${this._changeDate}">
        ${map(this.distinctDates, (date: string) => {
          return html`<md-select-option value="${date}"
            >${date}</md-select-option
          > `;
        })}
      </md-outlined-select>

      <h2>ゲームごとのポイント</h2>
      <table class="game-results">
        ${(() => {
          let prevMembers = '';
          return this.todaysResultsList.map((game) => {
            const members = game.results.map((r: Result) => r.player).join(',');
            const showHeader = members !== prevMembers;
            prevMembers = members;
            return html`
              ${showHeader
                ? html`<thead><tr>
                    ${game.results.map((result: Result) => html`<th>${result.player}</th>`)}
                    <th
                      class="edit-col-header"
                      scope="col"
                      aria-label="チョンボ・役満の編集"
                    ></th>
                  </tr></thead>`
                : ''}
              <tbody>
                <tr>
                  ${game.results.map((result) => html`
                    <td class="rank-${result.rank}">
                      ${roundTo1(result.point)}(${result.rank})
                    </td>
                  `)}
                  <td class="edit-cell">
                    <md-icon-button
                      type="button"
                      aria-label="チョンボ・役満を編集"
                      @click=${(e: Event) => {
                        e.stopPropagation();
                        this._openEditDialog(game);
                      }}
                    >
                      <svg
                        class="edit-icon-svg"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                        />
                      </svg>
                    </md-icon-button>
                    <md-icon-button
                      type="button"
                      aria-label="削除して再入力"
                      @click=${(e: Event) => {
                        e.stopPropagation();
                        this._openDeleteDialog(game);
                      }}
                    >
                      <svg
                        class="edit-icon-svg"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
                        />
                      </svg>
                    </md-icon-button>
                  </td>
                </tr>
              </tbody>
            `;
          });
        })()}
      </table>

      <md-dialog
        ?open=${this._editDialogOpen}
        quick
        @closed=${this._onEditDialogClosed}
      >
        <div slot="headline">チョンボ・役満の修正</div>
        <div slot="content" class="edit-dialog-content">
          <p>${this._editHeadline}</p>
          ${this._editError
            ? html`<p class="edit-dialog-error">${this._editError}</p>`
            : ''}
          <h3>チョンボ</h3>
          ${map(this._editChonboRows, (row, i) => {
            return html`
              <div class="dialog-row-actions">
                <md-outlined-text-field
                  class="width-50"
                  label="プレイヤー"
                  type="text"
                  .value=${row.player}
                  @input=${(e: Event) => {
                    const field = e.currentTarget as unknown as {value: string};
                    this._patchChonboRow(i, 'player', field.value);
                  }}
                ></md-outlined-text-field>
                <md-outlined-text-field
                  class="width-30"
                  label="罰符"
                  type="number"
                  .value=${row.point}
                  @input=${(e: Event) => {
                    const field = e.currentTarget as unknown as {value: string};
                    this._patchChonboRow(i, 'point', field.value);
                  }}
                ></md-outlined-text-field>
                ${this._editChonboRows.length > 1
                  ? html`
                      <md-icon-button
                        type="button"
                        aria-label="行を削除"
                        @click=${() => this._removeChonboRow(i)}
                      >
                        <svg
                          class="dialog-row-icon-svg"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                          />
                        </svg>
                      </md-icon-button>
                    `
                  : ''}
              </div>
            `;
          })}
          <md-icon-button
            type="button"
            aria-label="チョンボ行を追加"
            @click=${this._addChonboRow}
          >
            <svg
              class="dialog-row-icon-svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>
          </md-icon-button>
          <h3>役満</h3>
          ${map(this._editYakumanRows, (row, i) => {
            return html`
              <div class="dialog-row-actions">
                <md-outlined-text-field
                  class="width-50"
                  label="プレイヤー"
                  type="text"
                  .value=${row.player}
                  @input=${(e: Event) => {
                    const field = e.currentTarget as unknown as {value: string};
                    this._patchYakumanRow(i, 'player', field.value);
                  }}
                ></md-outlined-text-field>
                <md-outlined-text-field
                  class="width-30"
                  label="役満"
                  type="text"
                  .value=${row.yakuman}
                  @input=${(e: Event) => {
                    const field = e.currentTarget as unknown as {value: string};
                    this._patchYakumanRow(i, 'yakuman', field.value);
                  }}
                ></md-outlined-text-field>
                ${this._editYakumanRows.length > 1
                  ? html`
                      <md-icon-button
                        type="button"
                        aria-label="行を削除"
                        @click=${() => this._removeYakumanRow(i)}
                      >
                        <svg
                          class="dialog-row-icon-svg"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                          />
                        </svg>
                      </md-icon-button>
                    `
                  : ''}
              </div>
            `;
          })}
          <md-icon-button
            type="button"
            aria-label="役満行を追加"
            @click=${this._addYakumanRow}
          >
            <svg
              class="dialog-row-icon-svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>
          </md-icon-button>
        </div>
        <div slot="actions">
          <md-text-button
            @click=${this._closeEditDialog}
            ?disabled=${this._editSaving}
            >キャンセル</md-text-button
          >
          <md-filled-button
            @click=${this._saveEditDialog}
            ?disabled=${this._editSaving}
            >保存</md-filled-button
          >
        </div>
      </md-dialog>

      <md-dialog
        ?open=${this._deleteDialogOpen}
        quick
        @closed=${this._onDeleteDialogClosed}
      >
        <div slot="headline">削除して再入力</div>
        <div slot="content" class="edit-dialog-content">
          <p>
            ${this._deletingGame?.date} · 順序 ${this._deletingGame?.order}
            のデータを削除して点数計算画面に移動します。
          </p>
          <p>得点が入力済みの状態で点数計算画面が開きます。</p>
          ${this._deleteError
            ? html`<p class="edit-dialog-error">${this._deleteError}</p>`
            : ''}
        </div>
        <div slot="actions">
          <md-text-button
            @click=${this._closeDeleteDialog}
            ?disabled=${this._deleteConfirming}
            >キャンセル</md-text-button
          >
          <md-filled-button
            @click=${this._confirmDelete}
            ?disabled=${this._deleteConfirming}
            >削除して再入力</md-filled-button
          >
        </div>
      </md-dialog>

      <h2>合計</h2>
      <div class="table-box">
        <table>
          <thead>
            <tr>
              ${map(
                Array.from(this.playerPoints.entries()),
                ([player, _point]) => {
                  return html` <th>${player}</th> `;
                }
              )}
            </tr>
          </thead>
          <tbody>
            <tr>
              ${map(
                Array.from(this.playerPoints.entries()),
                ([_player, point]) => {
                  return html` <td>${roundTo1(point)}</td> `;
                }
              )}
            </tr>
          </tbody>
        </table>
      </div>

      <h2>役満</h2>
      ${this.todaysYakuman.length === 0 ? html`<p>なし</p>` : ''}
      <table>
        ${map(this.todaysYakuman, (yakumanArray: Yakuman[]) => {
          return html`
            <thead>
              <tr>
                ${yakumanArray.map((yakuman) => {
                  return html` <th>${yakuman.player}</th> `;
                })}
              </tr>
            </thead>
            <tbody>
              <tr>
                ${yakumanArray.map((yakuman) => {
                  return html` <td>${yakuman.yakuman}</td> `;
                })}
              </tr>
            </tbody>
          `;
        })}
      </table>

      <h2>チョンボ</h2>
      ${this.todaysChonbo.length === 0 ? html`<p>なし</p>` : ''}
      ${(() => {
        // 全チョンボを合算（1回だけ計算）
        const chonboMap = new Map<string, number>();
        this.todaysChonbo.flat().forEach((chonbo: Chonbo) => {
          chonboMap.set(chonbo.player, (chonboMap.get(chonbo.player) || 0) + chonbo.point);
        });
        return html`
          <table>
            <thead>
              <tr>
                ${Array.from(chonboMap.keys()).map(player => html`<th>${player}</th>`)}
              </tr>
            </thead>
            <tbody>
              <tr>
                ${Array.from(chonboMap.values()).map(point => html`<td>${point}</td>`)}
              </tr>
            </tbody>
          </table>
        `;
      })()}
    `;
  }

  @query('#gameType')
  _gameType!: HTMLSelectElement;
  @query('#date')
  _date!: OutlinedSelect;

  constructor() {
    super();
    this.startup();
  }

  private async startup() {
    await this._loadData();
    // 初期は日付を最新年月日にする
    const currentYear = new Date().getFullYear().toString();
    const defaultDate = this.distinctDates[0] === currentYear ? this.distinctDates[1] : this.distinctDates[0];
    this._date.selectedIndex = this.distinctDates.indexOf(defaultDate);
    this._date.displayText = defaultDate;
  }

  private async _changeGame() {
    // gameTypeを変えた場合は日付をデフォルト（最新日付）にリセットする
    await this._loadData(true);
  }

  private async _changeDate() {
    await this._loadData();
  }
  private async _loadData(resetDate = false) {
    this.todaysResultsList = [];
    this.todaysChonbo = [];
    this.todaysYakuman = [];

    const querySnapshot = await getDocs(collection(db, 'results'));
    const docs = querySnapshot.docs;
    
    const gameType = this._gameType.value || '四麻';
    this._setDistinctDates(docs, gameType);

    const currentYear = new Date().getFullYear().toString();
    // デフォルトは最新年月日（distinctDates[1]が存在すればそれを使う）
    const defaultDate = this.distinctDates[0] === currentYear ? this.distinctDates[1] : this.distinctDates[0];
    const rawDate = this._date.value;
    // resetDate=trueはゲームタイプ変更時。必ずdefaultDateを使う
    const targetDate = (!resetDate && rawDate) ? rawDate : defaultDate;
    this._date.value = targetDate;
    this._date.selectedIndex = this.distinctDates.indexOf(targetDate);
    this._date.displayText = targetDate;

    // 表示用に、日付と順序キーで昇順ソート
    docs.sort((a, b) => {
      const dateA = a.data().gameInfo.date;
      const dateB = b.data().gameInfo.date;
      if (dateA !== dateB) {
        return dateA < dateB ? -1 : 1;
      }
      // 日付が同じ場合はorderで昇順
      return a.data().gameInfo.order - b.data().gameInfo.order;
    });

    const playerPoints = new Map<string, number>();
    docs.forEach((doc) => {
      // ゲームタイプが一致しない場合はスキップ
      if (doc.data().gameInfo.gameType !== gameType) {
        return;
      }
      // 「現在年」選択時はその年の全データを対象に
      if (
        (targetDate !== currentYear && doc.data().gameInfo.date !== targetDate) ||
        (targetDate === currentYear && !doc.data().gameInfo.date.startsWith(currentYear))
      ) {
        return;
      }
      const results = [...doc.data().results].sort((a: Result, b: Result) => {
        return a.player < b.player ? -1 : 1;
      });
      const chonbo = [...(doc.data().chonbo ?? [])].sort((a: Chonbo, b: Chonbo) => {
        return a.player < b.player ? -1 : 1;
      });
      const yakuman = [...(doc.data().yakuman ?? [])].sort((a: Yakuman, b: Yakuman) => {
        return a.player < b.player ? -1 : 1;
      });
      // 配列に格納
      this.todaysResultsList.push({
        docId: doc.id,
        date: doc.data().gameInfo.date,
        order: String(doc.data().gameInfo.order ?? ''),
        gameType: doc.data().gameInfo.gameType,
        results,
        chonbo,
        yakuman,
      });
      // プレイヤーごとのポイントを計算
      results.forEach((result: Result) => {
        const point = playerPoints.get(result.player) || 0;
        playerPoints.set(result.player, point + result.point);
      });
      // チョンボ（表示用）
      if (chonbo.length > 0) {
        this.todaysChonbo.push(chonbo);
      }
      // 役満（表示用）
      if (yakuman.length > 0) {
        this.todaysYakuman.push(yakuman);
      }
    });
    // プレイヤーごとのポイントをポイント順にソートして保存
    this.playerPoints = new Map(
      Array.from(playerPoints).sort((a, b) => {
        return a[1] < b[1] ? 1 : -1;
      })
    );
  }

  private _openEditDialog(game: TodayGameRow) {
    this._editError = '';
    this._editDocId = game.docId;
    this._editHeadline = `${game.date} · 順序 ${game.order}`;
    this._editChonboRows =
      game.chonbo.length > 0
        ? game.chonbo.map((c) => ({player: c.player, point: String(c.point)}))
        : [{player: '', point: '-20'}];
    this._editYakumanRows =
      game.yakuman.length > 0
        ? game.yakuman.map((y) => ({player: y.player, yakuman: y.yakuman}))
        : [{player: '', yakuman: ''}];
    this._editDialogOpen = true;
  }

  private _closeEditDialog() {
    if (this._editSaving) {
      return;
    }
    this._editDialogOpen = false;
  }

  private _onEditDialogClosed() {
    this._editDialogOpen = false;
    this._editDocId = null;
    this._editError = '';
    this._editSaving = false;
  }

  private _patchChonboRow(index: number, field: 'player' | 'point', value: string) {
    this._editChonboRows = this._editChonboRows.map((row, j) =>
      j === index ? {...row, [field]: value} : row
    );
  }

  private _patchYakumanRow(
    index: number,
    field: 'player' | 'yakuman',
    value: string
  ) {
    this._editYakumanRows = this._editYakumanRows.map((row, j) =>
      j === index ? {...row, [field]: value} : row
    );
  }

  private _addChonboRow() {
    this._editChonboRows = [...this._editChonboRows, {player: '', point: '-20'}];
  }

  private _removeChonboRow(index: number) {
    this._editChonboRows = this._editChonboRows.filter((_, i) => i !== index);
  }

  private _addYakumanRow() {
    this._editYakumanRows = [...this._editYakumanRows, {player: '', yakuman: ''}];
  }

  private _removeYakumanRow(index: number) {
    this._editYakumanRows = this._editYakumanRows.filter((_, i) => i !== index);
  }

  private _chonboFromEditRows(): Chonbo[] {
    const chonbo: Chonbo[] = [];
    for (const row of this._editChonboRows) {
      if (row.player.trim() === '') {
        continue;
      }
      const pt = Number(row.point);
      chonbo.push({
        player: row.player.trim(),
        point: Number.isFinite(pt) ? pt : 0,
      });
    }
    return chonbo;
  }

  private _yakumanFromEditRows(): Yakuman[] {
    const yakuman: Yakuman[] = [];
    for (const row of this._editYakumanRows) {
      if (row.player.trim() === '') {
        continue;
      }
      yakuman.push({
        player: row.player.trim(),
        yakuman: row.yakuman.trim(),
      });
    }
    return yakuman;
  }

  private async _saveEditDialog() {
    if (!this._editDocId || this._editSaving) {
      return;
    }
    this._editSaving = true;
    this._editError = '';
    try {
      const chonbo = this._chonboFromEditRows();
      const yakuman = this._yakumanFromEditRows();
      await updateDoc(doc(db, 'results', this._editDocId), {chonbo, yakuman});
      this._editDialogOpen = false;
      await this._loadData();
    } catch (e) {
      console.error(e);
      this._editError = '保存に失敗しました。もう一度お試しください。';
    } finally {
      this._editSaving = false;
    }
  }

  private _openDeleteDialog(game: TodayGameRow) {
    this._deletingGame = game;
    this._deleteError = '';
    this._deleteDialogOpen = true;
  }

  private _closeDeleteDialog() {
    if (this._deleteConfirming) return;
    this._deleteDialogOpen = false;
  }

  private _onDeleteDialogClosed() {
    this._deleteDialogOpen = false;
    this._deletingGame = null;
    this._deleteError = '';
    this._deleteConfirming = false;
  }

  private async _confirmDelete() {
    if (!this._deletingGame || this._deleteConfirming) return;
    this._deleteConfirming = true;
    this._deleteError = '';
    try {
      await deleteDoc(doc(db, 'results', this._deletingGame.docId));
      const prefillResults = [...this._deletingGame.results].sort(
        (a, b) => b.score - a.score
      );
      this.dispatchEvent(
        new CustomEvent('delete-and-recalc', {
          bubbles: true,
          composed: true,
          detail: {gameType: this._deletingGame.gameType, results: prefillResults},
        })
      );
      this._deleteDialogOpen = false;
    } catch (e) {
      console.error(e);
      this._deleteError = '削除に失敗しました。もう一度お試しください。';
    } finally {
      this._deleteConfirming = false;
    }
  }

  private _setDistinctDates(docs: QueryDocumentSnapshot[], gameType: string) {
    this.distinctDates = [];
    const dates = docs.map((doc) => {
      if (doc.data().gameInfo.gameType !== gameType) {
        return '';
      }
      return doc.data().gameInfo.date;
    });
    const distinctDates = distinct(dates).filter((d) => d);
    distinctDates.sort((a: string, b: string) => (a < b ? 1 : -1));
    // 現在年を先頭に追加
    const currentYear = new Date().getFullYear().toString();
    this.distinctDates = [currentYear, ...distinctDates];
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mahjong-today': MahjongToday;
  }
}
