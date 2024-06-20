"use strict";

const docQS = function (selector) {
  return document.querySelector(selector);
};

const modal = docQS(".modal");
const overlay = docQS(".overlay");
const btn = docQS(".close-modal");
const btnsOpenModal = docQS(".open-modal");
