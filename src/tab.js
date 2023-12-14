let TABTRIGGER = '';
let TABSELECTOR = '';

function setActive(e) {
    const tabClicked = e.currentTarget;

    tabClicked.classList.add(TABTRIGGER);
}

function closeOpen() {
    const tabLinks = document.querySelectorAll(TABSELECTOR);

    tabLinks.forEach((tabLink) => {
        if (tabLink === null) {
            throw new Error("Setting class attribute on null.");
        } else {
            tabLink.classList.remove(TABTRIGGER);
        }
    })
}

export default function initTabTriggers(
    classTriggerName,
    tabLinkSelector
) {
    const tabLinks = document.querySelectorAll(tabLinkSelector);

    tabLinks.forEach((tabLink) => {
        if (tabLink === null) {
            throw new Error("Setting eventlistener on null.");
        } else {
            TABTRIGGER = classTriggerName;
            TABSELECTOR = tabLinkSelector;
            tabLink.addEventListener("click", (e) => {
                closeOpen();
                setActive(e);
            })
        }
    })
}