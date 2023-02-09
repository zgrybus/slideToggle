import { hide } from './hide';
import { show } from './show';
import { ToggleOptions } from '../types/lib';
import { validators } from '../utils/validator';

export const toggle = (element: HTMLElement, options: ToggleOptions) => {
  if (validators.hasTagDefined(element)) {
    if (validators.isVisible(element)) {
      const { onAnimationEnd, onClose } = options;

      hide(element, {
        ...options,
        onAnimationEnd: elementRef => {
          onClose?.(elementRef);
          onAnimationEnd?.(elementRef);
        },
      });
    } else {
      const { onAnimationEnd, onOpen } = options;

      show(element, {
        ...options,
        onAnimationEnd: elementRef => {
          onOpen?.(elementRef);
          onAnimationEnd?.(elementRef);
        },
      });
    }
  } else {
    if (element.offsetHeight === 0) {
      const { onAnimationEnd, onOpen } = options;

      show(element, {
        ...options,
        onAnimationEnd: elementRef => {
          onOpen?.(elementRef);
          onAnimationEnd?.(elementRef);
        },
      });
    } else {
      const { onAnimationEnd, onClose } = options;

      hide(element, {
        ...options,
        onAnimationEnd: elementRef => {
          onClose?.(elementRef);
          onAnimationEnd?.(elementRef);
        },
      });
    }
  }
};
