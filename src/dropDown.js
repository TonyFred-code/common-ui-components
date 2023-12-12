function openDropContent(dropContentName, triggerClass) {
  const dropContent = document.querySelector(`#${dropContentName}`);

  if (dropContent === null) {
    throw new Error(`Failed to assigned ${triggerClass} to a null`)
  } else {
    dropContent.classList.add(triggerClass);
  }
}

function closeOpenDropContent(dropContentSelector, triggerClass) {
  const dropDownContents = document.querySelectorAll(dropContentSelector);

  dropDownContents.forEach((dropContent) => {
    if (dropContent !== null) {
      dropContent.classList.remove(triggerClass);
    }
  });
}

export default function initTriggerButton(
  triggerBtnSelector,
  triggerClass,
  dropContentSelector
) {
  const triggerButtons = document.querySelectorAll(triggerBtnSelector);

  triggerButtons.forEach((triggerBtn) => {
    triggerBtn.addEventListener('click', (e) => {
      const elm = e.currentTarget;
      const {targetDropContent} = elm.dataset;
      closeOpenDropContent(dropContentSelector, triggerClass);
      openDropContent(targetDropContent, triggerClass);
    });
  });
}
