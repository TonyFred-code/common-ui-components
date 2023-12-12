import './style.css';

const clickDropDownBtns = document.querySelectorAll('.click-drop-down-btn');

function closeOpenDropContent() {
    const dropDownContents = document.querySelectorAll('.click-drop-down-content');

    dropDownContents.forEach((dropContent) => {
        dropContent.classList.remove('clicked');
    })
}

function openDropContent(e) {
  const elm = e.currentTarget;
  const target = elm.dataset.targetDropContent;

  closeOpenDropContent();

  const dropDownContent = document.querySelector(`#${target}`);

  if (dropDownContent === null) return;
  dropDownContent.classList.add('clicked');
}



clickDropDownBtns.forEach((btn) => {
  btn.addEventListener('click', openDropContent);
});
