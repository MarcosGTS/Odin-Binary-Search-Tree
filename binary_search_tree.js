function TreeNode(value, left, rigth) {
    let data;
    let leftNode;
    let rightNode;
    
    function getData()  { return data }
    function getLeft()  { return left }
    function getRight() { return right }

    function setData(value) { data = value }
    function setRight(node) { rightNode = node }
    function setLeft(node)  { leftNode = node }
    
    return {
        getData,
        getLeft,
        getRight,
        setData,
        setLeft,
        setRight,
    }
}

function Tree() {
    let root = null;
    
    function buildTree(dataList) {
    }

    function insert(data) {
    }

    function delete(data) {
    }

    function find(data) {
    }

    function levelOrder() {
    }

    function inorder() {
    }

    function preorder() {
    }

    function postorder() {
    }

    function hight() {
    }

    function depth() {
    }

    function isBalanced() {
    }

    function rebalance() {
    }

    return {
       buildTree,
       insert,
       delete,
       find,
       levelOrder,
       inorder,
       preorder,
       postorder,
       hight,
       depth,
       isBalanced,
       rebalance,
    }
}
