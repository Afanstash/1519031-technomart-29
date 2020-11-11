const linkMap = document.querySelector(".link-map");
const map = document.querySelector(".modal-map");
const closeMap = map.querySelector(".button-close");

const linkForm = document.querySelector(".link-form");
const form = document.querySelector(".modal-form");
const closeForm = form.querySelector(".button-close");
const name = form.querySelector(".input-name");
const email = form.querySelector(".input-email");
const text = form.querySelector(".textarea");
let isStorageSupport = true;
let formName = "";
let formEmail = "";

linkForm.addEventListener("click", function (evt) {
  evt.preventDefault();
  form.classList.remove("modal-error");
  form.classList.toggle("modal-hidden");
  form.classList.toggle("modal-show");
  name.focus();
  if (formName || formEmail) {
    name.value = formName;
    email.value = formEmail;
    text.focus();
  }
});

form.addEventListener("submit", function (evt) {
  if (!name.value || !email.value) {
    evt.preventDefault();
    form.classList.remove("modal-error");
    form.offsetWidth = form.offsetWidth;
    form.classList.add("modal-error");
  } else {
    evt.preventDefault();
    if (isStorageSupport) {
      localStorage.setItem("name", name.value);
      localStorage.setItem("email", email.value);
    }
  }
});

 try {
  formName = localStorage.getItem("name");
  formEmail = localStorage.getItem("email")
 } catch (err) {
  isStorageSupport = false;
 }

 closeForm.addEventListener("click", function (evt) {
  evt.preventDefault();
  form.classList.toggle("modal-show");
  form.classList.toggle("modal-hidden");
});

linkMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  map.classList.toggle("modal-hidden");
  map.classList.toggle("modal-show");
});

closeMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  map.classList.toggle("modal-show");
  map.classList.toggle("modal-hidden");
});

 window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (map.classList.contains("modal-show")) {
      evt.preventDefault();
      map.classList.remove("modal-show");
      map.classList.add("modal-hidden");
    }
    if (form.classList.contains("modal-show")) {
      evt.preventDefault();
      form.classList.remove("modal-show");
      form.classList.add("modal-hidden");
    }
  }
});
