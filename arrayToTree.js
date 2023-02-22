const arr = [
    {id: 1, name: '部门1', pid: 0},
    {id: 2, name: '部门2', pid: 1},
    {id: 3, name: '部门3', pid: 1},
    {id: 4, name: '部门4', pid: 3},
    {id: 5, name: '部门5', pid: 4},
]

// recursion step by step
function arrayToTree(arr, pid) {
  return arr.filter(item => item.pid === pid).map(item => ({ ...item, children: arrayToTree(arr, item.id) }))
}
