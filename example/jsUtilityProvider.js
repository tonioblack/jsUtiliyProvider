/**
 * Created by antonio on 01/11/14.
 */

//module pattern
var jsUtilityProvider = function () {
    var modulesStore = new Array(),
        module = function (moduleName, functionDefinition) {
            switch (typeof functionDefinition) {
                case 'function':
                    if (!modulesStore[moduleName]) {
                        modulesStore[moduleName] = functionDefinition;
                    } else {
                        throw 'this module is already defined! please select another name';
                    }
                    break;
                case 'undefined':
                    return  modulesStore[moduleName];
                    break;
                default :
                    throw 'Invalid module definition';
            }
        },
        constansts = {
            BST : 'bst'
        },
        refresh = function () {
            modulesStore = new Array();
        }
    return {
        module: module,
        constants : constansts,
        refresh: refresh
    }
}();;/**
 * Created by antonio on 01/11/14.
 */


(function(){
    'use strict';
    jsUtilityProvider.module(jsUtilityProvider.constants.BST, bst );

    function bst (keyProperty){
        var self = this;
        if(!keyProperty){
            throw "cannot create a bst without a key property"
        }
        self.root = null;
        self.keyProperty = keyProperty;
        self.length = 0;
    }

    bst.prototype.add = function(itemToAdd){
        var self = this;
        if(itemToAdd){
            var n = new  node(self.keyProperty, itemToAdd, null, null);
            if(!self.root){
                self.root = n;
            } else {
                var current = self.root;
                while(true){
                    if(n.getKey() < current.getKey()){
                        if(current.left){
                            current= current.left;
                        } else{
                            current.left = n;
                            n.parent = current;
                           break;
                        }
                    } else {
                        if(n.getKey() > current.getKey()){
                            if(current.right){
                                current= current.right;
                            } else{
                                current.right = n;
                                n.parent = current;
                                break;
                            }
                        } else {
                            ++current.occurrences;
                            break;
                        }
                    }
                }
            }
            ++self.length;
            return true;
        } else {
            return false;
        }

    };

    bst.prototype.get = function (key){
        var self = this;
        var found = self.getNode(key);
        if(found){
            return found.getData();
        } else {
            return null;
        }
    };

    bst.prototype.getNode = function (key) {
        var self = this;
        var current = self.root;
        while(current.getKey() !== key){
            if(key < current.getKey()){
                current = current.left;
            } else {
                current = current.right;
            }

            if(!current){
                return null;
            }
        }
        return current;
    }

    bst.prototype.getNodeWithMaxKey = function(){
        var self = this;
        var current = self.root;
        while(current.right){
            current= current.right;
        }
        return current;
    }

    bst.prototype.getNodeWithMinKey = function(){
        var self = this;
        var current = self.root;
        while(current.left){
            current= current.left;
        }
        return current;
    }

    bst.prototype.remove = function (key) {
        var self = this;
        var current = self.getNode(key);
        if(current.occurrences === 1){
            self.removeNode(current);
        } else{
            --current.occurrences;
        }
        --self.length;
    }

    bst.prototype.removeNode = function (nodeToRemove) {
        var self = this;
        var current = nodeToRemove;
        if(current){
            //leaf node
            if(current.left === null && current.right === null){
                if(current.parent.keyIsLeft(current.getKey())){
                    current.parent.left = null;
                } else {
                    current.parent.right = null;
                }
                return true;
            }

            //only left child
            if(current.left !== null && current.right === null){
                if(current.parent.keyIsLeft(current.getKey())){
                    current.parent.left = current.left;
                } else {
                    current.parent.right = current.left;
                }
                return true;
            }

            //only right child
            if(current.right !== null && current.left === null){
                if(current.parent.keyIsLeft(current.getKey())){
                    current.parent.left = current.right;
                } else {
                    current.parent.right = current.right;
                }
                return true;
            }


            //both children
            if(current.right !== null && current.left!== null) {
                var subTree = new bst(self.keyProperty);
                subTree.root = current.right;
                var minInSubtree = subTree.getNodeWithMinKey();
                current.data = minInSubtree.data;
                current.occurrences = minInSubtree.occurrences;
                subTree.removeNode(minInSubtree);
                return true;
            }

        } else{
            return false;
        }
    }

    function node(keyProperty, data, left, right) {
        var self = this;
        self.data = data;
        self.left = left;
        self.right = right;
        self.keyProperty = keyProperty;
        self.parent = null;
        self.occurrences = 1;
        self.getKey = function () {
            if(self.data){
                return self.data[self.keyProperty];
            } else{
                return null;
            }
        };
        self.getData = function () {
            return self.data;
        };
        self.keyIsLeft = function(key){
            if(self.left !== null && self.left.getKey() === key){
                return true;
            } else {
                return false;
            }
        };
        self.keyIsRight = function(key){
            if(self.right !== null && self.right.getKey() === key){
                return true;
            } else {
                return false;
            }
        };
    }
})();