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
  const start = document.querySelectorAll('div#grand-node')
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
