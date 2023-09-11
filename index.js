const animatedElement = document.querySelectorAll(".slide-in");
const menuButton = document.querySelector(".menuButton");
const closeMenuButton = document.querySelector(".closeMenuButton");
const navbar = document.getElementById("navbar");
const threshold = 10; // Adjust this value as needed

// NAVBAR SHADOW Functionality
function toggleShadow() {
    if (window.scrollY > threshold) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

// Initial check in case the page starts scrolled down
toggleShadow();
// Listen for scroll events to toggle the shadow class
window.addEventListener("scroll", toggleShadow);

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

/** ---------------------------------------------SLIDE ANIMATION */
// Function to handle slide-in animation
function slideInOnScroll() {
    const slideInElements = document.querySelectorAll('.slide-in');

    slideInElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (elementTop < screenHeight) {
            element.classList.add('slide-in-active');
        } else {
            element.classList.remove('slide-in-active');
        }
    });
}

// Initial check in case elements are already in view
slideInOnScroll();

// Listen for scroll events to trigger the animation
window.addEventListener('scroll', slideInOnScroll);



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
