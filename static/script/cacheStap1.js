// Getting DOM elements
var selectColor = document.querySelector("#color")
var selectOption = selectColor.options[selectColor.selectedIndex]

var textInput = document.querySelector("#text")

var selectSize = document.querySelector("#size")
var selectSizeOption = selectSize.options[selectSize.selectedIndex]

// Storing localStorage
var lastSelectedColor = localStorage.getItem("selectColor")
var lastSelectedText = localStorage.getItem("selectText")
var lastSelectedSize = localStorage.getItem("selectSize")

if (lastSelectedColor) {
  selectColor.value = lastSelectedColor
}

if (lastSelectedText) {
  textInput.value = lastSelectedText
}

if (lastSelectedSize) {
  selectSize.value = lastSelectedSize
}

selectColor.onchange = function () {
  lastSelectedColor = selectColor.options[selectColor.selectedIndex].value
  console.log(lastSelectedColor)
  localStorage.setItem("selectColor", lastSelectedColor)
}

textInput.onchange = function () {
  lastSelectedText = textInput.value
  console.log(lastSelectedText)
  localStorage.setItem("selectText", lastSelectedText)
}

selectSize.onchange = function () {
  lastSelectedSize = selectSize.options[selectSize.selectedIndex].value
  console.log(lastSelectedSize)
  localStorage.setItem("selectSize", lastSelectedSize)
}

console.log(localStorage)
