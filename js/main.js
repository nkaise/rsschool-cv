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



