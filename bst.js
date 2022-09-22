class node {
    constructor (data){
        this.data = data;
        this.left = null;
        this.right = null;
        this.preOrderArray = [];
    };
};

class Tree {
    constructor(arr){
        this.arr = arr;
        this.root = this.buildTree(this.arr, 0, arr.length);
    }

buildTree(arr, start, end){
        if (start>end) {return null};
        const half = Math.floor((start + end)/2);
        const root = new node(arr[half]);
        root.left = this.buildTree(arr, start, half-1);
        root.right= this.buildTree(arr, half+1, end);
            
        return root;
    };

insert(root = this.root, value){
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

del(root = this.root, value){
    if (root === null){
        return null;
    }
    if (value < root.data){
        root.left = this.del(root.left, value);
    }
    if (value > root.data){
        root.right = this.del(root.right, value);
    }
    if (value === root.data){
        if (root.left == null){
            return root.right;
        }
        else if (root.right = null){
            return root.left;
        }
            root.data = this.minVal(root.left);
            root.right = this.del(root.right, root.data);
        };
    };

minVal(root = this.root){
    let minv = root.data;
    while(root.left !== null){
        minv = root.left.data;
        root = root.left; 
    };
    return minv; 
};

find(root = this.root, value){
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

levelOrder(funct, root, que = []){
    if (root == null){
        return;
    }
    if (que.length == 0){
    funct(root);
    que.push(root);
    this.levelOrder(funct, root);
    }else{
        if (root.left != null && root.right !=null){
        funct(root.left);
        funct(root.right);
        que.push(root.left);
        que.push(root.right);
        this.levelOrder(funct, root.left);
        this.levelOrder(funct, root.right);
    }
    if (root.left == null){
        funct(root.right);
        que.push(root.right);
        this.levelOrder(root.right);
    }
    if (root.right == null){
        funct(root.left);
        que.push(root.left);
        this.levelOrder(root.left);
    }
};
return que;
};

inorder(root , funct, que = []){
        if (root == null){
        return null}
    if (root.left !== null){
        this.inorder(root, funct, que)
    }
    if (root.data){que.push(root);} 
    if (root.right !== null){ 
        this.inorder(root,funct,que);
    }
    if (funct){que = funct(que)};
    return que;
};

preOrder(root = this.root, funct){
    if (root == null) return;

    if (root.data) {
      this.preOrderArray.push(root.data);
    }

    if (root.left !== null) {
      this.preOrder(root.left);
    }

    if (root.right !== null) {
      this.preOrder(root.right);
    }
    if (funct){funct(que)}
  };

postOrder(root, funct, que = []){
    if (root == null){
        return null}
    if (root.data){que.push(root);} 
    if (root.left !== null){
        this.postOrder(root,funct,que)
    }
    if (root.right !== null){ 
        this.postOrder(root,funct,que);
        }
    if (funct){que = funct(que)}
    return que;
};

height(node){
    if (node == null){
        return-1;
    };
    let left = this.height(node.left);
    let right = this.height(node.right);
    if (left < right){
        return left + 1;
    }else{
        return right + 1
    };
};

depth(node, root = this.root){
    const val = node.data;
    let counter = 0;
    if (root.value === val){
        return counter; 
    };
    if (root.value > val ){
        counter ++;
        this.depth(node.left, root);
    };
    if (root.value < val){
        counter ++;
        this.depth(node.right, root);
    };
};

isBalanced(){
    let left = this.height(this.root.left);
    let right = this.height(this.root.right);
    if(left > right){
        if ((left - right)<2)
        return true;  
    }
    if ((right - left)< 2){
        return true;
    };
    return false;
};

rebalance(){
    const arr = this.inorder(root);
    return buildTree(arr);
};
}
const arr = [1,2,3,4,5,6,7,8,9];

const test = new Tree(arr);
console.log(test.isBalanced());
test.preOrder();
console.log(test.preOrderArray);
console.log(test.inorder(this.root));
console.log(test.postOrder(this.root));
