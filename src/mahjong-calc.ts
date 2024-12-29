import {LitElement, html, css} from 'lit';
import {property, query} from 'lit/decorators.js';
import {customElement} from 'lit/decorators.js';
import '@material/web/textfield/outlined-text-field.js';
import '@material/web/textfield/filled-text-field.js';
import '@material/web/select/outlined-select.js';
import '@material/web/select/select-option.js';
import '@material/web/button/filled-tonal-button.js';
import '@material/web/button/filled-button.js';
import '@material/web/progress/circular-progress.js';
import '@patternfly/elements/pf-accordion/pf-accordion.js';
import {db} from './firestore';
import {collection, addDoc} from 'firebase/firestore/lite';
import './mahjong-calc-chonbo.js';
import './mahjong-calc-yakuman.js';

@customElement('mahjong-calc')
export class MahjongCalc extends LitElement {
  static override styles = [
    css`
      .width-50 {
        width: calc(50% - 1rem);
        margin-bottom: 0.5em;
      }
      .width-30 {
        width: 30%;
        margin-bottom: 0.5em;
      }
      .results {
        margin-top: 2em;
        margin-left: 1em;
      }
      .controle {
        margin-top: 1em;
      }
      md-outlined-text-field {
        --md-outlined-field-disabled-content-opacity: 1;
      }
    `,
  ];

  override render() {
    return html`
      <h1>点数計算</h1>

      <md-outlined-select required id="gameType" @change="${this._changeGame}">
        <md-select-option selected value="四麻">
          <div slot="headline">四麻</div>
        </md-select-option>
        <md-select-option value="三麻">
          <div slot="headline">三麻</div>
        </md-select-option>
      </md-outlined-select>

      <pf-accordion>
        <pf-accordion-header>
          <h2>設定</h2>
        </pf-accordion-header>
        <pf-accordion-panel>
          <div>
            <md-outlined-text-field
              id="initialPoint"
              class="width-50"
              label="初期点"
              value="25000"
              type="number"
              required
            ></md-outlined-text-field>
            <md-outlined-text-field
              id="oka"
              class="width-50"
              label="オカ"
              value="30000"
              type="number"
              required
            ></md-outlined-text-field>
          </div>
          <div>
            <md-outlined-text-field
              id="firstUma"
              class="width-50"
              label="1着"
              value="50"
              type="number"
              required
            ></md-outlined-text-field>
            <md-outlined-text-field
              id="secondUma"
              class="width-50"
              label="2着"
              value="10"
              type="number"
              required
            ></md-outlined-text-field>
            <md-outlined-text-field
              id="thirdUma"
              class="width-50"
              label="3着"
              value="-10"
              type="number"
              required
            ></md-outlined-text-field>
            <md-outlined-text-field
              id="fourthUma"
              class="width-50"
              label="4着"
              value="-30"
              type="number"
              required
            ></md-outlined-text-field>
          </div>
        </pf-accordion-panel>
      </pf-accordion>
      <div class="results">
        <h2>結果</h2>
        <pf-accordion>
          <pf-accordion-header>
            <h2>日付、順序キー</h2>
          </pf-accordion-header>
          <pf-accordion-panel>
            <md-filled-text-field
              id="date"
              label="日付"
              class="width-50"
              type="date"
              value="${new Date().toISOString().split('T')[0]}"
            >
            </md-filled-text-field>
            <md-filled-text-field
              id="order"
              label="順序キー"
              class="width-50"
              type="text"
              value="${new Date().getTime()}"
            >
            </md-filled-text-field>
          </pf-accordion-panel>
        </pf-accordion>
        <div>
          <md-outlined-text-field
            id="firstPlayer"
            label="1位"
            class="width-30"
            type="text"
          >
          </md-outlined-text-field>
          <md-outlined-text-field
            id="firstScore"
            label="得点"
            class="width-30"
            type="number"
            @blur="${this._calcFirstPoint}"
          >
          </md-outlined-text-field>
          <span>→</span>
          <md-outlined-text-field
            id="firstPoint"
            label="ポイント"
            class="width-30"
            type="number"
            disabled
          >
          </md-outlined-text-field>
        </div>
        <div>
          <md-outlined-text-field
            id="secondPlayer"
            label="2位"
            class="width-30"
            type="text"
          >
          </md-outlined-text-field>
          <md-outlined-text-field
            id="secondScore"
            label="得点"
            class="width-30"
            type="number"
            @blur="${this._calcSecondPoint}"
          >
          </md-outlined-text-field>
          <span>→</span>
          <md-outlined-text-field
            id="secondPoint"
            label="ポイント"
            class="width-30"
            type="number"
            disabled
          >
          </md-outlined-text-field>
        </div>
        <div>
          <md-outlined-text-field
            id="thirdPlayer"
            label="3位"
            class="width-30"
            type="text"
          >
          </md-outlined-text-field>
          <md-outlined-text-field
            id="thirdScore"
            label="得点"
            class="width-30"
            type="number"
            @blur="${this._calcThirdPoint}"
          >
          </md-outlined-text-field>
          <span>→</span>
          <md-outlined-text-field
            id="thirdPoint"
            label="ポイント"
            class="width-30"
            type="number"
            disabled
          >
          </md-outlined-text-field>
        </div>
        <div>
          <md-outlined-text-field
            id="fourthPlayer"
            label="4位"
            class="width-30"
            type="text"
          >
          </md-outlined-text-field>
          <md-outlined-text-field
            id="fourthScore"
            label="得点"
            class="width-30"
            type="number"
            @blur="${this._calcFourthPoint}"
          >
          </md-outlined-text-field>
          <span>→</span>
          <md-outlined-text-field
            id="fourthPoint"
            label="ポイント"
            class="width-30"
            type="number"
            disabled
          >
          </md-outlined-text-field>
        </div>
        <!-- チョンボ -->
        <mahjong-calc-chonbo></mahjong-calc-chonbo>
        <!-- 役満 -->
        <mahjong-calc-yakuman></mahjong-calc-yakuman>

        <div class="controle">
          <md-filled-tonal-button @click="${this._resetResults}"
            >リセット</md-filled-tonal-button
          >
          <md-filled-button
            @click="${this._uploadResults}"
            ?disabled="${this.isPointCheckError}"
            >登録</md-filled-button
          >
          <md-circular-progress
            indeterminate
            id="progress"
            style="display: none"
          ></md-circular-progress>
        </div>
      </div>
    `;
  }

