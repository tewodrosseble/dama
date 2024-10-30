// document.addEventListener('DOMContentLoaded', (event) => {
//     const heading = document.createElement('h1');
//     heading.textContent = 'Welcome to My Webpage!';
//     document.body.appendChild(heading);

//     const paragraph = document.createElement('p');
//     paragraph.textContent = 'This is a simple script for a webpage.';
//     document.body.appendChild(paragraph);
// });

document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const images = document.querySelectorAll('.carousel-inner img');
    const totalImages = images.length;

    document.querySelector('.next').addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % totalImages;
        updateCarousel();
    });

    document.querySelector('.prev').addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        updateCarousel();
    });

    function updateCarousel() {
        const offset = -currentIndex * 100;
        document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
    }
});