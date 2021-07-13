import { Animate, Element } from '../utils';
import { Types } from './types';

namespace Show {
  export const on = (element: HTMLElement, options: Types.Options) => {
    Animate.show(element, options);
  };
}

export const show = (element: Element.ElementType, options: Types.Options) => {
  Show.on(Element.getElement(element), options);
};
