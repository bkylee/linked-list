class Node {
    constructor (data){
        this.data = data;
        this.left = null;
        this.right = null
    };
};

class Tree {
    constructor(arr){
        this.arr = arr;
        this.root = buildTree();;
    }
};

function buildTree(arr, start, end){
        if (start>end){
            return null;
        };
        const half = (start + end)/2;
        const root = new Node(arr[half]);
        root.left = buildTree(arr, start, half-1);
        root.right= buildTree(arr, half+1, end);
            
        return root;
    };

function insert(root, value){
       if (root = null){
        root = new Node(value);
       }
       else {
            if (value< root.data){
            root.left = insert(root.left, value);
        }
            if(value > node.data){
            node.right= insert(root.right, value);
        };
    }
       return node;

};

function del(root, value){
    if (root === null){
        return null;
    }
    if (value < root.data){
        root.left = del(root.left, value);
    }
    if (value > root.data){
        root.right = del(root.right, value);
    }
    if (value === root.data){
        if (root.left == null){
            return root.right;
        }
        else if (root.right = null){
            return root.left;
        }
            root.data = minVal(root.left);
            root.right = del(root.right, root.data);
        };
    };

function minVal(root){
    let minv = root.data;
    while(root.left !== null){
        minv = root.left.data;
        root = root.left; 
    };
    return minv; 
};

function find(root, value){
    if (root === null){
        return null;
    }
    if (value < root.data){
        root.left = find(root.left, value);
    }
    if (value > root.data){
        root.right = find(root.right, value);
    }
    if (value === root.data){
        return root;
        };
};

function levelOrder(funct, root){
    const que = [];
    if (root == null){
        return;
    }
    if (que.length == 0){
    funct(root);
    que.push(root);
    levelOrder(funct, root);
    }else{
        if (root.left != null && root.right !=null){
        funct(root.left);
        funct(root.right);
        que.push(root.left);
        que.push(root.right);
        levelOrder(funct, root.left);
        levelOrder(funct, root.right);
    }
    if (root.left == null){
        funct(root.right);
        que.push(root.right);
        levelOrder(root.right);
    }
    if (root.right == null){
        funct(root.left);
        que.push(root.left);
        levelOrder(root.left);
    }
};
return que;
};

function inorder(funct, root){
    
}