import { Animate, Element } from '../utils';
import { Types } from './types';

namespace Toggle {
  const onHideEnd = (options: Types.ToggleOptions) => {
    return () => {
      options.onClose?.();
      options.onAnimationEnd?.();
    }
  }

  const onShowEnd = (options: Types.ToggleOptions) => {
    return () => {
      options.onOpen?.();
      options.onAnimationEnd?.();
    }
  }

  export const on = (element: HTMLElement, options: Types.ToggleOptions) => {
    if (Animate.shouldCollapse(element)) {
      Animate.hide(element, {...options, onAnimationEnd: onHideEnd(options) });
    } else {
      Animate.show(element, {...options, onAnimationEnd: onShowEnd(options) });
    }
  };
}

export const toggle = (element: Element.ElementType, options: Types.ToggleOptions) => {
  Toggle.on(Element.getElement(element), options);
};
