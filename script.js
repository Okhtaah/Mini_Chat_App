"use strict";

const dis = document.querySelector("#display");
const send = document.querySelector("#send-btn");
const correct = document.querySelector("#correct-btn");
const clear = document.querySelector("#clear-btn");
const text = document.querySelector("#text-area");

send.addEventListener("click", () => {
  // console.log("send");
  dis.textContent = document.getElementById("text-area").value;
});

clear.addEventListener("click", () => {
  dis.textContent = "";
  text.value = "";
});

const dic = {
  q: "ض",
  w: "ص",
  e: "ث",
  r: "ق",
  t: "ف",
  y: "غ",
  u: "ع",
  i: "ه",
  o: "خ",
  p: "ح",
  "[": "ج",
  "]": "د",
  a: "ش",
  s: "س",
  d: "ي",
  f: "ب",
  g: "ل",
  h: "ا",
  j: "ت",
  k: "ن",
  l: "م",
  ";": "ك",
  "'": "ط",
  z: "ئ",
  x: "ء",
  c: "ؤ",
  v: "ر",
  b: "لا",
  n: "ى",
  m: "ة",
  ",": "و",
  ".": "ز",
  "/": "ظ",
  " ": " "
};

// function fun() {
//   // let h = "";
//   for (const element of dis) {
//   }
// }
correct.addEventListener("click", () => {
  let result = "";
  for (const hh of text.value) {
    result += dic[hh];
  }
  console.log(result);
  text.value = result;
  dis.textContent = result;
});
