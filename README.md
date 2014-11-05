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
This version of bst is usefull for storing objects. You have to specify the field that you are going to use as key in the constructor.
Usage:

```javascript
 var dummy = [
            {id:45, name:"antonio"},
            {id:15, name:"filippo"},
            {id:28, name:"pasquale"},
            {id:37, name:"giovanni"},
            {id:14, name:"francesco"},
            {id:51, name:"marco"},
            {id:35, name:"salvatore"},
            {id:7, name:"calogero"}
        ],
        bst = jsUtilityProvider.module(jsUtilityProvider.constants.BST),
        /*must specify the field that must be used as key*/
        bstInst = new bst("id");

    dummy.forEach(function (item) {
        bstInst.add(item);
    })

    console.log(bstInst.get(14).name);
    bstInst.get(14).remove(14);
```