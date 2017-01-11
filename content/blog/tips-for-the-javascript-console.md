+++
date = "2017-01-11T20:00:00+01:00"
draft = false
title = "Tips for the JavaScript Console"
image = "blog2.png"
description = "Some tips regarding the JavaScript Console of modern browsers. Maybe there are some new things you didn't know! :grin:"
author = "dominiksumer"
+++

Before Christmas I did some lessons of the [30 Day Javascript Challenge](https://javascript30.com/) from [@wesbos](http://twitter.com/wesbos). On Day 9 I've learned some cool stuff regarding the JavaScript console of modern browsers, which I want to share with you! 

## Simple Logging
---

```javascript
console.log('Simple Log');
console.info('Info.');
console.warn('Warning!');
console.error('Shit. (with Stacktrace!)');
```

Most of you probably know these ones. They are nice to log some data to the console and with **info**, **warn** & **error** you get special highlighting or even the stacktrace being printed with. 

Regardless if you want to print objects or just simple strings, this is pretty helpful. You can also format strings like this:
```javascript
console.log('Welcome on %s!', 'seriousco.de');
```

Or you can style text like this:
```javascript
console.log('%c Styled Text.', 'font-size:18px;color:blue;background:red');
```

## Printing a table of data
---
Want to print an array of objects? This function will be your new best friend! **console.table(yourData)** will list your data like this:

<a class="image-link" href="/images/console_table.png" title="console.table">
    {{< img src="images/console_table.png" class="center" >}}
</a>

So you have much more overview about your data.

## Print the JSON data of a HTML element
---
When you console.log a DOM element you get the element printed in a HTML tree. Sometimes you need some deeper information of an element's data. Just type **console.dir(element)** and it will print the JSON data.

## Asserting
---
Want to assert something via the console? Just do it like this:
```javascript
var myCake = false;
console.assert(myCake, 'The cake is a lie!');
```

## Counting
---
With console.count you can easily count by a specific string / object:
```javascript
console.count('Me'); // 1
console.count('Me'); // 2
console.count('Me'); // 3
console.count('You'); // 1
console.count('You'); // 2
console.count('Me'); // 4
```

## Timing functions
---
With console.time and .timeEnd you can easily measure how much time an action takes. Example:
```javascript
console.time('fetching data');
setTimeout(function () {
  console.timeEnd('fetching data');
}, 1000);
```

## Grouping
---
If you have many logs it can be quite overwhelming. Sometimes it is helpful to group them like this:
```javascript
console.group('Group 1');
console.log('Hey, I am a member of Group 1!');
console.groupEnd('Group 1');
console.groupCollapsed('Group 2'); //collapsed by default
console.log('Hey, I am a member of Group 2!');
console.groupEnd('Group 2');
console.log('It is me, excludie :(');
```

---

Want to see all the commands in action? Just open your dev tools on this site! :wink: 
Hopefully you enjoyed it and learned some new things - see you next time :grinning:

<script>
  function consoleStuff() {
    if (window.javaScriptConsoleTest) return;
    window.javaScriptConsoleTest = true;
  
    console.clear();
    
    // Simple Logging
    console.log('Simple Log');
    console.info('Info.');
    console.warn('Warning!');
    console.error('Shit. (with Stacktrace!)');
    console.log('Welcome on %s!', 'seriousco.de');
    console.log('%c Styled Text.', 'font-size:18px;color:blue;background:red');
    
    // Printing a table of data
    var data = [
      { name: 'Jon',  age: 24, country: 'Austria' },
      { name: 'Miguel',  age: 19, country: 'Portugal' },
      { name: 'Steve',  age: 31, country: 'USA' }
    ];
    console.table(data);
    
    // Print the JSON data of a HTML element
    console.dir(document.body);

    // Asserting
    var myCake = false;
    console.assert(myCake, 'The cake is a lie!');
    
    //Counting
    console.count('Me'); // 1
    console.count('Me'); // 2
    console.count('Me'); // 3
    console.count('You'); // 1
    console.count('You'); // 2
    console.count('Me'); // 4
    
    // Timing functions
    console.time('fetching data');
    setTimeout(function () {
      console.timeEnd('fetching data');
    }, 1000);
    
    // Grouping
    console.group('Group 1');
    console.log('Hey, I am a member of Group 1!');
    console.groupEnd('Group 1');
    console.groupCollapsed('Group 2'); //collapsed by default
    console.log('Hey, I am a member of Group 2!');
    console.groupEnd('Group 2');
    console.log('It is me, excludie :(');
  }
  setTimeout(consoleStuff, 2000);
</script>