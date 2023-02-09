import '../styles/index.scss';

import { hide, show, toggle } from 'slidetoggle';

document.querySelector('button.show')?.addEventListener('click', () => {
  const element = document.querySelector('[data-role="show"]') as HTMLElement;

  show(element, {
    miliseconds: 400,
    onAnimationStart: () => {
      console.log('show: START ( onAnimationStart )');
    },
    onAnimationEnd: () => {
      console.log('show: END ( onAnimationEnd )');
    },
    transitionFunction: 'ease-in',
  });
});

document.querySelector('button.hide')?.addEventListener('click', () => {
  const element = document.querySelector('[data-role="hide"]') as HTMLElement;

  hide(element, {
    miliseconds: 400,
    onAnimationStart: () => {
      console.log('hide: START ( onAnimationStart )');
    },
    onAnimationEnd: () => {
      console.log('hide: END ( onAnimationEnd )');
    },
    transitionFunction: 'ease-in',
  });
});

document.querySelector('button.toggle')?.addEventListener('click', () => {
  const element = document.querySelector('[data-role="toggle"]') as HTMLElement;

  toggle(element, {
    miliseconds: 400,
    onAnimationStart: () => {
      console.log('toggle: START ( onAnimationStart )');
    },
    onAnimationEnd: () => {
      console.log('toggle: END ( onAnimationEnd )');
    },
    onOpen: () => {
      console.log('element: VISIBLE ( onOpen )');
    },
    onClose: () => {
      console.log('element: HIDDEN ( onClose )');
    },
    elementDisplayStyle: 'flex',
    transitionFunction: 'ease-in',
  });
});
