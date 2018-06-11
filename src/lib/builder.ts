import { Prototype, Slide } from './dtos.d';

import { slideUp } from './slideUp';
import { slideDown } from './slideDown';
export class Builder {
    private prototypeMap: { [key: string]: Prototype & Slide } = {};

    constructor() {
        this.prototypeMap.up = slideUp;
        this.prototypeMap.down = slideDown;
    }

    createPrototype(key: 'up' | 'down'): Prototype & Slide {
        return this.prototypeMap[key].clone();
    }
}

export const builder = new Builder;