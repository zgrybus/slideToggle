# **slideToggle()**

> Small library that replaces the so-loved jQuery function.

**You do not have to** worry about styles like: _padding, border, height and even display: none_; 
The library **calculates everything** and the final result is: _height: 'auto'_;

**The library uses the [requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame) function, so the changes will be visible in 60fps**.

# **DEMO**

Link to working demo - [Demo](https://zgrybus.github.io/slideToggle/)

# **Function Options**

The function does not have a lot of options. **The only argumets are:**
1) DOM Element or (element ID / element class / element tag)
2) Animation Timing in miliseconds

**The use example is below.**

# **USAGE**

Install package by npm
``` npm
npm install --save-dev slidetoggle
```

**WITH BUNDLER ( like Webpack etc. )**

Import class object
``` javascript
import slideToggle from 'slidetoggle';
```
Then can call the object's function on 

1) DOM Element
``` javascript
const ul = document.querySelector('ul.toggle-list');
ul.addEventListener('click', evt => {
    const ulSibling = evt.target.nextElementSibling;
    slideToggle.slideToggle(ulSibling , 500); 
});
```

2) Element ID / class / etc
``` javascript
const btn = document.querySelector('button.btn');
btn.addEventListener('click', () => {
    slideToggle.slideToggle('div.toggle-div', 300);
});
```

**WIHTOUT BUNDLER ( UMD )**
``` html
    <html>
        <head></head>
        <body>
            <button class="btn">Click me</button>
            <div class="toggle-div">Click on button will toggle my height</div>
        </body>
        <script src="node_modules/slidetoggle/umd/slidetoggle.min.js"></script>
        <script>
            const myVar = Slidetoggle.slideToggle;

            const btn = document.querySelector('button.btn');
            btn.addEventListener('click', () => myVar.slideToggle('div.toggle-div', 300));

            // 2
            const ul = document.querySelector('ul.toggle-list');
            ul.addEventListener('click', evt => {
                if (evt.target instanceof HTMLSpanElement)
                    myVar.slideToggle(evt.target.nextElementSibling, 500);
            });
        </script>
    </html>
```


# **LICENSE**
[MIT](https://en.wikipedia.org/wiki/MIT_License) License