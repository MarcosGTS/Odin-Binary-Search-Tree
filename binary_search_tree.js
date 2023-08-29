function TreeNode(value, left = null, right = null) {
    let data = value;
    let leftNode = left;
    let rightNode = right;
    
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
        // process list 
        const psList = dataList;

        function construct(start, end) {
            if (start > end) return null;

            const middle = parseInt((start + end) / 2);
            const root = TreeNode(psList[middle]);

            root.setLeft(construct(start, middle - 1));
            root.setRight(construct(middle + 1, end)); 

            return root;
        }

        root = construct(0, psList.length - 1);
    }

    function insert(data) {
    } 

    function remove(data) {
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
       remove,
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

const t = Tree();
t.buildTree([1, 2, 3, 4, 5, 6])
