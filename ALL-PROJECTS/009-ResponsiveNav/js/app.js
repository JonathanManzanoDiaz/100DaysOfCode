window.addEventListener("DOMContentLoaded", () => {
  let hamb = document.getElementById("hambIcon");
  let close = document.getElementById("close");
  let ul = document.querySelector(".ul");
  hamb.onclick = () => {
    ul.classList.toggle("show");
    close.classList.toggle("show");
  };
  close.onclick = () => {
    close.classList.toggle("show");
    ul.classList.add("show");
  };
});
