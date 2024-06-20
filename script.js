"use strict";

const docQS = function (selector) {
  return document.querySelector(selector);
};
const docQSA = function (selector) {
  return document.querySelectorAll(selector);
};

const modal = docQS(".modal");
const overlay = docQS(".overlay");
const btn = docQS(".close-modal");
const btnsOpenModal = docQSA(".show-modal");
console.log(btnsOpenModal);

for (let i = 0; 1 < btnsOpenModal.length; i++)
  console.log(btnsOpenModal[i].textContent);
