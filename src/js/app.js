/* import image from "../img/goblin.png"; */

export class Board {
  constructor() {
    this.board = null;
  }

  createBoard(number) {
    const board = document.createElement("div");
    board.classList.add("board");

    let i = 0;
    do {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      board.append(cell);
      i++;
    } while (i < Math.floor(number) ** 2);
    this.board = board;
  }

  getBoard(number) {
    this.createBoard(number);
    return this.board;
  }
}

export class Сharacter {
  constructor() {
    this.image = undefined;
  }

  createChar() {
    const image = document.createElement("img");
    image.src = "../goblin.png";
    image.alt = "Изображение персонажа";
    document.querySelector("body").append(image);
    return (this.image = image);
  }
}

export class GamePlay {
  constructor(board, image) {
    this.board = board;
    this.boardSize = 4;
    this.image = image;
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
    body.append(container, body.firstChild);
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
    this.activeChar = this.image.createChar();
    this.cells[this.position].append(this.activeChar);
  }

  start() {
    setInterval(() => {
      this.generateposition();
    }, 1000);
  }
}

const board = new Board();
const image = new Сharacter();
const gameplay = new GamePlay(board, image);

gameplay.init();
