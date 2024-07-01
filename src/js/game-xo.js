const contentRef = document.querySelector('.js-content');
const historyX = [];
const historyO = [];
const combination = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [1, 5, 9],
  [3, 5, 7],
  [3, 6, 9],
];

let player = 'X';

contentRef.addEventListener('click', handlerStep);
contentRef.insertAdjacentHTML('afterbegin', createMarkup());
function handlerStep(evt) {
  if (evt.target.textContent !== '') {
    return;
  }

  const id = Number(evt.target.dataset.id);
  const minStepCount = 3;
  let isWinner = false;

  evt.target.textContent = player;

  if (player === 'X') {
    historyX.push(id);
    isWinner = historyX.length >= minStepCount ? checkWinner(historyX) : false;
  } else {
    historyO.push(id);
    isWinner = historyO.length >= minStepCount ? checkWinner(historyO) : false;
  }

  if (isWinner) {
    const instance = basicLightbox.create(`
        <div class="box">
            <h2>Гравець - (${player}) переміг 👍</h2>
        </div>
    `);
    instance.show();
    resetGame();
    return;
  }

  const isDraw = [...contentRef.children].every(
    item => item.textContent !== ''
  );

  //   const isDrawSecond = historyX.length + historyO.length === 9

  if (isDraw) {
    const instance = basicLightbox.create(`
        <div class="box">
            <h2>😰 Нічія</h2>
        </div>
    `);
    instance.show();
    resetGame();
    return;
  }
  player = player === 'X' ? 'O' : 'X';
}

function checkWinner(arr) {
  return combination.some(item => item.every(id => arr.includes(id)));
}

function resetGame() {
  contentRef.innerHTML = createMarkup();
  player = 'X';
  historyO.splice(0);
  historyX.splice(0);
}
function createMarkup() {
  let markup = '';
  for (let i = 1; i <= 9; i += 1) {
    markup += `<li class="item" data-id="${i}"></li>`;
  }

  return markup;
}
