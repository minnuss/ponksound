// VARIABLES

// nav-variables
const navContainer = document.querySelector('.nav-container');
const btn = document.querySelector('.hamb-btn');
const hambLine = document.querySelectorAll('.hambline');
const navList = document.querySelector('.nav-list');
const listLink = document.querySelectorAll('.list-link');
// container hero variables
const containerHero = document.querySelector('.container-hero');
// media animation
const mediaCircle = document.querySelectorAll('.media-circle');
// Back to top arrow
const arrowUp = document.querySelector('.arrowUp');


// HAMBURGER MENU CODE

btn.addEventListener('click', () => {

    // transforming hamb button to X button
    for (let line of hambLine) {
        line.classList.toggle('change');
    }

    // opening nav list for links
    navList.classList.toggle('change');

    // close link list when clicked on link list
    navContainer.addEventListener('click', (e) => {
        // console.log(e.target)
        if (e.target.classList == "nav-ul") {
            for (let line of hambLine) {
                line.classList.remove('change');
            }
            navList.classList.remove('change');
        }
    })

    // close link list when clicked on any link in link list
    listLink.forEach(link => link.addEventListener('click', (e) => {
        if (navList.classList.value.includes('change')) {
            navList.classList.remove('change');
            for (let line of hambLine) {
                line.classList.remove('change');
            }
            // btn.click();
        }
    }))

    // close link list when clicked on body
    containerHero.addEventListener('click', () => {
        navList.classList.remove('change');
        for (let line of hambLine) {
            line.classList.remove('change');
        }
    })

});

/* CONTAINER HERO LANDING PAGE AUTO TYPING TEXT*/

var typed = new Typed('.type', {
    // Waits 1000ms after typing "First"
    strings: ['Recording', 'Editing', 'Mastering', 'Arranging', 'Beatmaking', 'Podcast editing'],
    typeSpeed: 100,
    backSpeed: 70,
    loop: true,
    startDelay: 2000,
});

setTimeout(Typed, 2000);

/*****************MEDIA ICONS ON HOVER*************** */

const mediaAnim = document.querySelector('.animate__animated .animate__heartBeat');

mediaCircle.forEach(circle => {
    circle.addEventListener('mouseenter', () => {
        circle.classList.toggle('animate__heartBeat');

        setTimeout(
            circle.addEventListener('mouseout', () => {
                circle.classList.remove('animate__heartBeat');
            })
            , 500)
    });
});

/*****************SHOW BACK TO TOP ARROW ON SCROLL*************** */

window.onscroll = function () {
    if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
        arrowUp.classList.add('arrowShow');
    } else {
        arrowUp.classList.remove('arrowShow');
    }
};



