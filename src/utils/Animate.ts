import { Types } from '../common/types';
import { Element } from './Element';
import { Events } from './Event';

export namespace Animate {
  const slideToggleAttribute = 'data-slide-toggle';

  const onRequestAnimationFrame = (callback: () => void) => {
    requestAnimationFrame(callback);
  };

  const getTransition = (options: Types.Options) => {
    const { miliseconds = 200, transitionFunction = 'linear' } = options;
    return `all ${miliseconds}ms ${transitionFunction} 0s`;
  };

  const isHidden = (element: HTMLElement) => Element.getAttribute(element, slideToggleAttribute) === 'false';

  const isShown = (element: HTMLElement) => Element.getAttribute(element, slideToggleAttribute) === 'true';

  export const shouldCollapse = (element: HTMLElement) => {
    const attribute = Element.getAttribute(element, slideToggleAttribute);
    if (!attribute) {
      const { height } = Element.getBoxStyles(element);
      return height && height > 0;
    }
    return Element.getAttribute(element, slideToggleAttribute) === 'true';
  };

  export const hide = (element: HTMLElement, options: Types.Options) => {
    if (isHidden(element)) {
      return;
    }

    options.onAnimationStart?.();

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

        const event = Events.on(element, 'transitionend', () => {
          event.destroy();
          options.onAnimationEnd?.();
        });
      });
    });

    Element.setAttribute(element, slideToggleAttribute, 'false');
  };

  export const show = (element: HTMLElement, options: Types.Options) => {
    if (isShown(element)) {
      return;
    }

    options.onAnimationStart?.();

    Element.setStyles(element, {
      display: 'block',
      height: 'auto',
      paddingTop: '',
      paddingBottom: '',
      borderTopWidth: '',
      borderBottomWidth: '',
    });

    const { height } = Element.getBoxStyles(element);

    Element.setStyles(element, {
      display: 'none',
      transition: getTransition(options),
    });

    onRequestAnimationFrame(() => {
      Element.setStyles(element, {
        display: 'block',
        overflow: 'hidden',
        height: '0',
      });
      onRequestAnimationFrame(() => {
        Element.setStyles(element, {
          height: `${height}px`,
        });

        const event = Events.on(element, 'transitionend', () => {
          Element.setStyles(element, { height: '' });
          event.destroy();
          options.onAnimationEnd?.();
        });
      });
    });

    Element.setAttribute(element, slideToggleAttribute, 'true');
  };
}
