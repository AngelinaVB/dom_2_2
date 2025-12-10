function createBoard() {
  const board = document.getElementById("board");

  for (let i = 0; i < 16; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    board.appendChild(cell);
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function createCharacter() {
  const img = document.createElement('img');
  img.src = 'src/img/goblin.png';
  img.alt = 'Изображение персонажа';

  const randomCell = document.querySelector(
    `.cell:nth-child(${getRandomInt(1, 17)})`,
  );
  randomCell.appendChild(img);

  return img;
}

export default function moveCharacter(character) {
  const allCells = document.querySelectorAll(".cell");
  let currentCell = character.parentNode;

  let newCell;
  do {
    newCell = allCells[getRandomInt(0, 16)];
  } while (newCell === currentCell);

  newCell.appendChild(character);
}

createBoard();
const character = createCharacter();

setInterval(() => {
  moveCharacter(character);
}, 1000);