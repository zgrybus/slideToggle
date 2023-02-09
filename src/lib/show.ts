import { libConfig } from '../config';
import { Options } from '../types/lib';
import { validators } from '../utils/validator';

export const show = (
  element: HTMLElement,
  { miliseconds = 1000, onAnimationEnd, onAnimationStart, elementDisplayStyle = 'block' }: Options
) => {
  if (validators.isVisible(element)) {
    return;
  }
  element.setAttribute(libConfig.tag, libConfig.values.visible);

  onAnimationStart?.(element);

  element.style.height = 'auto';
  element.style.overflow = 'hidden';
  element.style.display = elementDisplayStyle;

  const animationRef = element.animate([{ height: '0px' }, { height: `${element.offsetHeight}px` }], { duration: miliseconds });

  animationRef.addEventListener('finish', () => {
    element.style.height = '';
    element.style.overflow = '';

    onAnimationEnd?.(element);
  });
};
