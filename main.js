"use strict";

const n = document.querySelectorAll(".num");
let value = document.querySelector(".value");
const box_one = document.querySelector(".box_one");
const box_two = document.querySelector(".box_two");
let btn = document.querySelector(".btn");

const a = [0, 1, 2, 3, 4];

for (let i = 0; i < n.length; i++) {
  n[i].addEventListener("click", () => {
    if (n[i] === i) {
      n[i].classList.add("active");
      value.textContent = n[i].textContent;
    } else {
      n[i].classList.remove("active");
    }

    /*Submit Button */
  });
  btn.addEventListener("click", () => {
    if (n[i].classList.contains("active")) {
      box_two.classList.add("visible");
      box_one.classList.add("invisible");
    }
  });
}
