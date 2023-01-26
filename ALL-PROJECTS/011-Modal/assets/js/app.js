let openBtn = document.querySelector(".openBtn");
let contentModal = document.querySelector(".contentModal");
let closeBtn = document.querySelector(".closeModal");
let body = document.querySelector("body");

window.addEventListener("DOMContentLoaded", function () {
  openBtn.addEventListener("click", () => {
    contentModal.style.display = "flex";
  });

  closeBtn.addEventListener("click", () => {
    contentModal.style.display = "none";
  });
});
