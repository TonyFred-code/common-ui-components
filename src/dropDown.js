let DROPCONTENTSELECTOR = "";

function closeOpenDropContent(dropContentSelector, triggerClass) {
    const dropDownContents = document.querySelectorAll(dropContentSelector);

    dropDownContents.forEach((dropContent) => {
      if (dropContent !== null) {
        dropContent.classList.remove(triggerClass);
      }
    });
  }

function openDropContent(dropContentName, triggerClass) {
  const dropContent = document.querySelector(`#${dropContentName}`);

  closeOpenDropContent(DROPCONTENTSELECTOR, triggerClass);

  if (dropContent === null) {
    throw new Error(`Failed to assigned ${triggerClass} to a null`);
  } else {
    const { classList } = dropContent;
    if (classList.contains(triggerClass)) {
      dropContent.classList.remove(triggerClass);
    } else {
      dropContent.classList.add(triggerClass);
    }
  }
}



export default function initTriggerButton(
  triggerBtnSelector,
  triggerClass,
  dropContentSelector
) {
    DROPCONTENTSELECTOR = dropContentSelector;

  const triggerButtons = document.querySelectorAll(triggerBtnSelector);

  triggerButtons.forEach((triggerBtn) => {
    triggerBtn.addEventListener('click', (e) => {
      const elm = e.currentTarget;
      const { targetDropContent } = elm.dataset;
      openDropContent(targetDropContent, triggerClass);
    });
  });
}
