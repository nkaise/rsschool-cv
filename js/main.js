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

// Switch theme 

var btnSwitchTheme = document.querySelector('.icon-switch-theme');
var btnToLight = document.querySelector('.sun-to-light');
var btnToDark = document.querySelector('.sun-to-dark');
var body = document.querySelector('body');
var themeColor = document.querySelectorAll('.theme');
var footer = document.querySelector('footer');

btnSwitchTheme.addEventListener('click', () => {
    if (btnToLight.classList.contains('active')) {
        btnToLight.classList.remove('active');
        btnToDark.classList.add('active');
        body.style.background = '#FFFCF5';
        body.style.transition = '1s';
        footer.style.background = 'rgb(211, 144, 42, 0.2)';
        themeColor.forEach(item => {
            item.style.color = '#0C0B05';
        })
    }
    else if (btnToDark.classList.contains('active')) {
        btnToLight.classList.add('active');
        btnToDark.classList.remove('active');
        body.style.background = '#0C0B05';
        body.style.transition = '1s';
        footer.style.background = 'rgb(255, 252, 245, 0.2)';
        themeColor.forEach(item => {
            item.style.color = '#FFFCF5';
        })
    }
})