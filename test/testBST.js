/**
 * Created by antonio on 01/11/14.
 */

describe("bst", function () {

    var dummyCategory = [
        {id: 45, name:'clothing'},
        {id: 5, name:'toys'},
        {id: 178, name:'food'},
        {id: 2870, name:'sport'},
        {id: 1, name:'robots'},
        {id: 177, name:'planes'}
    ];

    var bst = null;

    function loadDummyIntoBst(bstInst){
        dummyCategory.forEach(function (item) {
            bstInst.add(item);
        })
    }

    before(function () {
        bst =  jsUtilityProvider.module(jsUtilityProvider.constants.BST);
    })


    it("should be defined inside the utility provider", function () {
        assert.equal(typeof bst, 'function');
    });

    it("should throw an error if no keyProperty is provided in the constructor", function () {
        try{
            var categoryTree = new bst();
        } catch (error){
            assert.notEqual(error, null);
        }

    })

    it("should provide a function to add items to tree", function () {
        var categoryTree = new bst("id");
        categoryTree.add(dummyCategory[0]);
        assert.equal(categoryTree.length, 1);
    })

    it("should get the number of inserted elements", function () {
        var categoryTree = new bst("id");
        loadDummyIntoBst(categoryTree);
        assert.equal(categoryTree.length, 6);
    })

    it("should increment the length if an already existing item is added", function () {
        var categoryTree = new bst("id");
        loadDummyIntoBst(categoryTree);
        categoryTree.add(dummyCategory[0])
        assert.equal(categoryTree.length, 7);
    })

    it("should get an item providing the key property", function () {
        var categoryTree = new bst("id");
        loadDummyIntoBst(categoryTree);
        var item = categoryTree.get(5);
        assert.equal(item.name, 'toys');
    })

    it("should find multiple occurences of a key", function () {
        var categoryTree = new bst("id");
        loadDummyIntoBst(categoryTree);
        categoryTree.add(dummyCategory[0]);
        var node = categoryTree.getNode(45);
        assert.equal(node.occurrences, 2);
    })

    it("should return the node with his parent informations", function () {
        var categoryTree = new bst("id");
        loadDummyIntoBst(categoryTree);
        var node = categoryTree.getNode(178);
        assert.equal(node.parent.data.id, 45);
    })

    it("should return the node with max key value", function () {
        var categoryTree = new bst("id");
        loadDummyIntoBst(categoryTree);
        var node = categoryTree.getNodeWithMaxKey();
        assert.equal(node.data.id, 2870);
    });

    it("should return the node with min key value", function () {
        var categoryTree = new bst("id");
        loadDummyIntoBst(categoryTree);
        var node = categoryTree.getNodeWithMinKey();
        assert.equal(node.data.id, 1);
    });

    it("should remove a node", function () {
        var categoryTree = new bst("id");
        loadDummyIntoBst(categoryTree);
        categoryTree.remove(178);
        var node = categoryTree.get(178);
        assert.equal(node, null);
        assert.equal(categoryTree.length, 5);
    });

    it("should be inheritable", function () {
        /*arrange*/
        function subBst(){

        }
        subBst.prototype = new bst("id");
        subBst.prototype.newStuff = function () {
            return 1;
        }
        /*act*/
        var categoryTree = new subBst();
        loadDummyIntoBst(categoryTree);
        categoryTree.remove(178);
        var node = categoryTree.get(178);
        /*assert*/
        assert.equal(node, null);
        assert.equal(categoryTree.length, 5);
        assert.equal(categoryTree.newStuff(), 1);
    });

})