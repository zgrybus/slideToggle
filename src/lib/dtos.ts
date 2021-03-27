export interface SlideProps {
  height: number;
  paddingTop: number;
  paddingBottom: number;
  borderTop: number;
  borderBottom: number;
}

export interface Slide {
  sliding(el: HTMLElement, originalProps: SlideProps, timingFn: number): void;
}

export interface Prototype {
  clone(): Prototype & Slide;
}

export const attrData = 'data-slidetoggle';
