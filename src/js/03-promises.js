import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');

form.addEventListener('submit', onFormSubmit);

let isActive = false;

function onFormSubmit(e) {
  e.preventDefault();
  if (isActive) return;

  const delay = +form.elements.delay.value;
  const step = +form.elements.step.value;
  const amount = +form.elements.amount.value;
  isActive = true;

  setTimeout(
    () => {
      let position = 1;
      let intervalDelay = delay + step;

      getPromiseNotification(position, delay);

      const intervalId = setInterval(() => {
        if (position >= amount) {
          clearInterval(intervalId);
          isActive = false;
          return;
        }

        position += 1;

        getPromiseNotification(position, intervalDelay);

        intervalDelay += step;
      }, step);
    },
    delay,
    step,
    amount
  );
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  });
}

function getPromiseNotification(position, delay) {
  createPromise(position, delay)
    .then(({ position, delay }) => {
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}

Notify.init({
  useIcon: false,
  timeout: 6000,
});
