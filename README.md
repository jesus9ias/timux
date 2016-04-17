# timux
Test execution time of your Javascript code.

## Purpose

timux is a simple module for calculate the execution time of any javascript code by using simple functions.

## Install

```sh
npm install timux
```

## Methods

At this moment there are three methods available:

- init()
- end()
- report()

In all of this methods you must give a key that identify the part of code that you are watching.

```javascript
// Initializes the test with a key
timux.init('home');
// Ends the operation
timux.end('home');
// Gets the tiem in milliseconds.
timux.report('home');
```

You can execute this methods with different key in the same file for testing different parts of code.

## Sample

```javascript
var tx = require('timux');
tx.init('test');
setTimeout(function(){
  tx.end('test');
  tx.report('test');
},2153);
```

## Contrinutions

All pull requests are welcome.
