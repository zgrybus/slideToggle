import { attrData, SlideProps, Prototype, Slide } from './dtos';

import { elProps } from './elProps';
import { builder } from './builder';

export class SlideToggle {
    
    public slideToggle(el: string | HTMLElement, timingFn: number = 500): void {
        const currentEl: HTMLElement = this.getElement(el);

        if(this.isElementSliding(currentEl))
            return;
        this.setElRequiredDataAndChangeAttr(currentEl);

        const props = elProps.getElProps(currentEl);
        this.getPrototypOfStrategy(props.height).sliding(currentEl, props.height ? props : elProps.getOriginalProps(currentEl), timingFn);
    }

    private getElement(elData: string | HTMLElement): HTMLElement {
        return typeof elData === 'string' ? <HTMLElement>document.querySelector(elData) : elData;
    }

    private getPrototypOfStrategy(height: number): Prototype & Slide {
        return builder.createPrototype(height ? 'up' : 'down');
    }

    private isElementSliding(el: HTMLElement): boolean {
        return el.hasAttribute(attrData) && el.getAttribute(attrData) === 'true';
    }

    private setElRequiredDataAndChangeAttr(el: HTMLElement): void {
        el.style.overflowY = 'hidden';
        const currentAttrState: string = el.getAttribute(attrData) || '';
        if(currentAttrState === 'true')
            el.setAttribute(attrData, 'false');
        else
            el.setAttribute(attrData, 'true');
    }
}

export const slideToggle = new SlideToggle;