import './style.css';

const clickDropDownBtns = document.querySelectorAll('.click-drop-down-btn');

function openDropContent(e) {
  const elm = e.currentTarget;
  const target = elm.dataset.targetDropContent;

  const dropDownContent = document.querySelector(`#${target}`);
  dropDownContent.classList.toggle('clicked');
}

clickDropDownBtns.forEach((btn) => {
  btn.addEventListener('click', openDropContent);
});
