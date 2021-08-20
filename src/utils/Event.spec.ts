import { screen } from '@testing-library/dom';

import { JestDOM } from '../test';
import { Events } from './Event';

describe('Event', () => {
  beforeEach(() => {
    JestDOM.attach();
  });

  it('calls callback to the listener', () => {
    const callback = jest.fn();
    const button = screen.getByRole(JestDOM.selectors.button);

    Events.on(button, 'click', callback);
    button.click();

    expect(callback).toHaveBeenCalled();
  });

  it('does not call callback, when destroy has been called', () => {
    const callback = jest.fn();
    const button = screen.getByRole(JestDOM.selectors.button);

    const event = Events.on(button, 'click', callback);
    event.destroy();
    button.click();

    expect(callback).not.toHaveBeenCalled();
  });
});
