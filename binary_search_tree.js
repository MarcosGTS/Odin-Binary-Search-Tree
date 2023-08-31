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
        function insertRec(node) {
            if (node == null) return TreeNode(data);

            if (data < node.getData()) {
                const leftNode = insertRec(node.getLeft()); 
                node.setLeft(leftNode);
            }

            if (data > node.getData()) {
                const rightNode = insertRec(node.getRight()); 
                node.setRight(rightNode);
            }

            return node;
        }

       root = insertRec(root); 
    } 

    function remove(value) {
        function removeRec(node, data) {
            if (node == null) return node  

            if (node.getData() > data) {
                node.setLeft(removeRec(node.getLeft(), data));
                return node;
            }

            if (node.getData() < data) {
               node.setRight(removeRec(node.getRight(), data)); 
               return node;
            }

            if (node.getLeft() == null) {
                const child = node.getRight();
                return child;
            }

            if (node.getRight() == null) {
                const child = node.getLeft();
                return child;
            }

            let parent = node;
            let subs = node.getRight();

            while (subs.getLeft() !== null) {
                parent = subs;
                subs = subs.getLeft();
            }
            
            if (parent === node) {
                parent.setRight(subs.getRight());
            } else {
                parent.setLeft(subs.getRight());
            }

            node.setData(subs.getData());

            return node;
        }

        root = removeRec(root, value);
    }

    function find(data) {
        
        function findRec(node) {
            if (node === null) return node;
            if (data < node.getData()) return findRec(node.getLeft()); 
            if (data > node.getData()) return findRec(node.getRight());

            return node;
        }

        return findRec(root);
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
t.insert(16)
t.insert(105);
t.insert(7);
t.printTree();
t.remove(6);
t.printTree();
console.log(t.find(105).getData());


