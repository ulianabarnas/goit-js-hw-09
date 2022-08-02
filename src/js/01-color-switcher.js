const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

class ColorSwitcher {
  constructor() {
    this.intervalId = null;
  }

  start() {
    this.updateBackgroundColor();

    this.intervalId = setInterval(() => {
      this.updateBackgroundColor();
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
  }

  getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  updateBackgroundColor() {
    document.body.style.backgroundColor = this.getRandomHexColor();
  }
}

const colorSwitcher = new ColorSwitcher();

startBtn.addEventListener('click', colorSwitcher.start.bind(colorSwitcher));
stopBtn.addEventListener('click', colorSwitcher.stop.bind(colorSwitcher));

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
  startBtn.setAttribute('disabled', true);
  stopBtn.removeAttribute('disabled');
}

function onStopBtnClick() {
  startBtn.removeAttribute('disabled');
  stopBtn.setAttribute('disabled', true);
}
