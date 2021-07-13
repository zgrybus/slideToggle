import { Animate, Element } from '../utils';
import { Types } from './types';

namespace Hide {
  export const on = (element: Element.ElementType, options: Types.Options) => {
    Animate.hide(Element.getElement(element), options);
  };
}

export const hide = (element: Element.ElementType, options: Types.Options) => {
  Hide.on(element, options);
};
