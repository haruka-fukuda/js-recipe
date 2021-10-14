// htmlにJavaの要素を入れる
const memoInput = document.getElementById("memo-input")
const addButton = document.getElementById("add-button")
const memoContainer = document.getElementById("memo-container")

// 取得できるプロパティを探す
console.dir(memoInput)
memoInput.value = ""

// ボタンを押す関数を入れる
addButton.onclick = function() {
  console.log(memoInput.value)

  // divタグを追加する。
  const card = document.createElement("div")
  card.className = "card"
  card.textContent = memoInput.value

  memoContainer.append(card)
}
