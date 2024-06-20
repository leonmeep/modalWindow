"use strict";
//query selector functions
const docQS = function (selector) {
  return document.querySelector(selector);
};
const docQSA = function (selector) {
  return document.querySelectorAll(selector);
};

//classes to manipulate
const modal = docQS(".modal");
const overlay = docQS(".overlay");
const btnCloseModal = docQS(".close-modal");
const btnsOpenModal = docQSA(".show-modal");

//function that removes hidden class on modal
const removeHidden = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
//function that adds hidden class
const addHidden = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", removeHidden);

btnCloseModal.addEventListener("click", addHidden);
overlay.addEventListener("click", addHidden);
