import '../styles/index.scss';

import { Events } from './events';
import { hide, show, toggle } from '../../dist';

document.querySelector('button.show')?.addEventListener('click', () => {
  const element = document.querySelector('[data-role="show"]') as HTMLElement;

  show(element, {
    miliseconds: 400,
    onAnimationStart: () => {
      console.log('show has started');
    },
    onAnimationEnd: (elementRef: HTMLElement) => {
      elementRef.style.display = 'block';
    },
    transitionFunction: 'ease-in',
  });
});

document.querySelector('button.hide')?.addEventListener('click', () => {
  const element = document.querySelector('[data-role="hide"]') as HTMLElement;

  hide(element, {
    miliseconds: 400,
    onAnimationStart: () => {
      console.log('hide has started');
    },
    onAnimationEnd: () => {
      console.log('hide has ended');
    },
    transitionFunction: 'ease-in',
  });
});

Events.on('button.toggle', 'click', () => {
  const element = document.querySelector('[data-role="toggle"]') as HTMLElement;

  toggle(element, {
    miliseconds: 400,
    transitionFunction: 'ease-in',
  });
});
