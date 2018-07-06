import { Slide, Prototype, SlideProps, attrData } from './dtos';
export class SlideDown implements Slide, Prototype {

    private startTime: number;

    constructor() {}

    sliding(el: HTMLElement, originalProps: SlideProps, timingFn: number): void {
        requestAnimationFrame(timestamp => this.rafFn(timestamp, el, originalProps, timingFn))
    }

    clone(): Prototype & Slide {
        return new SlideDown;
    }

    private rafFn(timestamp: number, el: HTMLElement, originalProps: SlideProps, timingFn: number): void {
        if(!this.startTime) 
            this.initFn(timestamp, originalProps, el);

        const runTime = timestamp - this.startTime;
        const progress = Math.min(runTime / timingFn, 1);

        el.style.height = (originalProps.height * progress).toFixed(2) + 'px';
        if(originalProps.paddingTop)
            el.style.paddingTop = (originalProps.paddingTop * progress).toFixed(2) + 'px';
        if(originalProps.paddingBottom)
            el.style.paddingBottom = (originalProps.paddingBottom * progress).toFixed(2) + 'px';
        
        if(runTime < timingFn)
            requestAnimationFrame(timestamp => this.rafFn(timestamp, el, originalProps, timingFn));
        else
            this.animationDone(el);
    }

    private animationDone(el: HTMLElement): void {
        this.startTime = 0;
        el.setAttribute(attrData, 'false');
    }

    private initFn(timestamp: number, originalProps: SlideProps, el: HTMLElement): void {
        this.startTime = timestamp;
        el.style.borderTopWidth = originalProps.borderTop + 'px';
        el.style.borderBottomWidth = originalProps.borderBottom + 'px';
    }
}

export const slideDown = new SlideDown;