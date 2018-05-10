/*
* @Author: AlanWang
* @Date:   2018-05-10 16:27:18
* @Last Modified by:   AlanWang
* @Last Modified time: 2018-05-10 16:30:38
*/
function fact (n) {
  return factIter(n, 1)
}

function factIter (n, s) {
  if (n <= 1) return s
  return factIter(n - 1, n * s)
}
console.log(fact(1000))