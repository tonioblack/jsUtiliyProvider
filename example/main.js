/**
 * Created by antonio on 05/11/2014.
 */
(function () {
 'use strict';

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
        bstInst = new bst("id");

    dummy.forEach(function (item) {
        bstInst.add(item);
    })

    console.log(bstInst.get(14).name);

})();