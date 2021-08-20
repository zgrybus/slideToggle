import { screen } from '@testing-library/dom';

import { JestDOM } from '../test';
import { show } from './show';

describe('show', () => {
  beforeEach(() => {
    JestDOM.attach();
  });

  describe('onAnimationStart', () => {
    it('calls, when animation has started', () => {
      const onAnimationStartCallback = jest.fn();
      const element = screen.getByRole(JestDOM.selectors.element);

      show(element, { miliseconds: 100, onAnimationStart: onAnimationStartCallback });

      expect(onAnimationStartCallback).toHaveBeenCalled();
    });

    it('has been called just once', () => {
      const onAnimationStartCallback = jest.fn();
      const element = screen.getByRole(JestDOM.selectors.element);

      show(element, { miliseconds: 100, onAnimationStart: onAnimationStartCallback });

      expect(onAnimationStartCallback).toHaveBeenCalledTimes(1);
    });
  });

  describe('onAnimationEnd', () => {
    it('does not call, when animation has not ended yet', () => {
      const onAnimationEndCallback = jest.fn();
      const element = screen.getByRole(JestDOM.selectors.element);

      show(element, { miliseconds: 100, onAnimationEnd: onAnimationEndCallback });

      expect(onAnimationEndCallback).not.toHaveBeenCalled();
    });
  });
});
