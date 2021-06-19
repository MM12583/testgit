"use strict";

const number = document.getElementById("number");
const btn = document.getElementById("btn");
// console.log(number, btn);

let randomNumber = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber);
btn.addEventListener("click", function (e) {
  const userVal = parseInt(number.value, 10); // 轉成10進位整數
  //   console.log(userVal, randomNumber);
  if (userVal === randomNumber) {
    alert("Your are right");
    return;
  } else if (userVal > randomNumber) {
    alert("smaller");
    return;
  } else {
    alert("larger");
    return;
  }
});