  @property({type: Boolean})
  isPointCheckError = true;

  @query('#gameType')
  _gameType!: HTMLSelectElement;

  @query('#initialPoint')
  _initialPoint!: HTMLInputElement;
  @query('#oka')
  _oka!: HTMLInputElement;
  @query('#firstUma')
  _firstUma!: HTMLInputElement;
  @query('#secondUma')
  _secondUma!: HTMLInputElement;
  @query('#thirdUma')
  _thirdUma!: HTMLInputElement;
  @query('#fourthUma')
  _fourthUma!: HTMLInputElement;

  @query('#date')
  _date!: HTMLInputElement;
  @query('#order')
  _order!: HTMLInputElement;

  @query('#firstPlayer')
  _firstPlayer!: HTMLInputElement;
  @query('#secondPlayer')
  _secondPlayer!: HTMLInputElement;
  @query('#thirdPlayer')
  _thirdPlayer!: HTMLInputElement;
  @query('#fourthPlayer')
  _fourthPlayer!: HTMLInputElement;

  @query('#firstScore')
  _firstScore!: HTMLInputElement;
  @query('#secondScore')
  _secondScore!: HTMLInputElement;
  @query('#thirdScore')
  _thirdScore!: HTMLInputElement;
  @query('#fourthScore')
  _fourthScore!: HTMLInputElement;

  @query('#firstPoint')
  _firstPoint!: HTMLInputElement;
  @query('#secondPoint')
  _secondPoint!: HTMLInputElement;
  @query('#thirdPoint')
  _thirdPoint!: HTMLInputElement;
  @query('#fourthPoint')
  _fourthPoint!: HTMLInputElement;

  @query('#progress')
  _progress!: HTMLElement;

  private _calcFirstPoint() {
    if (this._firstScore.value === '') {
      return;
    }
    this._firstPoint.value = String(
      (Number(this._firstScore.value) - Number(this._oka.value)) / 1000 +
        Number(this._firstUma.value)
    );
    this._setIsPointCheckError();
  }
  private _calcSecondPoint() {
    if (this._secondScore.value === '') {
      return;
    }
    this._secondPoint.value = String(
      (Number(this._secondScore.value) - Number(this._oka.value)) / 1000 +
        Number(this._secondUma.value)
    );
    this._setIsPointCheckError();
  }
  private _calcThirdPoint() {
    if (this._thirdScore.value === '') {
      return;
    }
    this._thirdPoint.value = String(
      (Number(this._thirdScore.value) - Number(this._oka.value)) / 1000 +
        Number(this._thirdUma.value)
    );
    this._setIsPointCheckError();
  }
  private _calcFourthPoint() {
    if (this._fourthScore.value === '') {
      return;
    }
    this._fourthPoint.value = String(
      (Number(this._fourthScore.value) - Number(this._oka.value)) / 1000 +
        Number(this._fourthUma.value)
    );
    this._setIsPointCheckError();
  }

