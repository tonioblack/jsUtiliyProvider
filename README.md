jsUtiliyProvider
================

A set of usefull and common things.

In this project you will find a set of usefull things such Binary search tree, linear and linked lists and so on.
The main module is the 'jsUtilityProvider' that help to keep his modules far from the global namespace (in an angular like fashion).
This module has a getter and a setter to add new stuff:
```javascript
jsUtilityProvider.module('myNewModule', function(){/*stuff*/}); //setter
jsUtilityProvider.module('myNewModule'); //getter
```
Adding a new module is straightforward and should be done with an Immediatly invoked Function Expression (to keep things far from the global namespace).
An example here:
```javascript
(function () {
  'use strict';
  jsUtilityProvider.module('myNewModule', myStuff);
  
  function myStuff (){
    //stuff
  }
  
})();
```
Noe is the time to list the implemented stuff:

Bynary search tree
==================
