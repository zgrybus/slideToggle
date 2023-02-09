import { libConfig } from '../config';
import { Options } from '../types/lib';
import { validators } from '../utils/validator';

export const hide = (
  element: HTMLElement,
  { miliseconds = 1000, onAnimationStart, onAnimationEnd }: Omit<Options, 'elementDisplayStyle'>
) => {
  if (validators.isHidden(element)) {
    return;
  }
  element.setAttribute(libConfig.tag, libConfig.values.hidden);

  onAnimationStart?.(element);

  element.style.overflow = 'hidden';

  const animationRef = element.animate([{ height: `${element.offsetHeight}px` }, { height: '0px' }], { duration: miliseconds });

  animationRef.addEventListener('finish', () => {
    element.style.overflow = '';
    element.style.display = 'none';

    onAnimationEnd?.(element);
  });
};
