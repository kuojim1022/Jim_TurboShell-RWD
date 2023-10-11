let clickBtn =
  document.getElementsByClassName('.user_list')
  [0];


clickBtn.addEventListener("click", function () {
  this.classList.toggle("left: 0px;")
})