"use strict";

const box_one = document.querySelector(".box_one");
const box_two = document.querySelector(".box_two");
const n = document.querySelectorAll(".num");
const num_1 = document.querySelector(".num_1");
const num_2 = document.querySelector(".num_2");
const num_3 = document.querySelector(".num_3");
const num_4 = document.querySelector(".num_4");
const num_5 = document.querySelector(".num_5");
let value = document.querySelector(".value");
let btn = document.querySelector(".btn");

const a = [num_1, num_2, num_3, num_4, num_5];

for (let i = 0; i < a.length; i++) {
  n[i].addEventListener("click", function () {
    n[i].classList.add("active");

    if (n[i] === num_1) {
      value.textContent = 1;
    } else if (n[i] === num_2) {
      value.textContent = 2;
    } else if (n[i] === num_3) {
      value.textContent = 3;
    } else if (n[i] === num_4) {
      value.textContent = 4;
    } else if (n[i] === num_5) {
      value.textContent = 5;
    }
  });
}

btn.addEventListener("click", function () {
  box_two.classList.add("visible");
  box_one.classList.add("invisible");
});
