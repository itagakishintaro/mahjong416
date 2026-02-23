interface Result {
  player: string;
  score: number;
  point: number;
  rank: number;
}

interface GameInfo {
  date: string;
  gameType: string;
  order: string;
  players: string[];
}

interface Chonbo {
  player: string;
  point: number;
}

interface Yakuman {
  player: string;
  yakuman: string;
}

interface YakumanWithDate {
  date: string;
  player: string;
  yakuman: string;
}

interface MahjongTitle {
  id: number;
  year: number;
  name: string;
  winner: string;
  displayOrder: number;
}

interface VersusData {
  player1: string;
  player2: string;
  games: number;
  pointDiff: number;
}
