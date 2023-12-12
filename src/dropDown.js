let DROPCONTENTSELECTOR = '';
let CLOSEALLOPEN = false;

function closeOpenDropContent(dropContentSelector, triggerClass, leaveOpen) {
  const dropDownContents = document.querySelectorAll(dropContentSelector);

  dropDownContents.forEach((dropContent) => {
    if (dropContent !== leaveOpen) {
      dropContent.classList.remove(triggerClass);
    }
  });
}

function openDropContent(dropContentName, triggerClass) {
  const dropContent = document.querySelector(`#${dropContentName}`);

  if (CLOSEALLOPEN === true) {
    closeOpenDropContent(DROPCONTENTSELECTOR, triggerClass, dropContent);
  }

  if (dropContent === null) {
    throw new Error(`Failed to assigned ${triggerClass} to a null`);
  } else {
    dropContent.classList.toggle(triggerClass);
  }
}

/*
| to use |
import below function and as arguments,
argument1 (tiggerBtnSelector)
    - this is the selector of all buttons which will be clicked
    to trigger opening a dropcontent
argument2 (triggerClass)
    - this is the class which must be attached to the dropdown content
     in html&css
    - this will be toggled as triggerBtn is clicked
argument3 (dropContent)
    - this is the selector which must be attributed to every drodown content on the page
*/

export default function initTriggerButton(
  triggerBtnSelector,
  triggerClass,
  dropContentSelector,
  { closeAllOpen = false } = {}
) {
  DROPCONTENTSELECTOR = dropContentSelector;
  CLOSEALLOPEN = closeAllOpen;

  const triggerButtons = document.querySelectorAll(triggerBtnSelector);

  triggerButtons.forEach((triggerBtn) => {
    triggerBtn.addEventListener('click', (e) => {
      const elm = e.currentTarget;
      const { targetDropContent } = elm.dataset;
      openDropContent(targetDropContent, triggerClass);
    });
  });
}
