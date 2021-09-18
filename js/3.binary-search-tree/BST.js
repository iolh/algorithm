"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BST = void 0;
class TNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BST {
    constructor() {
        this.root = null;
        this.count = 0;
    }
    __insert(node, key, value) {
        if (node === null) {
            this.count++;
            return new TNode(key, value);
        }
        if (key === node.key) {
            node.value === value;
        }
        else if (key < node.key) {
            node.left = this.__insert(node.left, key, value);
        }
        else {
            node.right = this.__insert(node.right, key, value);
        }
        return node;
    }
    __contain(node, key) {
        if (node === null) {
            return false;
        }
        if (key === node.key) {
            return true;
        }
        else if (key < node.key) {
            return this.__contain(node.left, key);
        }
        else {
            return this.__contain(node.right, key);
        }
    }
    __search(node, key) {
        if (node === null) {
            return null;
        }
        if (key === node.key) {
            return node.value;
        }
        else if (key < node.key) {
            return this.__search(node.left, key);
        }
        else {
            return this.__search(node.right, key);
        }
    }
    __preOrder(node) {
        if (node !== null) {
            console.log(node.key);
            this.__preOrder(node.left);
            this.__preOrder(node.right);
        }
    }
    __inOrder(node) {
        if (node !== null) {
            this.__inOrder(node.left);
            console.log(node.key);
            this.__inOrder(node.right);
        }
    }
    __postOrder(node) {
        if (node !== null) {
            this.__postOrder(node.left);
            this.__postOrder(node.right);
            console.log(node.key);
        }
    }
    __minimum(node) {
        if (node.left === null) {
            return node;
        }
        return this.__minimum(node.left);
    }
    __maximum(node) {
        if (node.right === null) {
            return node;
        }
        return this.__maximum(node.right);
    }
    __removeMin(node) {
        if (node === null)
            return null;
        if (node.left === null) {
            const rightNode = node.right;
            node = null;
            this.count--;
            return rightNode;
        }
        node.left === this.__removeMin(node.left);
        return node;
    }
    __removeMax(node) {
        if (node === null)
            return null;
        if (node.right === null) {
            const leftNode = node.left;
            node = null;
            this.count--;
            return leftNode;
        }
        node.right === this.__removeMax(node.right);
        return node;
    }
    __remove(node, key) {
        if (node === null)
            return null;
        if (key === node.key) {
            if (node.left === null) {
                const rightNode = node.right;
                node = null;
                this.count--;
                return rightNode;
            }
            if (node.right === null) {
                const leftNode = node.right;
                node = null;
                this.count--;
                return leftNode;
            }
            // 右孩子最小元素替换节点
            const successor = { ...this.__minimum(node.right) };
            this.count++;
            successor.right = this.__removeMin(node.right); // 隐含count--
            successor.left = node.left;
            node = null;
            this.count--;
            return successor;
        }
        if (key < node.key) {
            node.left === this.__remove(node.left, key);
        }
        else {
            node.right === this.__remove(node.right, key);
        }
        return node;
    }
    size() {
        return this.count;
    }
    isEmpty() {
        return this.count === 0;
    }
    insert(key, value) {
        this.root = this.__insert(this.root, key, value);
    }
    contain(key) {
        return this.__contain(this.root, key);
    }
    search(key) {
        return this.__search(this.root, key);
    }
    destroy(node) {
        if (node !== null) {
            this.destroy(node.left);
            this.destroy(node.right);
            node = null;
        }
    }
    // 深度优先 - 前序遍历
    preOrder() {
        this.__preOrder(this.root);
    }
    // 深度优先 - 中序遍历
    inOrder() {
        this.__inOrder(this.root);
    }
    // 深度优先 - 后序遍历
    postOrder() {
        this.__postOrder(this.root);
    }
    // 广度优先 - 层序遍历
    levelOrder() {
        if (!this.root)
            return;
        const q = [];
        q.push(this.root);
        while (q.length !== 0) {
            const node = q.shift();
            console.log(node.key);
            if (node.left) {
                q.push(node.left);
            }
            if (node.right) {
                q.push(node.right);
            }
        }
    }
    // 最小值
    minimum() {
        if (this.count === 0)
            return;
        const minNode = this.__minimum(this.root);
        return minNode.key;
    }
    // 最小值
    maximum() {
        if (this.count === 0)
            return;
        const minNode = this.__maximum(this.root);
        return minNode.key;
    }
    // 删除最小值
    removeMin() {
        if (this.root) {
            this.root = this.__removeMin(this.root);
        }
    }
    // 删除最大值
    removeMax() {
        if (this.root) {
            this.root = this.__removeMax(this.root);
        }
    }
    // Hubbard(人名) Deletion
    remove(key) {
        this.root = this.__remove(this.root, key);
    }
}
exports.BST = BST;
