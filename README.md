# That Tea❌ up North

The Ohio State University has a nearly 100-year tradition wherein the final football game played during the regular season is against their rivals, The University of Michigan. During this titular rivalry week, there are countless activities and silly traditions occurring throughout the OSU campus, but my favorite (because of how bonkers it is) is the common practice of obscuring every instance of the letter “M” (i.e. Michigan’s logo) appearing on the university’s property with a small X of red tape.

<img src="https://instagram.fcmh1-1.fna.fbcdn.net/t51.2885-15/e35/23823869_340173953113339_5821539444846493696_n.jpg" width="480px" height="auto"/>  

*These students don’t mess around.*


So I wrote this little package that crawls a webpage, wraps each instance of the letter M and overlays it with a red X. (I’m using the Unicode Ballot X (U+2717) symbol, if you’re curious.)

The heavy lifting is done with the wonderful [mark.js library](https://github.com/julmot/mark.js).

### Usage
If you just want the script to execute on `load` just include `ttun.auto.min.js` before the closing `<body>` tag.
```html
...
   <script src='ttun.auto.min.js'></script>
</body>
</html>
```

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
<script src='ttun.min.js'></script>
```
```javascript
var ttun = window.ttun;
myEventHandler(() => {
  ttun();
})
```


### Bookmarklet
You could always just use it as a bookmarket:
```javascript
javascript:(function()%7Bfunction%20callback()%7Bwindow.ttun()%7Dvar%20s%3Ddocument.createElement(%22script%22)%3Bs.src%3D%22https%3A%2F%2Funpkg.com%2Fttun%2Fdist%2Fttun.auto.min.js%22%3Bif(s.addEventListener)%7Bs.addEventListener(%22load%22%2Ccallback%2Cfalse)%7Delse%20if(s.readyState)%7Bs.onreadystatechange%3Dcallback%7Ddocument.body.appendChild(s)%3B%7D)()
```
