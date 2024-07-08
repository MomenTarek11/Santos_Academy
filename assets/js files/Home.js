let about_section = document.querySelector(".About");
let right_about = document.getElementById("right-about");
let left_about = document.getElementById("left-about");
let first_braches = document.querySelector(".first-branches");
let branche1 = document.querySelector(".Branche1");
let branche2 = document.querySelector(".Branche2");
let second_braches = document.querySelector(".second-branches");
let branche3 = document.querySelector(".Branche3");
let branche4 = document.querySelector(".Branche4");
let BranchesTitle = document.querySelector(".BranchesTitle");
let News = document.querySelector(".news");
let New = document.querySelectorAll(".new");
window.onscroll = function () {
  if (window.scrollY >= about_section.offsetTop - 100) {
    right_about.classList.add("showAnimation");
    left_about.classList.add("showAnimation");
  }
  if (window.scrollY >= BranchesTitle.offsetTop - 100) {
    branche1.classList.remove("d-none");
    branche2.classList.remove("d-none");
  }
  if (window.scrollY >= first_braches.offsetTop) {
    branche3.classList.remove("d-none");
    branche4.classList.remove("d-none");
  }
};
function scale(ele) {
  ele.style.transition = "all 0.5s ";
  return (ele.style.transform = "scale(1.6)");
}
function removeScale(ele) {
  ele.style.transition = "all 0.5s ";

  return (ele.style.transform = "scale(1)");
}
