const burger = document.querySelector('.burger');
const burgerWrap = document.querySelector('.burger__wrap');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  burgerWrap.classList.toggle('active');
  console.log('33');
});

// 

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const track = document.querySelector(".track");

const NUM_SLIDES = 3;

let currSlide = 0;

function slideTrack() {
  track.style.transform = `translateX(${-currSlide * 100}%)`;
}

nextBtn.addEventListener("click", () => {
  currSlide = (currSlide + 1) % NUM_SLIDES;
  slideTrack();
});

prevBtn.addEventListener("click", () => {
  currSlide = (currSlide - 1 + NUM_SLIDES) % NUM_SLIDES;
  slideTrack();
});
