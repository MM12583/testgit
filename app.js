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
    Swal.fire({
      title: "Good Job !",
      text: "Do you want to continue",
      icon: "success",
      confirmButtonText: "Cool",
    });
    return;
  } else if (userVal > randomNumber) {
    Swal.fire({
      title: "Error!",
      text: "smaller",
      icon: "error",
      confirmButtonText: "Cool",
    });
    return;
  } else {
    Swal.fire({
      title: "Error!",
      text: "bigger",
      icon: "error",
      confirmButtonText: "Cool",
    });
    return;
  }
});
