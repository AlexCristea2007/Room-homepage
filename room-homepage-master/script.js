const openBtn = document.querySelector(".btn-open-menu");
const closeBtn = document.querySelector(".btn-close-menu");
const menu = document.querySelector(".nav-menu");
const filter = document.querySelector(".filter");

openBtn.addEventListener("click", () => {
  document.body.style.overflow = "hidden";
  menu.classList.add("active");
  filter.classList.add("active");

  setTimeout(() => {
    menu.classList.add("anim");
    filter.classList.add("anim");
  }, 1);
});

closeBtn.addEventListener("click", () => {
  document.body.style.overflow = "auto";
  menu.classList.remove("anim");
  filter.classList.remove("anim");

  setTimeout(() => {
    menu.classList.remove("active");
    filter.classList.remove("active");
  }, 500);
});

const imgWrapper = document.querySelector(".hero-section");
const title = document.querySelector(".title");
const description = document.querySelector(".description");
const slideBtns = document.querySelectorAll(".slide-btn");

let slideSelected = 0;

fetch("data.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    slideBtns.forEach((slideBtn, index) => {
      slideBtn.addEventListener("click", () => {
        changeSlide(data, index);
      });
    });
  });

function changeSlide(data, index) {
  if (index === 0) {
    slideSelected = (slideSelected - 1 + data.length) % data.length;
  } else {
    slideSelected = (slideSelected + 1) % data.length;
  }

  imgWrapper.style.backgroundImage = `url(${data[slideSelected].img})`;
  title.textContent = data[slideSelected].title;
  description.textContent = data[slideSelected].description;
}
