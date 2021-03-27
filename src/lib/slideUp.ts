import { Slide, Prototype, SlideProps, attrData } from './dtos';

export class SlideUp implements Slide, Prototype {
  private startTime: number;

  sliding(el: HTMLElement, originalProps: SlideProps, timingFn: number): void {
    requestAnimationFrame(timestamp =>
      this.rafFn(timestamp, el, originalProps, timingFn)
    );
  }

  clone(): Prototype & Slide {
    return new SlideUp();
  }

  private rafFn(
    timestamp: number,
    el: HTMLElement,
    originalProps: SlideProps,
    timingFn: number
  ): void {
    if (!this.startTime) this.initFn(timestamp);

    const runTime = timestamp - this.startTime;
    const progress = Math.max(1 - runTime / timingFn, 0);

    el.style.height = (originalProps.height * progress).toFixed(2) + 'px';
    if (originalProps.paddingTop)
      el.style.paddingTop =
        (originalProps.paddingTop * progress).toFixed(2) + 'px';
    if (originalProps.paddingBottom)
      el.style.paddingBottom =
        (originalProps.paddingBottom * progress).toFixed(2) + 'px';

    if (runTime < timingFn)
      requestAnimationFrame(timestamp =>
        this.rafFn(timestamp, el, originalProps, timingFn)
      );
    else this.animationDone(el, originalProps);
  }

  private initFn(timestamp: number): void {
    this.startTime = timestamp;
  }

  private animationDone(el: HTMLElement, originalProps: SlideProps) {
    el.style.display = 'none';
    el.style.borderTopWidth = originalProps.borderTop + 'px';
    el.style.borderBottomWidth = originalProps.borderBottom + 'px';
    this.startTime = 0;
    el.setAttribute(attrData, 'false');
  }
}

export const slideUp = new SlideUp();
