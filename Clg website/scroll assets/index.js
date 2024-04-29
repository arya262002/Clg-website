// const slider = [
//     {
//         title: "Machine Learning"
//     },
//     {
//         title: "Neural Network"
//     },
//     {
//         title: "Deep Learning"
//     }
// ];

// const sliderContents = document.querySelectorAll(".slider-content h1");

// for (let i = 0; i < sliderContents.length && i < slider.length; i++) {
//     sliderContents[i].innerText = slider[i].title;
// }
document.addEventListener("DOMContentLoaded", function() {
    const slider = [
        {
            title: "Machine Learning"
        },
        {
            title: "Neural Network"
        },
        {
            title: "Deep Learning"
        }
    ];

    const sliderContents = document.querySelectorAll(".slider-content h1");

    for (let i = 0;  i < slider.length; i++) {
        sliderContents[i].innerText = slider[i].title;
    }
});
