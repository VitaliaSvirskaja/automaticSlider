import "./style.css";

const hamburgerMenu = document.querySelector("#hamburgerMenu");
const content = document.querySelector(".content") as HTMLDivElement;

hamburgerMenu?.addEventListener("click", () => {
    const unfoldedMenuItems = document.querySelector(
        ".unfolded-menu-container"
    ) as HTMLDivElement;
    if (unfoldedMenuItems.style.visibility === "hidden") {
        unfoldedMenuItems.style.visibility = "visible";
        content.style.filter = "blur(4px)";
    } else {
        unfoldedMenuItems.style.visibility = "hidden";
        content.style.filter = "blur(0)";
    }
});

//Slider Function
//
let slideIndex = 0;
showSlides(slideIndex);

const dotOne = document.querySelector(".dot-one");

function resetInterval() {
    clearInterval(intervalID)
    intervalID = setInterval(automaticShowSlides, 5000);
}

dotOne?.addEventListener("click", () => {
    resetInterval();
    slideIndex = 0;
    showSlides(slideIndex);
});

const dotTwo = document.querySelector(".dot-two");
dotTwo?.addEventListener("click", () => {
    resetInterval()
    slideIndex = 1;
    showSlides(slideIndex);
});

const dotThree = document.querySelector(".dot-three");
dotThree?.addEventListener("click", () => {
    resetInterval()
    slideIndex = 2;
    showSlides(slideIndex);
});

const previewArrow = document.querySelector(".prev") as HTMLAnchorElement;
previewArrow.addEventListener("click", () => {
    resetInterval()
    slideIndex = (slideIndex + 2) % 3;
    showSlides(slideIndex);
});

const nextArrow = document.querySelector(".next") as HTMLAnchorElement;
nextArrow.addEventListener("click", () => {
    resetInterval()
    slideIndex = (slideIndex + 1) % 3;
    showSlides(slideIndex);
});

function showSlides(slideIndex: number) {
    const slides = document.getElementsByClassName(
        "mySlides"
    ) as HTMLCollectionOf<HTMLDivElement>;
    const slidesArray = Array.from(slides);
    slidesArray.forEach((slide) => (slide.style.display = "none"));
    slides[slideIndex].style.display = "block";

    const dots = document.getElementsByClassName(
        "dot"
    ) as HTMLCollectionOf<HTMLSpanElement>;
    const dotsArray = Array.from(dots);
    dotsArray.forEach((dot) => dot.classList.remove("active"));
    dots[slideIndex].classList.add("active");
}

function automaticShowSlides() {
    slideIndex = (slideIndex + 1) % 3;
    showSlides(slideIndex);
}


let intervalID = setInterval(automaticShowSlides, 5000);
