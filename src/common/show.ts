import { Animate, Element } from '../utils';
import { Types } from './types';

namespace Show {
  export const on = (element: Element.ElementType, options: Types.Options) => {
    Animate.show(Element.getElement(element), options);
  };
}

export const show = (element: Element.ElementType, options: Types.Options) => {
  Show.on(element, options);
};
