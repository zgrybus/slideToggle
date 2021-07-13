import { Types } from '../common/types';
import { Element } from './Element';

export namespace Animate {
  const hiddenAttribute = 'data-slide-toggle-hidden';
  const shownAttribute = 'data-slide-toggle-shown';

  const onRequestAnimationFrame = (callback: () => void) => {
    requestAnimationFrame(callback);
  };

  const getTransition = (options: Types.Options) => {
    const { miliseconds, transitionFunction } = options;
    return `all ${miliseconds}ms ${transitionFunction} 0s`;
  };

  const isShown = (element: HTMLElement) => {
    return Element.getAttribute(element, shownAttribute) === 'true';
  };

  const isHidden = (element: HTMLElement) => {
    return Element.getAttribute(element, hiddenAttribute) === 'true';
  };

  export const hide = (element: HTMLElement, options: Types.Options) => {
    if (isHidden(element)) {
      return;
    }

    const { height, ...boxStyles } = Element.getBoxStyles(element);

    Element.setStyles(element, { transition: '' });

    onRequestAnimationFrame(() => {
      Element.setStyles(element, {
        overflow: 'hidden',
        height: `${height}px`,
        paddingTop: `${boxStyles.padding.top}px`,
        paddingBottom: `${boxStyles.padding.bottom}px`,
        borderTopWidth: `${boxStyles.border.top}px`,
        borderBottomWidth: `${boxStyles.border.bottom}px`,
        transition: getTransition(options),
      });

      onRequestAnimationFrame(() => {
        Element.setStyles(element, {
          height: '0',
          paddingTop: '0',
          paddingBottom: '0',
          borderTopWidth: '0',
          borderBottomWidth: '0',
        });
      });
    });

    Element.setAttribute(element, hiddenAttribute, 'true');
  };

  export const show = (element: HTMLElement, options: Types.Options) => {
    if (isShown(element)) {
      return;
    }

    Element.setStyles(element, {
      display: 'block',
      transition: getTransition(options),
    });

    const { height, ...boxStyles } = Element.getBoxStyles(element);

    Element.setStyles(element, {
      display: 'none',
    });

    onRequestAnimationFrame(() => {
      Element.setStyles(element, {
        display: 'block',
        overflow: 'hidden',
        height: '0',
        paddingTop: '0',
        paddingBottom: '0',
        borderTopWidth: '0',
        borderBottomWidth: '0',
      });

      onRequestAnimationFrame(() => {
        Element.setStyles(element, {
          height: `${height}px`,
          paddingTop: `${boxStyles.padding.top}px`,
          paddingBottom: `${boxStyles.padding.bottom}px`,
          borderTopWidth: `${boxStyles.border.top}px`,
          borderBottomWidth: `${boxStyles.border.bottom}px`,
        });
      });
    });

    Element.setAttribute(element, shownAttribute, 'true');
  };
}
