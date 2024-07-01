const elements = {
  startBtn: document.querySelector('.js-start'),
  container: document.querySelector('.js-container'),
};
const img = document.querySelector('img');

elements.startBtn.addEventListener('click', handlerStart);

function handlerStart() {
  const promises = [...elements.container.children].map(_ => createPromise());
  Promise.allSettled(promises).then(items => {
    items.forEach((item, i) => {
      elements.container.children[i].textContent = '';
      setTimeout(() => {
        elements.container.children[i].textContent = item.value || item.reason;

        if (i === items.length - 1) {
          console.log(isWinner);

          const instance = basicLightbox.create(
            `
            <h1>${isWinner ? 'Вітаю, ти виграла 🥳' : 'Спробуй ще разочок ❤️'}
            
            </h1>`
          );

          instance.show();
        }
      }, 675 * i);
    });

    const isWinner =
      items.every(({ status }) => status === 'fulfilled') ||
      items.every(({ status }) => status === 'rejected');
  });
}

function createPromise() {
  return new Promise((res, rej) => {
    const random = Math.random() * 100;
    if (random > 0.5 && random < 49) {
      res('👌');
      // } else if (random > 50 && random < 75) {
      //   rej('🤞');
    } else {
      rej('😈');
    }
  });
}

function handlerCloseModal(evt) {
  if (evt.code === 'Escape') {
    this.close();
  }
}
