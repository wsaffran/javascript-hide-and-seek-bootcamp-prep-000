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
  for (let i = 0; i < nodeList.length; i++) {
    nextNode = nodeList[i].querySelector('div')
  }
  return nextNode
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
