if (typeof Storage !== void 0) {
  var orderButton = document.querySelector("#order")

  orderButton.addEventListener("click", function () {
    localStorage.clear()
  })
} else {
  console.log("No localStorage supported")
}
