
const slides = document.querySelectorAll(".slide");
console.log(slides);

var counter = 0;

slides.forEach((slide, index) => {

    slide.style.left = `${index * 100}%`;

})


const goNext = () => {

    counter++;
    slideImage();
}

const goPrev = () => {
    console.log("go prev working")
    counter--;
    slideImage();
}

let noOfSlide = 2;

const slideImage = () => {

    slides.forEach((slide) => {

        counter = counter % noOfSlide;
        console.log(counter);
        TitleDes(counter);

        if (counter > 0) {

            slide.style.transform = `translateX(-${counter * 100}%)`;
        } else {
            slide.style.transform = `translateX(${counter * 100}%)`;

        }

        console.log(counter);
    })
}


// Data and Title and Descirption logics 

const data = [
    {
        id: "1",
        title: "Complex Password Generator",
        description: "Create Best passwords according to your preferences using this application.",
    },
    {
        id: "2",
        title: "Weather app",
        description: "Retrieve  weather data for any city across the globe, including temperature information and weather conditions.",
    },
];

function TitleDes(counter) {
    let count = Math.abs(counter);
    document.getElementById("Project_Title").innerText = data[count].title;
    document.getElementById("Project_Des").innerText = data[count].description;
}

// Attach event listener to the button
document.getElementById("updateButton").addEventListener("click", function () {
    // Call TitleDes function with a counter value (e.g., 0 or 1)
    TitleDes(0); // Change the counter value as needed
});
