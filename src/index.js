import './style.css';
import initTriggerButton from './dropDown';
import initTabTriggers from './tab';
import slide1ImageSrc from './images/slide-image-1.jpg';
import slide2ImageSrc from './images/slide-image-2.jpg';
import slide3ImageSrc from './images/slide-image-3.jpg';
import slide4ImageSrc from './images/slide-image-4.jpg';
import slide5ImageSrc from './images/slide-image-5.jpg';

initTriggerButton(
  '[data-target-drop-content]',
  'clicked',
  '.click-drop-down-content'
);

initTabTriggers('active', '.tab-link');

function createImage(src, alt = '') {
  const img = new Image();
  img.src = src;
  img.alt = alt;
  return img;
}

function loadImage() {
  const img1 = createImage(slide1ImageSrc);
  const img1Container = document.querySelector('.slide-1');

  img1.classList.add('slide-img');

  const img2 = createImage(slide2ImageSrc);
  const img2Container = document.querySelector('.slide-2');
  img2Container.classList.add('hide');

  img2.classList.add('slide-img');

  const img3 = createImage(slide3ImageSrc);
  const img3Container = document.querySelector('.slide-3');
  img3Container.classList.add('hide');

  img3.classList.add('slide-img');

  const img4 = createImage(slide4ImageSrc);
  const img4Container = document.querySelector('.slide-4');
  img4Container.classList.add('hide');

  img4.classList.add('slide-img');

  const img5 = createImage(slide5ImageSrc);
  const img5Container = document.querySelector('.slide-5');
  img5Container.classList.add('hide');

  img5.classList.add('slide-img');
  img1Container.appendChild(img1);
  img2Container.appendChild(img2);
  img3Container.appendChild(img3);
  img4Container.appendChild(img4);
  img5Container.appendChild(img5);
}

const imageSliderContainer = document.querySelector('.image-slider-container');

function setActive(slideNo) {
  const slide = document.querySelector(`.slide-${slideNo}`);

  slide.classList.add('show');
}

loadImage();
setActive(1);

const nextBtn = document.querySelector('.image-slider-container .next');

const prevBtn = document.querySelector('.image-slider-container .prev');

const navigationCircles = document.querySelectorAll('.dot');

function hideShown() {
  const shownSlide = document.querySelector('.slide.show');
  if (shownSlide === null) return;
  shownSlide.classList.remove('show');
  shownSlide.classList.add('hide');
}

function showNext() {
  const currentSlide = Number(imageSliderContainer.dataset.showing);
  hideShown();
  const nextSlide = currentSlide + 1 > 5 ? 1 : currentSlide + 1;

  const slide = document.querySelector(`.slide-${nextSlide}`);
  imageSliderContainer.dataset.showing = nextSlide;
  slide.classList.add('show');
  slide.classList.remove('hide');
}

function showPrev() {
  // const elm = e.currentTarget;
  const currentSlide = Number(imageSliderContainer.dataset.showing);
  hideShown();

  const prevSlide = currentSlide - 1 < 1 ? 5 : currentSlide - 1;

  const slide = document.querySelector(`.slide-${prevSlide}`);
  imageSliderContainer.dataset.showing = prevSlide;
  slide.classList.add('show');
  slide.classList.remove('hide');
}

nextBtn.addEventListener('click', showNext);
prevBtn.addEventListener('click', showPrev);

function showSlide(e) {
  const elm = e.currentTarget;
  const { slide } = elm.dataset;
  hideShown();

  imageSliderContainer.dataset.showing = slide;
  const imgSlide = document.querySelector(`.slide-${slide}`);
  imgSlide.classList.add('show');
  imgSlide.classList.remove('hide');
}

navigationCircles.forEach((navigationCircle) => {
  navigationCircle.addEventListener('click', showSlide);
});
