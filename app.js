// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



// section slidshow 

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slideshowContainer = document.querySelector('.slideshow-container');

let slideIndex = 0;

prevBtn.addEventListener('click', () => {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = 2;
    }
    updateSlidePosition();
});

nextBtn.addEventListener('click', () => {
    slideIndex++;
    if (slideIndex > 2) {
        slideIndex = 0;
    }
    updateSlidePosition();
});

function updateSlidePosition() {
    const slideWidth = document.querySelector('.slide').clientWidth;
    const offset = -slideIndex * slideWidth;
    slideshowContainer.style.transform = `translateX(${offset}px)`;
}




function gotoWeb() {

    const link = document.getElementsByClassName("websitelink");
    location.href = "https://amit99100.github.io/WeatherApp/";

}


function gotoWeb1() {

    const link = document.getElementsByClassName("websitelink");
    location.href = "https://amit99100.github.io/Password_Generator/";
}
