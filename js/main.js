let navButton = document.querySelector('#nav-button');
let navList = document.querySelector('#nav');
let navButtonImg = document.querySelector('#nav-img');


function close() {
    navList.classList.remove('open');
    navButtonImg.src = './img/menu-open.png';
}

navButton.onclick = () => {
    if (navList.classList.toggle('open')) {
        navButtonImg.src = './img/menu-close.png';
        navList.addEventListener('click', function (event) {
            if(event.target.tagName === "A") close();
          });
    } else {
        navButtonImg.src = './img/menu-open.png';
    }
}

// Slider 

const slider = document.querySelector('#my-project-slider');
const sliderItems = document.querySelectorAll('.project-link');
const prevButton = document.querySelector('.left-btn');
const nextButton = document.querySelector('.right-btn');

var currentProject = 0;

nextButton.addEventListener('click', () => {
    sliderItems[currentProject].classList.add('hidden');
    if (currentProject < 4) {
        currentProject += 1;
        sliderItems[currentProject].classList.remove('hidden');
    }
    else if (currentProject === 4) {
        currentProject = 0;
        sliderItems[currentProject].classList.remove('hidden');
    }
})

prevButton.addEventListener('click', () => {
    sliderItems[currentProject].classList.add('hidden');
    if (currentProject > 0) {
        currentProject -= 1;
        sliderItems[currentProject].classList.remove('hidden');
    }
    else if (currentProject === 0) {
        currentProject = 4;
        sliderItems[currentProject].classList.remove('hidden');
    }
})