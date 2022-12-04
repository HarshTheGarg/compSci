function Node(data){
    return {
        data: data,
        left: null,
        right: null
    }
}

function bubSort(arr){
    let sc = -1;
    while ( sc ){
        sc = 0;
        let i = 0;
        while(i < arr.length-1){
            if ( arr[i] > arr[i + 1] ){
                arr[i] = arr[i + 1] + arr[i];
                arr[i + 1] = arr[i] - arr[i + 1];
                arr[i] = arr[i] - arr[i + 1];
                sc ++ ;
            }
            i++;
        }
    }

    return arr;
}

function remDup(arr){
    let i = 1;
    let j = 1;
    let narr = [];
    narr[0] = arr[0];
    while ( i < arr.length ){
        if ( arr[i] != narr[j-1] ){
            narr[j] = arr[i];
            i++;
            j++;
            continue;
        }
        i++;
    }
    return narr;
}

function Tree(arr){
    arr = remDup(bubSort(ar));
    return {
        root: buildTree(arr, 0, arr.length-1)
    }
    function buildTree(arr, start, end){
        if ( start > end ){
            return null;
        }
        let mid = (start + end)/2;
        mid = Math.floor(mid);
        let root = Node(arr[mid]);

        root.left = buildTree(arr, start, mid - 1);
        root.right = buildTree(arr, mid + 1, end );
        
        return root;
    }
}

const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  }

  
  
ar = [1, 2, 3, 4, 5, 6, 7, 8, 9];
prettyPrint(Tree(ar).root);