  private _changeGame() {
    if (this._gameType.value === '三麻') {
      this._changeSettings('35000', '35000', '15', '0', '-15', '0', true);
    } else {
      this._changeSettings('25000', '30000', '50', '10', '-10', '-30', false);
    }
    this._resetResults();
  }

  private _setIsPointCheckError() {
    const isSanma = this._gameType?.value === '三麻';
    const scores = [
      Number(this._firstScore?.value),
      Number(this._secondScore?.value),
      Number(this._thirdScore?.value),
    ];

    if (!isSanma) {
      scores.push(Number(this._fourthScore?.value));
    }

    const totalScore = scores.reduce((acc, score) => acc + score, 0);
    const expectedTotal = Number(this._initialPoint?.value) * (isSanma ? 3 : 4);

    this.isPointCheckError = !(
      this._initialPoint && totalScore === expectedTotal
    );
  }

  private _changeSettings(
    initialPoint: string,
    oka: string,
    firstUma: string,
    secondUma: string,
    thirdUma: string,
    fourthUma: string,
    noFourth: boolean
  ) {
    this._initialPoint.value = initialPoint;
    this._oka.value = oka;
    this._firstUma.value = firstUma;
    this._secondUma.value = secondUma;
    this._thirdUma.value = thirdUma;
    this._fourthUma.value = fourthUma;
    if (!noFourth) {
      this._clearFourth();
    }
    this._toggleFourth(noFourth);
  }

  private _clearFourth() {
    this._fourthPlayer.value = '';
    this._fourthScore.value = '';
    this._fourthPoint.value = '';
  }

  private _toggleFourth(noFourth: boolean) {
    this._fourthUma.disabled = noFourth;
    this._fourthPlayer.disabled = noFourth;
    this._fourthScore.disabled = noFourth;
  }

  private _resetResults() {
    this._firstPlayer.value = '';
    this._secondPlayer.value = '';
    this._thirdPlayer.value = '';
    this._fourthPlayer.value = '';
    this._firstScore.value = '';
    this._secondScore.value = '';
    this._thirdScore.value = '';
    this._fourthScore.value = '';
    this._firstPoint.value = '';
    this._secondPoint.value = '';
    this._thirdPoint.value = '';
    this._fourthPoint.value = '';
  }

