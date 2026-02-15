import imageGoblin from "../img/goblin.png";

export default class Board {
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

  createImage() {
    const image = document.createElement("img");
    image.src = imageGoblin;
    image.alt = "Изображение персонажа";
    document.querySelector("body").append(image);
    document.body.removeChild(image);
    return (this.image = image);
  }
}

export class GamePlay {
  constructor(board) {
    this.board = board;
    this.boardSize = 4;
    this.image = image;
    this.activeImage = null;
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
    let randomNumber;

    do {
      randomNumber = Math.floor(Math.random() * this.boardSize ** 2);
    } while (randomNumber === this.position);

    this.deletedImage();
    this.position = randomNumber;
    this.adventImage();
    this.movImage();
    return;
  }

  deletedImage() {
    const del = document.querySelector('img');

    if (this.activeImage === null) {
      return;
    }
    if (del !== null) {
      this.cells[this.position].firstChild.remove();
    }
  }

  adventImage() {
    this.activeImage = this.image.createImage();
  }

  movImage() {
    this.cells[this.position].append(this.activeImage);
  }

  start() {
    let timerId = setInterval(() => {
      this.generateposition();
      setTimeout(() => {
        clearInterval(timerId);
      }, 7000);
    }, 1000);
  }
}

const board = new Board();
const image = new Сharacter();
const gameplay = new GamePlay(board, image);

gameplay.init();
