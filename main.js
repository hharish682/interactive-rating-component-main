"use strict";

const n = document.querySelectorAll(".num");
let value = document.querySelector(".value");
const box_one = document.querySelector(".box_one");
const box_two = document.querySelector(".box_two");
let btn = document.querySelector(".btn");

const a = [1, 2, 3, 4, 5];

for (let i = 0; i < n.length; i++) {
  /* Add Class function */

  function addclass() {
    n[i].classList.add("active");
    value.textContent = n[i].textContent;
  }
  /* Remove Class function */
  function removeclass() {
    n[i].classList.remove("active");
  }

  /*selection click function */

  n[i].addEventListener("click", function () {
    n[i] += a[i] ? addclass() : removeclass();

    /*Submit Button */
  });
  btn.addEventListener("click", function () {
    if (n[i].classList.contains("active")) {
      box_two.classList.add("visible");
      box_one.classList.add("invisible");
    }
  });
}
