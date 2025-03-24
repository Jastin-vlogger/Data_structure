/**
 * Problem: Given a tree-like structure, flatten it into an array
 */
interface ITree {
  id: number;
  children?: ITree[];
}

const tree: ITree = {
  id: 1,
  children: [{ id: 2, children: [{ id: 4 }, { id: 5 }] }, { id: 3 }],
};

function findIds(tree: ITree, result: number[] = []): number[] {
  if (tree.id != undefined) {
    result.push(tree.id);
  }
  let children = tree.children;
  if (Array.isArray(children)) {
    for (let i = 0; i < children?.length; i++) {
      findIds(children[i], result);
    }
  }
  return result;
}

console.log(findIds(tree));

//   [1, 2, 4, 5, 3]
