# That Tea❌ up North

The Ohio State University has a nearly 100-year tradition wherein the final football game played during the regular season is against their rivals, The University of Michigan. During this titular rivalry week, there are countless activities and silly traditions occurring throughout the OSU campus, but my favorite (because of how bonkers it is) is the common practice of obscuring every instance of the letter “M” (i.e. Michigan’s logo) appearing on the university’s property with a small X of red tape.

<img src="https://instagram.fcmh1-1.fna.fbcdn.net/t51.2885-15/e35/23823869_340173953113339_5821539444846493696_n.jpg" width="480px" height="auto"/>  
*These students don’t mess around.*

So I wrote this little package that crawls a webpage, wraps each instance of the letter M and overlays it with a red X. (I’m using the Unicode Ballot X (U+2717) symbol, if you’re curious.)

The heavy lifting is done with the wonderful [mark.js library](https://github.com/julmot/mark.js).

How to use it:
If you just want the script to execute on `load` just include `ttun.auto.min.js` before the closing <body> tag.

If you need to defer the execution further,  

##### ES6
```javascript
import {ttun} from 'ttun';

myEventHandler(() => {
  ttun();
})
```

or

##### RJS/CJS
```javascript
var ttun = require('ttun');

myEventHandler(() => {
  ttun();
})
```
 
or

##### Script Tag
```html
<script src='ttun.min.js'>
```
```javascript
var ttun = window.ttun;
myEventHandler(() => {
  ttun();
})
```
