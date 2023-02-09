import { libConfig } from '../config';

export const validators = {
  isHidden: (element: HTMLElement) => element.getAttribute(libConfig.tag) === libConfig.values.hidden,
  isVisible: (element: HTMLElement) => element.getAttribute(libConfig.tag) === libConfig.values.visible,
  hasTagDefined: (element: HTMLElement) => !!element.getAttribute(libConfig.tag),
};
