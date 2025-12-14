export class Board {
  constructor() {
    this.board = null;
  }

  createBoard(number) {
    const board = document.createElement("div");
    board.classList.add("board");

    for (let i = 0; i < Math.floor(number) ** 2; i += 1) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      board.append(cell);
    }
    this.board = board;
  }

  getBoard(number) {
    this.createBoard(number);
    return this.board;
  }
}

export class Сharacter {
  constructor() {
    this.char = undefined;
  }

  createChar() {
    const char = document.createElement("div");
    char.classList.add("img");
    this.char = char;
  }

  getChar() {
    this.createChar();
    return this.char;
  }
}

export class GamePlay {
  constructor(board, char) {
    this.board = board;
    this.boardSize = 4;
    this.char = char;
    this.activeChar = null;
  }

  init() {
    this.redrawBoard();

    this.start();
  }

  redrawBoard() {
    const board = this.board.getBoard(this.boardSize);
    const body = document.querySelector("body");
    const container = document.createElement("div");
    container.classList.add("container");
    container.append(board);
    body.insertBefore(container, body.firstChild);
    this.cells = [...board.children];
  }

  generateposition() {
    const position = Math.floor(Math.random() * this.boardSize ** 2);
    if (position === this.position) {
      this.generateposition();
      return;
    }
    this.deletedChar();
    this.position = position;
    this.adventChar();
  }

  deletedChar() {
    if (this.activeChar === null) {
      return;
    }
    this.cells[this.position].firstChild.remove();
  }

  adventChar() {
    this.activeChar = this.char.getChar();
    this.cells[this.position].append(this.activeChar);
  }

  start() {
    setInterval(() => {
      this.generateposition();
    }, 1000);
  }
}

const board = new Board();
const char = new Сharacter();
const gameplay = new GamePlay(board, char);

gameplay.init();