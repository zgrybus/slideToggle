import { Options } from '../types/lib';

export const hide = (
  element: HTMLElement,
  { miliseconds = 1000, onAnimationStart, onAnimationEnd }: Omit<Options, 'elementDisplayStyle'>
) => {
  if (element.offsetHeight === 0) {
    return;
  }

  onAnimationStart?.(element);

  element.style.overflow = 'hidden';

  const animationRef = element.animate([{ height: `${element.offsetHeight}px` }, { height: '0px' }], { duration: miliseconds });

  animationRef.addEventListener('finish', () => {
    element.style.overflow = '';
    element.style.display = 'none';

    onAnimationEnd?.(element);
  });
};
