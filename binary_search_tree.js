function TreeNode(value, left = null, right = null) {
    let data = value;
    let leftNode = left;
    let rightNode = right;
    
    function getData()  { return data }
    function getLeft()  { return leftNode }
    function getRight() { return rightNode }

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
    
    function processData(arr) {
        const sortedArr = arr.sort((a, b) => a - b);
        return [... new Set(sortedArr)];
    }

    function buildTree(dataList) {
        // process list 
        const psList = processData(dataList);

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
        const newNode = TreeNode(data);

        function insertRec(node) {
            if (root == null) root = node;

            const nodeData = node.getData();

            if (data < nodeData) {
                const left = node.getLeft();
                if (left) {
                    insertRec(left);
                } else {
                    node.setLeft(newNode);
                }
            }

            if (data > nodeData) {
                const right = node.getRight();
                if (right) {
                    insertRec(right);
                } else {
                    node.setRight(newNode);
                }
            }
        }

        insertRec(root);
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

    function printTree() {
        prettyPrint(root);
    }
    
    // Code provided by Odin Project 
    // https://www.theodinproject.com/lessons/javascript-binary-search-trees
    function prettyPrint(node, prefix = "", isLeft = true) {
        if (node === null) {
            return;
        }

        const rightNode = node.getRight();
        const leftNode = node.getLeft();

        if (rightNode !== null) {
            prettyPrint(rightNode, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }

        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.getData()}`);

        if (leftNode !== null) {
            prettyPrint(leftNode, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
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
       printTree,
    }
}

const t = Tree();
t.buildTree([10, 5, 6, -1, 1, 2, 2, 2, 3, 4, 5, 6]);
t.insert(100);
t.insert(7);
t.printTree();
