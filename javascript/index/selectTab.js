const tabNodeList = document.querySelectorAll("div.tab");

console.log(tabNodeList.length);


tabNodeList.forEach(
    tab => tab.addEventListener("click", () => {
        const currentSelectedTab = document.querySelector("div.selected-tab");
        const currentSelectedPageElement = document.querySelector("div.selected-page");

        currentSelectedTab.classList.remove("selected-tab");
        tab.classList.add("selected-tab");
        console.log(tab.id);
        const pageSelector = "div.page#".concat(tab.id);
        const newlySelectedPageElement = document.querySelector(pageSelector);
        console.log(newlySelectedPageElement);
        
        currentSelectedPageElement.classList.remove("selected-page");
        newlySelectedPageElement.classList.add("selected-page");
    })
);

