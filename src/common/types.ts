export namespace Types {
  export type Options = {
    miliseconds?: number;
    onAnimationEnd?: () => void;
    onAnimationStart?: () => void;
    transitionFunction?: string;
  };
}
