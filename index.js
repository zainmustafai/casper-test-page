const animatedElement = document.querySelectorAll(".slide-in");
const menuButton = document.querySelector(".menuButton");
const closeMenuButton = document.querySelector(".closeMenuButton");
// MENU TOGGLE
menuButton.addEventListener("click", (e) => {
    const mobileNav = document.querySelector("#mobileNav");
    mobileNav.classList.remove("hidden");
    mobileNav.classList.add("block");
});
closeMenuButton.addEventListener("click", (e) => {
    const mobileNav = document.querySelector("#mobileNav");
    mobileNav.classList.remove("block");
    mobileNav.classList.add("hidden");
});

// SCROLL ANIMATION
function isElementInView(element) {
    const rect = element.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Define animatedElement as an array of elements you want to animate
const animatedElements = document.querySelectorAll(".your-animated-element");

function animateOnScroll() {
    animatedElements.forEach((element) => {
        if (isElementInView(element)) {
            element.classList.add("slide-in-bottom");
        }
    });
}

// Add your animated elements with the class "your-animated-element" here

window.addEventListener("scroll", animateOnScroll);



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
