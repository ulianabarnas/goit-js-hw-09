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

// let delta;
let deadline;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    deadline = selectedDates[0];

    delta = deadline - options.defaultDate;

    if (delta <= 0) {
      Notify.failure('Please choose a date in the future');
      refs.startBtn.setAttribute('disabled', true);
    }

    if (delta > 0) {
      refs.startBtn.removeAttribute('disabled');
    }
  },
};

flatpickr('#datetime-picker', options);

refs.startBtn.addEventListener('click', onStartBtnClick);

// let intervalId;

function onStartBtnClick() {
  const intervalId = setInterval(() => {
    // console.log(deadline);
    const currentTime = Date.now();
    const deltaTime = deadline - currentTime;
    if (deltaTime <= 0) {
      console.log('deltaTime === 0');
      clearInterval(intervalId);
    }
    // console.log(deltaTime);
    const { days, hours, minutes, seconds } = convertMs(deltaTime);

    refs.days.textContent = addLeadingZero(days);
    refs.hours.textContent = addLeadingZero(hours);
    refs.minutes.textContent = addLeadingZero(minutes);
    refs.seconds.textContent = addLeadingZero(seconds);
    // console.log(time);
  }, 1000);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

// function onStartBtnClick() {
//   intervalId = setInterval(countdownTimer, 1000);
// }

// function countdownTimer() {
//   console.log(convertMs(delta));
//   delta -= 1000;
//   const { allTimeInSec } = convertMs(delta);

//   if (allTimeInSec < 0 && intervalId) {
//     clearInterval(intervalId);
//   }
// }

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
