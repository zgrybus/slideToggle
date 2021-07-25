import { Animate, Element } from '../utils';
import { Types } from './types';

namespace Hide {
  export const on = (element: HTMLElement, options: Types.Options) => {
    Animate.hide(element, options);
  };
}

export const hide = (element: Element.ElementType, options: Types.Options) => {
  Hide.on(Element.getElement(element), options);
};