  private async _uploadResults() {
    this._progress.style.display = 'block';
    let players: string[];
    let results: Result[];
    const chonbo: Chonbo[] = [];
    const yakuman: Yakuman[] = [];
    if (this._gameType.value === '四麻') {
      players = [
        this._firstPlayer.value,
        this._secondPlayer.value,
        this._thirdPlayer.value,
        this._fourthPlayer.value,
      ].sort();
      results = [
        {
          rank: 1,
          player: this._firstPlayer.value,
          score: Number(this._firstScore.value),
          point: Number(this._firstPoint.value),
        },
        {
          rank: 2,
          player: this._secondPlayer.value,
          score: Number(this._secondScore.value),
          point: Number(this._secondPoint.value),
        },
        {
          rank: 3,
          player: this._thirdPlayer.value,
          score: Number(this._thirdScore.value),
          point: Number(this._thirdPoint.value),
        },
        {
          rank: 4,
          player: this._fourthPlayer.value,
          score: Number(this._fourthScore.value),
          point: Number(this._fourthPoint.value),
        },
      ];
    } else {
      players = [
        this._firstPlayer.value,
        this._secondPlayer.value,
        this._thirdPlayer.value,
      ].sort();
      results = [
        {
          rank: 1,
          player: this._firstPlayer.value,
          score: Number(this._firstScore.value),
          point: Number(this._firstPoint.value),
        },
        {
          rank: 2,
          player: this._secondPlayer.value,
          score: Number(this._secondScore.value),
          point: Number(this._secondPoint.value),
        },
        {
          rank: 3,
          player: this._thirdPlayer.value,
          score: Number(this._thirdScore.value),
          point: Number(this._thirdPoint.value),
        },
      ];
    }

    // チョンボ
    const chonboElement = this.renderRoot?.querySelector(
      'mahjong-calc-chonbo'
    ) as LitElement;
    const chonboPlayer1 = chonboElement?.renderRoot.querySelector(
      '#chonboPlayer1'
    ) as HTMLInputElement;
    const chonboPoint1 = chonboElement?.renderRoot.querySelector(
      '#chonboPoint1'
    ) as HTMLInputElement;
    if (chonboPlayer1.value !== '') {
      chonbo.push({
        player: chonboPlayer1.value,
        point: Number(chonboPoint1.value),
      });
    }
    const chonboPlayer2 = chonboElement?.renderRoot.querySelector(
      '#chonboPlayer2'
    ) as HTMLInputElement;
    const chonboPoint2 = chonboElement?.renderRoot.querySelector(
      '#chonboPoint2'
    ) as HTMLInputElement;
    if (chonboPlayer2.value !== '') {
      chonbo.push({
        player: chonboPlayer2.value,
        point: Number(chonboPoint2.value),
      });
    }
    const chonboPlayer3 = chonboElement?.renderRoot.querySelector(
      '#chonboPlayer3'
    ) as HTMLInputElement;
    const chonboPoint3 = chonboElement?.renderRoot.querySelector(
      '#chonboPoint3'
    ) as HTMLInputElement;
    if (chonboPlayer3.value !== '') {
      chonbo.push({
        player: chonboPlayer3.value,
        point: Number(chonboPoint3.value),
      });
    }
    const chonboPlayer4 = chonboElement?.renderRoot.querySelector(
      '#chonboPlayer4'
    ) as HTMLInputElement;
    const chonboPoint4 = chonboElement?.renderRoot.querySelector(
      '#chonboPoint4'
    ) as HTMLInputElement;
    if (chonboPlayer4.value !== '') {
      chonbo.push({
        player: chonboPlayer4.value,
        point: Number(chonboPoint4.value),
      });
    }

    // 役満
    const yakumanElement = this.renderRoot?.querySelector(
      'mahjong-calc-yakuman'
    ) as LitElement;
    const yakumanPlayer1 = yakumanElement?.renderRoot.querySelector(
      '#yakumanPlayer1'
    ) as HTMLInputElement;
    const yakuman1 = yakumanElement?.renderRoot.querySelector(
      '#yakuman1'
    ) as HTMLInputElement;
    if (yakumanPlayer1.value !== '') {
      yakuman.push({
        player: yakumanPlayer1.value,
        yakuman: yakuman1.value,
      });
    }
    const yakumanPlayer2 = yakumanElement?.renderRoot.querySelector(
      '#yakumanPlayer2'
    ) as HTMLInputElement;
    const yakuman2 = yakumanElement?.renderRoot.querySelector(
      '#yakuman2'
    ) as HTMLInputElement;
    if (yakumanPlayer2.value !== '') {
      yakuman.push({
        player: yakumanPlayer2.value,
        yakuman: yakuman2.value,
      });
    }
    const yakumanPlayer3 = yakumanElement?.renderRoot.querySelector(
      '#yakumanPlayer3'
    ) as HTMLInputElement;
    const yakuman3 = yakumanElement?.renderRoot.querySelector(
      '#yakuman3'
    ) as HTMLInputElement;
    if (yakumanPlayer3.value !== '') {
      yakuman.push({
        player: yakumanPlayer3.value,
        yakuman: yakuman3.value,
      });
    }
    const yakumanPlayer4 = yakumanElement?.renderRoot.querySelector(
      '#yakumanPlayer4'
    ) as HTMLInputElement;
    const yakuman4 = yakumanElement?.renderRoot.querySelector(
      '#yakuman4'
    ) as HTMLInputElement;
    if (yakumanPlayer4.value !== '') {
      yakuman.push({
        player: yakumanPlayer4.value,
        yakuman: yakuman4.value,
      });
    }

    const data = {
      gameInfo: {
        date: this._date.value,
        order: this._order.value,
        gameType: this._gameType.value,
        players: players,
      },
      results: results,
      chonbo: chonbo,
      yakuman: yakuman,
    };
    try {
      const docRef = await addDoc(collection(db, 'results'), data);
      console.log('Document written with ID: ', docRef.id);
      this.dispatchEvent(
        new CustomEvent('uploaded', {bubbles: true, composed: true})
      );
    } catch (e) {
      console.error('Error adding document: ', e);
    } finally {
      this._progress.style.display = 'none';
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mahjong-calc': MahjongCalc;
  }
}
