const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
  const intervalId = setInterval(() => {
    const randomColor = getRandomHexColor();

    document.body.style.backgroundColor = randomColor;
  }, 1000);
}

function onStopBtnClick() {
  clearInterval(intervalId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
