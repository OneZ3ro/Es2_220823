window.addEventListener("DOMContentLoaded", () => {
  manageTextInput();
});

const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const input = document.querySelector("input");
const form = document.querySelector("form");
const p = document.querySelector("#preText");

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

btn1.onclick = takeInput;
btn2.onclick = removeInput;
