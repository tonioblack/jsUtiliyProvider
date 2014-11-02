/**
 * Created by antonio on 01/11/14.
 */

/*skipped because remove all the modules in the store*/
describe.skip("jsUtilityProvider", function () {

    beforeEach(function () {
        jsUtilityProvider.refresh();
    })

    it("should be defined", function () {
        assert.notEqual(jsUtilityProvider, null);
    });

    it("should add a new module", function () {
        jsUtilityProvider.module('test', function(){});
        var module =  jsUtilityProvider.module('test');
        assert.equal(typeof module, 'function');
    })

    it("should give an error if a module already exists", function () {
        jsUtilityProvider.module('test', function(){});
        try {
            jsUtilityProvider.module('test', function () {});
        } catch(error){
            assert.notEqual(error, null);
        }
    })

    it("should give an error if the module param is not a function", function () {
        try {
            jsUtilityProvider.module('test', ["hello", "world"]);
        } catch(error){
            assert.notEqual(error, null);
        }
    })
})