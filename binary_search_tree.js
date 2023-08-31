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

        let result = "";
        const query = [root]

        while (query.length != 0) {
            const node = query.shift();

            if (node.getLeft()) query.push(node.getLeft());
            if (node.getRight()) query.push(node.getRight());

            result += `${node.getData()} `;
        }

        return result.trim();
    }

    function inorder() {

        let result = ""; 

        function inorderRec(node) {
            if (node === null) return;

            inorderRec(node.getLeft());
            result += `${node.getData()} `;
            inorderRec(node.getRight());
        } 

        inorderRec(root);

        return result.trim();
    }

    function preorder() {
 
        let result = ""; 

        function preorderRec(node) {
            if (node === null) return;

            result += `${node.getData()} `;
            preorderRec(node.getLeft());
            preorderRec(node.getRight());
        } 

        preorderRec(root);

        return result.trim();   
    }

    function postorder() {
  
        let result = ""; 

        function postorderRec(node) {
            if (node === null) return;

            postorderRec(node.getLeft());
            postorderRec(node.getRight());
            result += `${node.getData()} `;
        } 

        postorderRec(root);

        return result.trim();      
    }

    function hight() {
        
        function hightRec(node) {
            if (node === null) return 0;
            
            const heightL = hightRec(node.getLeft());
            const heightR = hightRec(node.getRight());

            return 1 + Math.max(heightL, heightR);
        }

        return hightRec(root);
    }

    function depth(target) {

        const data = target.getData();

        function depthRec(node) {
            if (node === null) return null; 
            
            if (target === node) return 0;

            if (data < node.getData()) {
                return 1 + depthRec(node.getLeft());
            }

            if (data > node.getData()) {
                return 1 + depthRec(node.getRight());
            }   
        }

        return depthRec(root);
    }

    function isBalanced() {

        function isBalancedRec(node) {
            if (node === null) return 0;
            
            const heightL = isBalancedRec(node.getLeft());
            if (heightL < 0) return -1;
            
            const heightR = isBalancedRec(node.getRight());
            if (heightR < 0) return -1;

            if (Math.abs(heightL - heightR) > 1) return -1; 
            
            return Math.max(heightL, heightR) + 1;
        }

        return isBalancedRec(root) >= 0;
    }

    function rebalance() {
        if (isBalanced()) return;

        const dataList = inorder().split(" ");

        console.log(dataList);
        buildTree(dataList);
    }

    function printTree() {
        prettyPrint(root);
    }
    
    // Code provided by Odin Project 
    // https://www.theodinproject.com/lessons/javascript-binary-search-trees
    function prettyPrint(node, prefix = "", isLeft = true) { if (node === null) {
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
console.log(t.isBalanced())
t.insert(100);
t.insert(16)
t.insert(105);
t.insert(7);
t.printTree();
t.remove(6);
t.printTree();
console.log(t.find(105).getData());

console.log(t.levelOrder());
console.log(t.inorder());
console.log(t.preorder());
console.log(t.postorder());

console.log(t.hight());
console.log(t.depth(t.find(105)));
console.log(t.isBalanced())
t.rebalance()
t.printTree();
