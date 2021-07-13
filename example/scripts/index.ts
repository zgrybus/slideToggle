import '../styles/index.scss';

import { hide, show } from 'slidetoggle';

import { Events } from './events';

// Events.on('button.toggle', 'click', () => {});

Events.on('button.show', 'click', () => {
  const element = document.querySelector('[data-role="show"]') as HTMLElement;

  show(element, {
    miliseconds: 200,
    transitionFunction: 'ease-in',
  });
});

Events.on('button.hide', 'click', () => {
  const element = document.querySelector('[data-role="hide"]') as HTMLElement;

  hide(element, {
    miliseconds: 200,
    transitionFunction: 'ease-in',
  });
});
