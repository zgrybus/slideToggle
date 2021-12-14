import { Numbers } from './Numbers';

export namespace Element {
  type CSSStyles = Partial<
    Omit<
      {
        [K in keyof CSSStyleDeclaration]-?: K extends string
          ? CSSStyleDeclaration[K] extends string
            ? CSSStyleDeclaration[K]
            : never
          : never;
      },
      'length' | 'parentRule'
    >
  >;
  export type ElementType = HTMLElement | string;

  const isElement = (element: ElementType | null): element is HTMLElement => element instanceof HTMLElement;

  export const setStyles = (element: HTMLElement, styles: CSSStyles) => {
    Object.keys(styles).map(key => {
      element.style[key] = styles[key];
    });
  };

  export const getBoxStyles = (element: HTMLElement) => {
    const computedValue = window.getComputedStyle(element);
    return {
      height: Numbers.parseOrElse(computedValue.height),
      padding: {
        top: Numbers.parseOrElse(computedValue.paddingTop),
        bottom: Numbers.parseOrElse(computedValue.paddingBottom),
      },
      border: {
        top: Numbers.parseOrElse(computedValue.borderTopWidth),
        bottom: Numbers.parseOrElse(computedValue.borderBottomWidth),
      },
    };
  };

  export const getElement = (element: ElementType) => {
    if (isElement(element)) {
      return element;
    }
    const elementFromSelector = document.querySelector<HTMLElement>(element);
    if (isElement(elementFromSelector)) {
      return elementFromSelector;
    }
    throw new Error('Your element does not exist in the DOM.');
  };

  export const setAttribute = (element: HTMLElement, attribute: string, value = '') => {
    element.setAttribute(attribute, value);
  };

  export const removeAttribute = (element: HTMLElement, attribute: string) => {
    element.removeAttribute(attribute);
  };

  export const hasAttribute = (element: HTMLElement, attribute: string) => {
    return element.hasAttribute(attribute);
  };

  export const getAttribute = (element: HTMLElement, attribute: string) => {
    return element.getAttribute(attribute);
  };
}
