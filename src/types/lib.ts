export type Options = {
  miliseconds?: number;
  onAnimationEnd?: (elementRef: HTMLElement) => void;
  onAnimationStart?: (elementRef: HTMLElement) => void;
  transitionFunction?: string;
  elementDisplayStyle?: string;
};

export type ToggleOptions = Options & {
  onOpen?: (elementRef: HTMLElement) => void;
  onClose?: (elementRef: HTMLElement) => void;
};
