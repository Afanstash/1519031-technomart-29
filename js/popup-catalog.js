const linkBuy = document.querySelector(".button-buy");
const modalBuy = document.querySelector(".modal-add");
const closeBuy = modalBuy.querySelector(".button-close");

linkBuy.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalBuy.classList.toggle("modal-hidden");
  modalBuy.classList.toggle("modal-show");
});

closeBuy.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalBuy.classList.toggle("modal-show");
  modalBuy.classList.toggle("modal-hidden");
});

 window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalBuy.classList.contains("modal-show")) {
      evt.preventDefault();
      modalBuy.classList.remove("modal-show");
      modalBuy.classList.add("modal-hidden");
    }
  }
});
