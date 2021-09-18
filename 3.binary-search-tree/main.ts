import { BST } from './BST';

const bst = new BST();

const n = 100;
bst.insert(50, `元素root ${50}`);
for (let i = 0; i < n; i++) {
  bst.insert(i, `元素${i}`);
}

// console.log(bst.search(56));
// console.log(bst.search(1));

// console.log(bst.size());

// bst.inOrder();
// bst.levelOrder();
