const LLNode = (value, node)=>{
    this.value = null;
    this.node = null;
    const getValue = (value)=>{
        this.value = value;
        return value;
    };

    const nextNode = (node)=>{
        this.node = node;
        return node;
    };
    return{
        value, node, getValue, nextNode
    };
};

const LinkedList = ()=>{
    let last = null;
    let first = null;

    const append = value=>{
        const inp = LLNode(value);
        first === null ? first = inp : inp.nextNode(first);
        first = inp;
    };

    const prepend = value=>{
        const inp  = LLNode(value);
        last.nextNode(inp);
        last = inp;
    };
    
    const size = ()=>{
        let length = 0;
        const node = first;
        while(!node.nextNode() === null){
            
        }
        return length;
    };

    const head = ()=>{
        return first;
    };

    const tail = ()=>{
        return last;
    };

    const at = index=>{
        let current = 0;
        
    const pop = ()=>{
        let node = first;
        while (!node.nextNode() === null){
            node = node.nextNode();
            if (node.nextNode === null){

            }
        }
    };
    const contains = value =>{
        for (node in LinkedList()){
            return node.value === value ? node : false;
        };
    };

    const find = value =>{
        let index = 0;
        for (node in LinkedList()){
            index ++;
            if (node.value === value){
            return index;
        };
        };
    };
    const toString = ()=>{
        for(node in LinkedList()){
            console.log(`${node} ->`);
        };
    };

    return {
        append, prepend, size, head, tail, at, pop, contains, find, toString
    };
};

const n1 = LLNode(10);
const n2 = LLNode(3);
const n3 = LLNode(6); 
const n4 = LLNode(20);
const n5 = LLNode(4);
const n6 = LLNode(76); 

const LL = LinkedList();
LL.append(n2);
LL.toString();
LL.append(n1);
LL.toString;
LL.contains(3);