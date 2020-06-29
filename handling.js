document.querySelector(".fa-bars").addEventListener("click", () => {
  document.querySelector(".nav-options").classList.add("display");
  document.querySelector(".fa-bars").classList.add("show");
  document.querySelector(".fa-close").classList.add("show");
});
document.querySelector(".fa-close").addEventListener("click", () => {
  document.querySelector(".nav-options").classList.remove("display");
  document.querySelector(".fa-bars").classList.remove("show");
  document.querySelector(".fa-close").classList.remove("show");
});
