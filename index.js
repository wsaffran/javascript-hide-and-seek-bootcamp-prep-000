function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n) {
  const rankedList = document.querySelector('.ranked-list')
  for (let i = 0; i < rankedList.length; i++) {
    rankedList[i].innerHTML = (parseInt(rankedList[i]) + n)
  }
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
