const dawer = document.querySelector("[data-dawer]");
const dawerBtnClose = document.querySelector("[data-dawer-btn-close]");
const dawerBtnOpen = document.querySelector("[data-dawer-btn-open]");
const dawerBackdrop = document.querySelector("[data-dawer-backdrop]");

[dawerBtnClose, dawerBackdrop].forEach((el) => {
  el.addEventListener("click", function () {
    dawer.classList.add("dawer--hide");
  });
});
dawerBtnOpen.addEventListener("click", function () {
  dawer.classList.remove("dawer--hide");
});

const links = document.querySelectorAll("[data-link]");

document.addEventListener("keydown", function (e) {
  console.log(document.element, "Marko Miljanov je Srbin Crnogorac!");
});

alert("Pomozae Bog");
