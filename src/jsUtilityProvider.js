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
}();