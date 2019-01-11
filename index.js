function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n) {
  const rankedList = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < rankedList.length; i++) {
    rankedList[i].innerHTML = (parseInt(rankedList[i]) + n)
  }
}

function deepestChild() {
  const nodeList = document.getElementById('grand-node').querySelectorAll('div')
  var nextNode

  var i = 0
  while (i < nodeList.length - 1) {
    nextNode = nodeList[i]
    i++
  }

  //for (let i = 0; i < nodeList.length - 1; i++) {
  //  nextNode = nodeList[i].querySelector('div')
  //}
  //return nextNode
}


















/*
function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById("nested").querySelector(".target")
}

function increaseRankBy(n) {

}
*/
