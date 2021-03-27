import { Prototype, Slide } from './dtos';
import { slideDown } from './slideDown';
import { slideUp } from './slideUp';

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

export const builder = new Builder();
