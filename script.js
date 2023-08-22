const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const input = document.querySelector("input");
const form = document.querySelector("form");
const p = document.querySelector("#preText");
const spanMin = document.querySelector("#minuti");
const spanSec = document.querySelector("#secondi");
const spanMill = document.querySelector("#mill");
let mins = 0;
let secs = 0;
let mills = 0;
let interval = null;

const takeInput = () => {
  let text = input.value;
  localStorage.setItem("textInput", text);
  console.log(text);
};

const removeInput = () => {
  localStorage.removeItem("textInput");
  p.innerText = "";
};

const manageTextInput = () => {
  const isText = localStorage.getItem("textInput");

  if (isText) {
    p.innerText = `Nome precedentemente usato: ${isText}`;
  }
};

const counter = () => {
  mills++;
  if (mills < 9) {
    spanMill.innerText = "0" + mills;
  }
  if (mills > 9) {
    spanMill.innerText = mills;
  }
  if (mills > 99) {
    secs++;
    if (secs <= 9) {
      spanSec.innerText = "0" + secs;
    } else if (secs > 9) {
      spanSec.innerText = secs;
    }
    mills = 0;
    spanMill.innerText = "0" + 0;
  }
  if (secs > 59) {
    mins++;
    if (mins <= 9) {
      spanMin.innerText = "0" + mins;
    } else if (mins > 9) {
      spanMin.innerText = mins;
    }
    secs = 0;
    spanSec.innerText = "0" + 0;
    mills = 0;
    spanMill.innerText = "0" + 0;
  }
  if (mins > 9) {
    spanMin.innerText = mins;
  }
};

window.addEventListener("DOMContentLoaded", () => {
  manageTextInput();

  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(counter, 10);
});
btn1.onclick = takeInput;
btn2.onclick = removeInput;
