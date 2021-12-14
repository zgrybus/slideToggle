[![GitHub license](https://img.shields.io/github/license/zgrybus/slideToggle)](https://github.com/zgrybus/slideToggle/blob/master/LICENSE) [![npm](https://img.shields.io/npm/v/slidetoggle)](https://www.npmjs.com/package/slidetoggle) [![npm bundle size](https://img.shields.io/bundlephobia/minzip/slidetoggle?style=plastic)](https://bundlephobia.com/result?p=slidetoggle)

# **slideToggle()**

> Small library that replaces the so-loved jQuery function.

**You do not have to** worry about styles like: _padding, border, height and even display: none_;
The library **calculates everything**. The library uses the [requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame) function.

**Link to working demo - [Demo](https://zgrybus.github.io/slideToggle/)**

# **API**

```javascript
 toggle(
  selector: string | HTMLElement,
  options: {
    miliseconds: number,
    transitionFunction: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear' | 'cubic-bezier(...your custom arguments)',
    onAnimationStart: () => void,
    onAnimationEnd: () => void,
    onOpen: () => void, // only with toggle()
    onClose: () => void // only with toggle()
  },
 )
```

# **USAGE**

Install package by npm

```npm
npm install --save-dev slidetoggle
```

Install package by yarn

```yarn
yarn add slidetoggle
```

### Bundler

```javascript
import { hide, show, toggle } from 'slidetoggle';

const btn = document.querySelector('button.btn');
btn.addEventListener('click', () => {
  toggle('div.toggle-div', {
    miliseconds: 300,
    transitionFunction: 'ease-in',
    onAnimationStart: () => {
      console.log('animation started');
    },
    onAnimationEnd: () => {
      console.log('animation ended');
    },
    onOpen: () => { // This function is only possible with toggle
      console.log('Only with toggle - when element has 100%');
    },
    onClose: () => { // This function is only possible with toggle
      console.log('Only with toggle - when element has 0%');
    }
  });
});
```

### UMD

```html
<html>
  <script src="<your_directory>/slidetoggle/slidetoggle.js"></script>
  <script>
    document.querySelector('button.btn').addEventListener('click', () => {
      const element = document.querySelector('div.section');
      slidetoggle.show(element, {
        miliseconds: 300,
        onAnimationStart: () => {
          console.log('animation started');
        },
        onAnimationEnd: () => {
          console.log('animation ended');
        },
      });
    });
  </script>
</html>
```

# **LICENSE**

[MIT](https://en.wikipedia.org/wiki/MIT_License) License
