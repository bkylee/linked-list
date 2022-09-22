class node {
    constructor (data){
        this.data = data;
        this.left = null;
        this.right = null
    };
};

class Tree {
    constructor(arr){
        this.arr = arr;
        this.root = this.buildTree(this.arr);
    }

buildTree(arr, start, end){
        if (start>end){
            return null;
        };
        const half = (start + end)/2;
        const root = new node(arr[half]);
        root.left = this.buildTree(arr, start, half-1);
        root.right= buildTree(arr, half+1, end);
            
        return root;
    };

insert(root, value){
       if (root = null){
        root = new node(value);
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

del(root, value){
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

minVal(root){
    let minv = root.data;
    while(root.left !== null){
        minv = root.left.data;
        root = root.left; 
    };
    return minv; 
};

find(root, value){
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

levelOrder(funct, root){
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

inorder(root, funct){
    const que = [];
    if (root == null){
        return;
    }else{
    root.left !== null && inorder(funct, root.left);
    que.push[funct(root)];
    root.right !== null && inorder(funct,root.right);
    };
    return que;
};

preOrder(root, funct){
    const que = [];
    if (root == null){
        return;
    }else{
    que.push[funct(root)];
    root.left !== null && preOrder(funct, root.left);
    root.right !== null && preOrder(funct,root.right);
    };
    return que;
};

postOrder(root, funct){
    const que = [];
    if (root == null){
        return;
    }else{
    root.left !== null && postOrder(funct, root.left);
    root.right !== null && postOrder(funct,root.right);
    que.push[funct(root)];
    };
    return que;
};

maxHeight(node){
    if (node == null){
        return-1;
    };
    let left = height(node.left);
    let right = height(node.right);
    if (left > right){
        return left + 1;
    }else{
        return right + 1
    };
};

minHeight(node){
    if (node == null){
        return-1;
    };
    let left = height(node.left);
    let right = height(node.right);
    if (left < right){
        return left + 1;
    }else{
        return right + 1
    };
}

depth(node, root){
    const val = node.data;
    let counter = 0;
    if (root.value === val){
        return counter; 
    };
    if (root.value > val ){
        counter ++;
        depth(node.left, root);
    }
    if (root.value < val){
        counter ++;
        depth(node.right, root);
    };
};
isBalanced(){
    let min = minHeight(root);
    let max = maxHeight(root);
    (max - min) > 1 ? true : false; 
};

rebalance(){
    const arr = inorder(root);
    return buildTree(arr);
};
}
const arr = [1,5,6,7,8,9,23,56];

const test = new Tree(arr);

test.isBalanced();
console.log(test.preOrder());
console.log(test.inorder());
console.log(test.postOrder());
