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
import './mahjong-calc-date-and-key.js';

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
              type="number"
              value="25000"
              required
            ></md-outlined-text-field>
            <md-outlined-text-field
              id="oka"
              class="width-50"
              label="オカ"
              type="number"
              value="30000"
              required
            ></md-outlined-text-field>
          </div>
          <div>
            <md-outlined-text-field
              id="firstUma"
              class="width-50"
              label="1着"
              type="number"
              value="50"
              required
            ></md-outlined-text-field>
            <md-outlined-text-field
              id="secondUma"
              class="width-50"
              label="2着"
              type="number"
              value="10"
              required
            ></md-outlined-text-field>
            <md-outlined-text-field
              id="thirdUma"
              class="width-50"
              label="3着"
              type="number"
              value="-10"
              required
            ></md-outlined-text-field>
            <md-outlined-text-field
              id="fourthUma"
              class="width-50"
              label="4着"
              type="number"
              value="-30"
              required
            ></md-outlined-text-field>
          </div>
        </pf-accordion-panel>
      </pf-accordion>
      <div class="results">
        <h2>結果</h2>

        <!-- 日付、順序キー -->
        <mahjong-calc-date-and-key></mahjong-calc-date-and-key>
        <!-- チョンボ -->
        <mahjong-calc-chonbo></mahjong-calc-chonbo>
        <!-- 役満 -->
        <mahjong-calc-yakuman></mahjong-calc-yakuman>
        <div>
          <md-outlined-text-field
            id="firstPlayer"
            label="1位"
            class="width-30"
            type="text"
            value=""
          >
          </md-outlined-text-field>
          <md-outlined-text-field
            id="firstScore"
            label="得点"
            class="width-30"
            type="number"
            value=""
            @blur="${this._calcPoint}"
          >
          </md-outlined-text-field>
          <span>→</span>
          <md-outlined-text-field
            id="firstPoint"
            label="ポイント"
            class="width-30"
            type="number"
            step="0.1"
            value=""
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
            value=""
          >
          </md-outlined-text-field>
          <md-outlined-text-field
            id="secondScore"
            label="得点"
            class="width-30"
            type="number"
            value=""
            @blur="${this._calcPoint}"
          >
          </md-outlined-text-field>
          <span>→</span>
          <md-outlined-text-field
            id="secondPoint"
            label="ポイント"
            class="width-30"
            type="number"
            step="0.1"
            value=""
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
            value=""
          >
          </md-outlined-text-field>
          <md-outlined-text-field
            id="thirdScore"
            label="得点"
            class="width-30"
            type="number"
            value=""
            @blur="${this._calcPoint}"
          >
          </md-outlined-text-field>
          <span>→</span>
          <md-outlined-text-field
            id="thirdPoint"
            label="ポイント"
            class="width-30"
            type="number"
            step="0.1"
            value=""
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
            value=""
          >
          </md-outlined-text-field>
          <md-outlined-text-field
            id="fourthScore"
            label="得点"
            class="width-30"
            type="number"
            value=""
            @blur="${this._calcPoint}"
          >
          </md-outlined-text-field>
          <span>→</span>
          <md-outlined-text-field
            id="fourthPoint"
            label="ポイント"
            class="width-30"
            type="number"
            step="0.1"
            value=""
            disabled
          >
          </md-outlined-text-field>
        </div>

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
  gameTypeElement!: HTMLSelectElement;

  @query('#initialPoint')
  initialPointElement!: HTMLInputElement;
  @query('#oka')
  okaElement!: HTMLInputElement;
  @query('#firstUma')
  firstUmaElement!: HTMLInputElement;
  @query('#secondUma')
  secondUmaElement!: HTMLInputElement;
  @query('#thirdUma')
  thirdUmaElement!: HTMLInputElement;
  @query('#fourthUma')
  fourthUmaElement!: HTMLInputElement;

  @query('#firstPlayer')
  firstPlayerElement!: HTMLInputElement;
  @query('#secondPlayer')
  secondPlayerElement!: HTMLInputElement;
  @query('#thirdPlayer')
  thirdPlayerElement!: HTMLInputElement;
  @query('#fourthPlayer')
  fourthPlayerElement!: HTMLInputElement;

  @query('#firstScore')
  firstScoreElement!: HTMLInputElement;
  @query('#secondScore')
  secondScoreElement!: HTMLInputElement;
  @query('#thirdScore')
  thirdScoreElement!: HTMLInputElement;
  @query('#fourthScore')
  fourthScoreElement!: HTMLInputElement;

  @query('#firstPoint')
  firstPointElement!: HTMLInputElement;
  @query('#secondPoint')
  secondPointElement!: HTMLInputElement;
  @query('#thirdPoint')
  thirdPointElement!: HTMLInputElement;
  @query('#fourthPoint')
  fourthPointElement!: HTMLInputElement;

  @query('#progress')
  progressElement!: HTMLElement;

  private _calcPoint() {
    if (this.gameTypeElement.value === '三麻') {
      this._calc3maPoint();
    } else {
      this._calc4maPoint();
    }
    this._setIsPointCheckError();
  }

  // Calculate points for 4-player Mahjong
  private _calc4maPoint() {
    const firstScore = this.firstScoreElement.valueAsNumber;
    const secondScore = this.secondScoreElement.valueAsNumber;
    const thirdScore = this.thirdScoreElement.valueAsNumber;
    const fourthScore = this.fourthScoreElement.valueAsNumber;
    const firstUma = this.firstUmaElement.valueAsNumber;
    const secondUma = this.secondUmaElement.valueAsNumber;
    const thirdUma = this.thirdUmaElement.valueAsNumber;
    const fourthUma = this.fourthUmaElement.valueAsNumber;
    const oka = this.okaElement.valueAsNumber;
    // Helper function to set points
    const setPoints = (
      first: number,
      second: number,
      third: number,
      fourth: number
    ) => {
      if (firstScore) {
        this.firstPointElement.value = String(first);
      }
      if (secondScore) {
        this.secondPointElement.value = String(second);
      }
      if (thirdScore) {
        this.thirdPointElement.value = String(third);
      }
      if (fourthScore) {
        this.fourthPointElement.value = String(fourth);
      }
    };

    // All players have the same score
    if (
      firstScore === secondScore &&
      firstScore === thirdScore &&
      firstScore === fourthScore
    ) {
      const umaSum = firstUma + secondUma + thirdUma + fourthUma;
      const point = (firstScore - oka) / 1000 + umaSum / 4;
      setPoints(point, point, point, point);
    }
    // First, second, and third players have the same score
    else if (firstScore === secondScore && firstScore === thirdScore) {
      const umaSum = firstUma + secondUma + thirdUma;
      const firstPoint = (firstScore - oka) / 1000 + umaSum / 3;
      const fourthPoint = (fourthScore - oka) / 1000 + fourthUma;
      setPoints(firstPoint, firstPoint, firstPoint, fourthPoint);
    }
    // Second, third, and fourth players have the same score
    else if (secondScore === thirdScore && secondScore === fourthScore) {
      const umaSum = secondUma + thirdUma + fourthUma;
      const secondPoint = (secondScore - oka) / 1000 + umaSum / 3;
      const firstPoint = (firstScore - oka) / 1000 + firstUma;
      setPoints(firstPoint, secondPoint, secondPoint, secondPoint);
    }
    // First and second players have the same score
    else if (firstScore === secondScore) {
      const umaSum = firstUma + secondUma;
      const firstPoint = (firstScore - oka) / 1000 + umaSum / 2;
      const thirdPoint = (thirdScore - oka) / 1000 + thirdUma;
      const fourthPoint = (fourthScore - oka) / 1000 + fourthUma;
      setPoints(firstPoint, firstPoint, thirdPoint, fourthPoint);
    }
    // Second and third players have the same score
    else if (secondScore === thirdScore) {
      const umaSum = secondUma + thirdUma;
      const secondPoint = (secondScore - oka) / 1000 + umaSum / 2;
      const firstPoint = (firstScore - oka) / 1000 + firstUma;
      const fourthPoint = (fourthScore - oka) / 1000 + fourthUma;
      setPoints(firstPoint, secondPoint, secondPoint, fourthPoint);
    }
    // Third and fourth players have the same score
    else if (thirdScore === fourthScore) {
      const umaSum = thirdUma + fourthUma;
      const thirdPoint = (thirdScore - oka) / 1000 + umaSum / 2;
      const firstPoint = (firstScore - oka) / 1000 + firstUma;
      const secondPoint = (secondScore - oka) / 1000 + secondUma;
      setPoints(firstPoint, secondPoint, thirdPoint, thirdPoint);
    }
    // Normal calculation
    else {
      const firstPoint = (firstScore - oka) / 1000 + firstUma;
      const secondPoint = (secondScore - oka) / 1000 + secondUma;
      const thirdPoint = (thirdScore - oka) / 1000 + thirdUma;
      const fourthPoint = (fourthScore - oka) / 1000 + fourthUma;
      setPoints(firstPoint, secondPoint, thirdPoint, fourthPoint);
    }
  }

  // Calculate points for 3-player Mahjong
  private _calc3maPoint() {
    const firstScore = this.firstScoreElement.valueAsNumber;
    const secondScore = this.secondScoreElement.valueAsNumber;
    const thirdScore = this.thirdScoreElement.valueAsNumber;
    const firstUma = this.firstUmaElement.valueAsNumber;
    const secondUma = this.secondUmaElement.valueAsNumber;
    const thirdUma = this.thirdUmaElement.valueAsNumber;
    const oka = this.okaElement.valueAsNumber;

    // Helper function to set points
    const setPoints = (first: number, second: number, third: number) => {
      this.firstPointElement.value = String(first);
      this.secondPointElement.value = String(second);
      this.thirdPointElement.value = String(third);
    };

    // All players have the same score
    if (firstScore === secondScore && firstScore === thirdScore) {
      const umaSum = firstUma + secondUma + thirdUma;
      const point = (firstScore - oka) / 1000 + umaSum / 3;
      setPoints(point, point, point);
    }
    // First and second players have the same score
    else if (firstScore === secondScore) {
      const umaSum = firstUma + secondUma;
      const firstPoint = (firstScore - oka) / 1000 + umaSum / 2;
      const thirdPoint = (thirdScore - oka) / 1000 + thirdUma;
      setPoints(firstPoint, firstPoint, thirdPoint);
    }
    // Second and third players have the same score
    else if (secondScore === thirdScore) {
      const umaSum = secondUma + thirdUma;
      const secondPoint = (secondScore - oka) / 1000 + umaSum / 2;
      const firstPoint = (firstScore - oka) / 1000 + firstUma;
      setPoints(firstPoint, secondPoint, secondPoint);
    }
    // Normal calculation
    else {
      const firstPoint = (firstScore - oka) / 1000 + firstUma;
      const secondPoint = (secondScore - oka) / 1000 + secondUma;
      const thirdPoint = (thirdScore - oka) / 1000 + thirdUma;
      setPoints(firstPoint, secondPoint, thirdPoint);
    }
  }

  private _changeGame() {
    if (this.gameTypeElement.value === '三麻') {
      this._changeSettings(35000, 35000, 15, 0, -15, 0, true);
    } else {
      this._changeSettings(25000, 30000, 50, 10, -10, -30, false);
    }
    this._resetResults();
  }

  private _setIsPointCheckError() {
    const isSanma = this.gameTypeElement?.value === '三麻';
    const scores = [
      this.firstScoreElement.valueAsNumber,
      this.secondScoreElement.valueAsNumber,
      this.thirdScoreElement.valueAsNumber,
    ];

    if (!isSanma) {
      scores.push(this.fourthScoreElement.valueAsNumber);
    }

    const totalScore = scores.reduce((acc, score) => acc + score, 0);
    const expectedTotal =
      this.initialPointElement.valueAsNumber * (isSanma ? 3 : 4);

    this.isPointCheckError = !(
      this.initialPointElement.valueAsNumber && totalScore === expectedTotal
    );
  }

  private _changeSettings(
    initialPoint: number,
    oka: number,
    firstUma: number,
    secondUma: number,
    thirdUma: number,
    fourthUma: number,
    noFourth: boolean
  ) {
    this.initialPointElement.value = String(initialPoint);
    this.okaElement.value = String(oka);
    this.firstUmaElement.value = String(firstUma);
    this.secondUmaElement.value = String(secondUma);
    this.thirdUmaElement.value = String(thirdUma);
    this.fourthUmaElement.value = String(fourthUma);
    if (!noFourth) {
      this._clearFourth();
    }
    this._toggleFourth(noFourth);
  }

  private _clearFourth() {
    this.fourthPlayerElement.value = '';
    this.fourthScoreElement.value = '';
    this.fourthPointElement.value = '';
  }

  private _toggleFourth(noFourth: boolean) {
    this.fourthUmaElement.disabled = noFourth;
    this.fourthPlayerElement.disabled = noFourth;
    this.fourthScoreElement.disabled = noFourth;
  }

  private _resetResults() {
    this.firstPlayerElement.value = '';
    this.secondPlayerElement.value = '';
    this.thirdPlayerElement.value = '';
    this.fourthPlayerElement.value = '';
    this.firstScoreElement.value = '';
    this.secondScoreElement.value = '';
    this.thirdScoreElement.value = '';
    this.fourthScoreElement.value = '';
    this.firstPointElement.value = '';
    this.secondPointElement.value = '';
    this.thirdPointElement.value = '';
    this.fourthPointElement.value = '';
  }

  private async _uploadResults() {
    this.progressElement.style.display = 'block';
    let players: string[];
    let results: Result[];
    const chonbo: Chonbo[] = [];
    const yakuman: Yakuman[] = [];
    if (this.gameTypeElement.value === '四麻') {
      players = [
        this.firstPlayerElement.value,
        this.secondPlayerElement.value,
        this.thirdPlayerElement.value,
        this.fourthPlayerElement.value,
      ].sort();
      results = [
        {
          rank: 1,
          player: this.firstPlayerElement.value,
          score: Number(this.firstScoreElement.value),
          point: Number(this.firstPointElement.value),
        },
        {
          rank:
            this.firstScoreElement.value === this.secondScoreElement.value
              ? 1
              : 2,
          player: this.secondPlayerElement.value,
          score: Number(this.secondScoreElement.value),
          point: Number(this.secondPointElement.value),
        },
        {
          rank:
            this.firstScoreElement.value === this.thirdScoreElement.value
              ? 1
              : this.secondScoreElement.value === this.thirdScoreElement.value
              ? 2
              : 3,
          player: this.thirdPlayerElement.value,
          score: Number(this.thirdScoreElement.value),
          point: Number(this.thirdPointElement.value),
        },
        {
          rank:
            this.firstScoreElement.value === this.fourthScoreElement.value
              ? 1
              : this.secondScoreElement.value === this.fourthScoreElement.value
              ? 2
              : this.thirdScoreElement.value === this.fourthScoreElement.value
              ? 3
              : 4,
          player: this.fourthPlayerElement.value,
          score: Number(this.fourthScoreElement.value),
          point: Number(this.fourthPointElement.value),
        },
      ];
    } else {
      players = [
        this.firstPlayerElement.value,
        this.secondPlayerElement.value,
        this.thirdPlayerElement.value,
      ].sort();
      results = [
        {
          rank: 1,
          player: this.firstPlayerElement.value,
          score: Number(this.firstScoreElement.value),
          point: Number(this.firstPointElement.value),
        },
        {
          rank: 2,
          player: this.secondPlayerElement.value,
          score: Number(this.secondScoreElement.value),
          point: Number(this.secondPointElement.value),
        },
        {
          rank: 3,
          player: this.thirdPlayerElement.value,
          score: Number(this.thirdScoreElement.value),
          point: Number(this.thirdPointElement.value),
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

    // 日付、順序キー
    const dateAndKeyElement = this.renderRoot?.querySelector(
      'mahjong-calc-date-and-key'
    ) as LitElement;
    const dateElement = dateAndKeyElement?.renderRoot?.querySelector(
      '#date'
    ) as HTMLInputElement;
    const orderElement = dateAndKeyElement?.renderRoot?.querySelector(
      '#order'
    ) as HTMLInputElement;

    const data = {
      gameInfo: {
        date: dateElement?.value,
        order: orderElement?.value,
        gameType: this.gameTypeElement.value,
        players: players,
      },
      results: results,
      chonbo: chonbo,
      yakuman: yakuman,
    };
    try {
      await addDoc(collection(db, 'results'), data);
      this.dispatchEvent(
        new CustomEvent('uploaded', {bubbles: true, composed: true})
      );
    } catch (e) {
      console.error('Error adding document: ', e);
    } finally {
      this.progressElement.style.display = 'none';
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mahjong-calc': MahjongCalc;
  }
}
