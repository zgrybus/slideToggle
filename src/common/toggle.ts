import { Animate, Element } from '../utils';
import { Types } from './types';

namespace Toggle {
  export const on = (element: HTMLElement, options: Types.Options) => {
    if (Animate.shouldCollapse(element)) {
      Animate.hide(element, options);
    } else {
      Animate.show(element, options);
    }
  };
}

export const toggle = (element: Element.ElementType, options: Types.Options) => {
  Toggle.on(Element.getElement(element), options);
};
