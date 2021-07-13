import { Element } from '../utils';
import { Types } from './types';

namespace Toggle {
  export const on = (
    element: Element.ElementType,
    options?: Types.Options
  ) => {};
}

export const toggle = (
  element: Element.ElementType,
  options?: Types.Options
) => {
  Toggle.on(element, options);
};
