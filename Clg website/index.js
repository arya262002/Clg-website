const obj = [
    {
        img: "./scroll assets/deep learning.jpeg",
        title: "Deep Learning",
        description: "Deep learning, a facet of AI, uses multi-layered neural networks to learn intricate patterns from data, enhancing tasks like image recognition and language processing."
    },
    {
        img: "./scroll assets/neural network.png",
        title: "Neural Network",
        description: "A neural network is a series of algorithms that endeavors to recognize underlying relationships in a set of data through a process that mimics the way the human brain operates. It is a critical component of deep learning, a subset of machine learning that is responsible for analyzing large amounts of data."
    },
    {
        img: "./scroll assets/ai-artificial-intelligence-machine-learning-big-data-analysis-automation-technology-business-industrial-manufacturing-132528154.webp",
        title: "Artificial Intelligence",
        description: "Artificial intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think and act like humans. These machines can mimic human actions such as learning, problem-solving, understanding natural language, and recognizing objects."
    }
];

let currentIndex = 0;
const sliderTitle = document.getElementById('slider-title');
const sliderDescription = document.getElementById('slider-description');
const sliderImage = document.getElementById('slider-image');

function updateSliderContent() {
    sliderTitle.textContent = obj[currentIndex].title;
    sliderDescription.textContent = obj[currentIndex].description;
    sliderImage.src = obj[currentIndex].img;
    currentIndex = (currentIndex + 1) % obj.length; // Increment index and wrap around if reached the end
}

// Initial call to display first item
updateSliderContent();

// Automatically update slider content every 5 seconds (adjust the interval as needed)
setInterval(updateSliderContent, 3000);

//...............................................................................................................
AOS.init({
    duration: 1000
  });