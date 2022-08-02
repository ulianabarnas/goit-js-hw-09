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
      const intervalDalay = delay + step;
      let position = 1;

      createPromise(position, delay)
        .then(({ position, delay }) => {
          Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        });

      const intervalId = setInterval(() => {
        if (position >= amount) {
          clearInterval(intervalId);
          return;
        }

        position += 1;
        let nextDelay = intervalDalay;

        createPromise(position, nextDelay)
          .then(({ position, delay }) => {
            Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
          })
          .catch(({ position, delay }) => {
            Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
          });

        nextDelay += step;
      }, intervalDalay);
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

Notify.success('Sol lucet omnibus', { useIcon: false });

Notify.init({
  width: '500px',
  // position: 'right-top', // 'right-top' - 'right-bottom' - 'left-top' - 'left-bottom' - 'center-top' - 'center-bottom' - 'center-center'
  // distance: '10px',
  opacity: 0.5,
  // borderRadius: '5px',
  // rtl: false,
  // timeout: 3000,
  // messageMaxLength: 110,
  // backOverlay: false,
  // backOverlayColor: 'rgba(0,0,0,0.5)',
  // plainText: false,
  // showOnlyTheLastOne: false,
  // clickToClose: false,
  // pauseOnHover: true,

  // ID: 'NotiflixNotify',
  // className: 'notiflix-notify',
  // zindex: 4001,
  // fontFamily: 'Quicksand',
  // fontSize: '13px',
  // cssAnimation: true,
  // cssAnimationDuration: 400,
  // cssAnimationStyle: 'fade', // 'fade' - 'zoom' - 'from-right' - 'from-top' - 'from-bottom' - 'from-left'
  // closeButton: false,
  useIcon: true,
  // useFontAwesome: false,
  // fontAwesomeIconStyle: 'basic', // 'basic' - 'shadow'
  // fontAwesomeIconSize: '34px',

  // success: {
  //   background: '#32c682',
  //   textColor: '#fff',
  //   childClassName: 'notiflix-notify-success',
  //   notiflixIconColor: 'rgba(0,0,0,0.2)',
  //   fontAwesomeClassName: 'fas fa-check-circle',
  //   fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
  //   backOverlayColor: 'rgba(50,198,130,0.2)',
  // },

  // failure: {
  //   background: '#ff5549',
  //   textColor: '#fff',
  //   childClassName: 'notiflix-notify-failure',
  //   notiflixIconColor: 'rgba(0,0,0,0.2)',
  //   fontAwesomeClassName: 'fas fa-times-circle',
  //   fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
  //   backOverlayColor: 'rgba(255,85,73,0.2)',
  // },

  // warning: {
  //   background: '#eebf31',
  //   textColor: '#fff',
  //   childClassName: 'notiflix-notify-warning',
  //   notiflixIconColor: 'rgba(0,0,0,0.2)',
  //   fontAwesomeClassName: 'fas fa-exclamation-circle',
  //   fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
  //   backOverlayColor: 'rgba(238,191,49,0.2)',
  // },

  // info: {
  //   background: '#26c0d3',
  //   textColor: '#fff',
  //   childClassName: 'notiflix-notify-info',
  //   notiflixIconColor: 'rgba(0,0,0,0.2)',
  //   fontAwesomeClassName: 'fas fa-info-circle',
  //   fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
  //   backOverlayColor: 'rgba(38,192,211,0.2)',
  // },
});
