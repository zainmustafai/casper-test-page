const paragraph = document.querySelector(".animate-on-scroll");

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScroll() {
    if (isElementInViewport(paragraph)) {
        paragraph.classList.add("open");
        window.removeEventListener("scroll", handleScroll);
    }
}
window.addEventListener("scroll", handleScroll);

// Accordion
const accordionItem = document.querySelectorAll(".accordionItem");
accordionItem.forEach((item) => {
    item.addEventListener("click", (e) => {
        const accordionIcon = item.querySelector(".accordionIcon");
        const accordionItemContent = item.querySelector(".accordionItemContent");
        const accordionItemContentHeight = accordionItemContent.scrollHeight;
        accordionIcon.classList.toggle("rotate-45");
        accordionItem.forEach((item) => {
            if (item !== e.currentTarget) {
                item.querySelector(".accordionItemContent").classList.remove("accordionOpen");
                item.querySelector(".accordionItemContent").classList.add("accordionClose");
                item.querySelector(".accordionItemContent").style.maxHeight = 0;
                item.querySelector(".accordionIcon").classList.remove("rotate-45");
            }
        });
        if (accordionItemContent.classList.contains("accordionClose")) {
            accordionItemContent.classList.remove("accordionClose");
            accordionItemContent.classList.add("accordionOpen");
            accordionItemContent.style.maxHeight = accordionItemContentHeight + "px";
        } else {
            accordionItemContent.classList.remove("accordionOpen");
            accordionItemContent.classList.add("accordionClose");
            accordionItemContent.style.maxHeight = 0;
        }
    });
});
