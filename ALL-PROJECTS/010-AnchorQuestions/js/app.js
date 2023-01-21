let button1 = document.querySelector(".plus1");
let button2 = document.querySelector(".plus2");
let button3 = document.querySelector(".plus3");
let p1 = document.querySelector(".stack1");
let p2 = document.querySelector(".stack2");
let p3 = document.querySelector(".stack3");

button1.addEventListener("click", () => {
  p1.classList.toggle("show");
});
button2.addEventListener("click", () => {
  p2.classList.toggle("show");
});
button3.addEventListener("click", () => {
  p3.classList.toggle("show");
});
