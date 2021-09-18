class TNode<K, V> {
  key: K;
  value: V;
  left: TNode<K, V> | null;
  right: TNode<K, V> | null;

  constructor(key: K, value: V) {
    this.key = key;
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class BST<K, V> {
  private root: TNode<K, V> | null;
  private count: number;

  private __insert(node: TNode<K, V> | null, key: K, value: V): TNode<K, V> {
    if (node === null) {
      this.count++;
      return new TNode(key, value);
    }

    if (key === node.key) {
      node.value === value;
    } else if (key < node.key) {
      node.left = this.__insert(node.left, key, value);
    } else {
      node.right = this.__insert(node.right, key, value);
    }

    return node;
  }

  private __contain(node: TNode<K, V> | null, key: K): boolean {
    if (node === null) {
      return false;
    }

    if (key === node.key) {
      return true;
    } else if (key < node.key) {
      return this.__contain(node.left, key);
    } else {
      return this.__contain(node.right, key);
    }
  }

  private __search(node: TNode<K, V> | null, key: K): V | null {
    if (node === null) {
      return null;
    }

    if (key === node.key) {
      return node.value;
    } else if (key < node.key) {
      return this.__search(node.left, key);
    } else {
      return this.__search(node.right, key);
    }
  }

  private __preOrder(node: TNode<K, V> | null): void {
    if (node !== null) {
      console.log(node.key);
      this.__preOrder(node.left);
      this.__preOrder(node.right);
    }
  }

  private __inOrder(node: TNode<K, V> | null): void {
    if (node !== null) {
      this.__inOrder(node.left);
      console.log(node.key);
      this.__inOrder(node.right);
    }
  }

  private __postOrder(node: TNode<K, V> | null): void {
    if (node !== null) {
      this.__postOrder(node.left);
      this.__postOrder(node.right);
      console.log(node.key);
    }
  }

  private __minimum(node: TNode<K, V>): TNode<K, V> {
    if (node.left === null) {
      return node;
    }

    return this.__minimum(node.left);
  }

  private __maximum(node: TNode<K, V>): TNode<K, V> {
    if (node.right === null) {
      return node;
    }

    return this.__maximum(node.right);
  }

  private __removeMin(node: TNode<K, V> | null): TNode<K, V> | null {
    if (node === null) return null;

    if (node.left === null) {
      const rightNode = node.right;

      node = null;
      this.count--;

      return rightNode;
    }

    node.left === this.__removeMin(node.left);

    return node;
  }

  private __removeMax(node: TNode<K, V> | null): TNode<K, V> | null {
    if (node === null) return null;

    if (node.right === null) {
      const leftNode = node.left;

      node = null;
      this.count--;

      return leftNode;
    }

    node.right === this.__removeMax(node.right);

    return node;
  }

  private __remove(node: TNode<K, V> | null, key: K): TNode<K, V> | null {
    if (node === null) return null;
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
    } else {
      node.right === this.__remove(node.right, key);
    }

    return node;
  }

  constructor() {
    this.root = null;
    this.count = 0;
  }

  size(): number {
    return this.count;
  }

  isEmpty(): boolean {
    return this.count === 0;
  }

  insert(key: K, value: V): void {
    this.root = this.__insert(this.root, key, value);
  }

  contain(key: K): boolean {
    return this.__contain(this.root, key);
  }

  search(key: K): V | null {
    return this.__search(this.root, key);
  }

  destroy(node: TNode<K, V> | null): void {
    if (node !== null) {
      this.destroy(node.left);
      this.destroy(node.right);
      node = null;
    }
  }

  // 深度优先 - 前序遍历
  preOrder(): void {
    this.__preOrder(this.root);
  }

  // 深度优先 - 中序遍历
  inOrder(): void {
    this.__inOrder(this.root);
  }

  // 深度优先 - 后序遍历
  postOrder(): void {
    this.__postOrder(this.root);
  }

  // 广度优先 - 层序遍历
  levelOrder(): void {
    if (!this.root) return;
    const q: TNode<K, V>[] = [];
    q.push(this.root);
    while (q.length !== 0) {
      const node = q.shift();
      console.log(node!.key);

      if (node!.left) {
        q.push(node!.left);
      }

      if (node!.right) {
        q.push(node!.right);
      }
    }
  }

  // 最小值
  minimum(): K | void {
    if (this.count === 0) return;
    const minNode = this.__minimum(this.root!);
    return minNode.key;
  }

  // 最小值
  maximum(): K | void {
    if (this.count === 0) return;
    const minNode = this.__maximum(this.root!);
    return minNode.key;
  }

  // 删除最小值
  removeMin(): void {
    if (this.root) {
      this.root = this.__removeMin(this.root);
    }
  }

  // 删除最大值
  removeMax(): void {
    if (this.root) {
      this.root = this.__removeMax(this.root);
    }
  }

  // Hubbard(人名) Deletion
  remove(key: K): void {
    this.root = this.__remove(this.root, key);
  }
}
