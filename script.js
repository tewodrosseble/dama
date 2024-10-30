document.addEventListener('DOMContentLoaded', (event) => {
    const heading = document.createElement('h1');
    heading.textContent = 'Welcome to My Webpage!';
    document.body.appendChild(heading);

    const paragraph = document.createElement('p');
    paragraph.textContent = 'This is a simple script for a webpage.';
    document.body.appendChild(paragraph);
});