const tabNodeList = document.querySelectorAll("div.tab");

console.log(tabNodeList.length);

tabNodeList.forEach(
    tab => tab.addEventListener("click", () => {
        const currentSelectedTab = document.querySelector("div.selected-tab");
        const currentSelectedPageList = document.querySelector("div.selected-list");

        currentSelectedTab.classList.remove("selected-tab");
        tab.classList.add("selected-tab");
        const pageListSelector = "div.page-list.".concat(tab.classList[1]);
        const pageListElement = document.querySelector(pageListSelector);
        console.log(pageListElement);

        currentSelectedPageList.classList.remove("selected-list");
        pageListElement.classList.add("selected-list");
    })
);