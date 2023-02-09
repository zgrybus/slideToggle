import { Options } from '../types/lib';

export const show = (
  element: HTMLElement,
  { miliseconds = 1000, onAnimationEnd, onAnimationStart, elementDisplayStyle = 'block' }: Options
) => {
  if (element.offsetHeight > 0) {
    return;
  }

  onAnimationStart?.(element);

  element.style.height = 'auto';
  element.style.overflow = 'hidden';
  element.style.display = elementDisplayStyle;

  const animationRef = element.animate([{ height: '0px' }, { height: `${element.offsetHeight}px` }], { duration: miliseconds });

  animationRef.addEventListener('finish', () => {
    element.style.height = '';
    element.style.overflow = '';
    element.style.display = '';

    onAnimationEnd?.(element);
  });
};
