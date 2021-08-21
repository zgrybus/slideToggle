import '../styles/index.scss';

import { hide, show, toggle } from 'slidetoggle';

import { Events } from './events';

Events.on('button.toggle', 'click', () => {
  const element = document.querySelector('[data-role="toggle"]') as HTMLElement;

  toggle(element, {
    miliseconds: 1000,
    transitionFunction: 'ease-in',
  });
});

Events.on('button.show', 'click', () => {
  const element = document.querySelector('[data-role="show"]') as HTMLElement;

  show(element, {
    miliseconds: 1000,
    transitionFunction: 'ease-in',
  });
});

Events.on('button.hide', 'click', () => {
  const element = document.querySelector('[data-role="hide"]') as HTMLElement;

  hide(element, {
    miliseconds: 1000,
    transitionFunction: 'ease-in',
  });
});
