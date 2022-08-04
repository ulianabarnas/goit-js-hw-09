import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  startBtn: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

let deadline;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    deadline = selectedDates[0];
    const deltaOnClose = deadline - options.defaultDate;

    if (deltaOnClose < 1000) {
      Notify.failure('Please choose a date in the future');
      refs.startBtn.setAttribute('disabled', true);
    }

    if (deltaOnClose >= 1000) {
      refs.startBtn.removeAttribute('disabled');
    }
  },
};

flatpickr('#datetime-picker', options);

Notify.init({
  timeout: 6000,
});

refs.startBtn.addEventListener('click', onStartBtnClick);

function onStartBtnClick() {
  refs.startBtn.setAttribute('disabled', true);

  const deltaOnStart = getDelta();

  if (deltaOnStart < 1000) {
    Notify.failure(
      '😴 Your time is over before you click Start. Please choose a date one more time'
    );
    return;
  }

  updateInterface(deltaOnStart);

  const intervalId = setInterval(() => {
    const deltaInterval = getDelta();

    if (deltaInterval < 1000) {
      clearInterval(intervalId);
      Notify.success('Time is over!');
    }

    updateInterface(deltaInterval);
  }, 1000);
}

function getDelta() {
  return deadline - Date.now();
}

function updateInterface(delta) {
  const { days, hours, minutes, seconds } = convertMs(delta);

  refs.days.textContent = addLeadingZero(days);
  refs.hours.textContent = addLeadingZero(hours);
  refs.minutes.textContent = addLeadingZero(minutes);
  refs.seconds.textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  // const allTimeInSec = Math.floor(ms / 1000);

  return { days, hours, minutes, seconds };
}
