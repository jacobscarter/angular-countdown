# angular-countdown
Countdown Timer for Angular 1.x Apps

This directive uses countdown time logic from `countdown.js v2.4.1 http://countdownjs.org`

## Instal

```bash
bower install angularcountdown
```
or
```bash
npm install angularcountdown
```

## Usage

Include module dependency
```js
angular.module('myApp', ['angular-countdown']);
```

Insert directive into HTML file.  Date is passed into attribute:

```html
<countdown stopdate="7/4/2015 11:00 AM"></countdown>
```

## Upcoming Features

* Change Specificity of Timer (e.g. Days only, Days and Hours only, etc...)
* Create multiple CSS skins to choose from
* Make responsive
