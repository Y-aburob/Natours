

const button = document.getElementById('button');

const mainOrangeCard = document.getElementById('bg-orange')
const orangeCard = document.getElementById('orange-card')

const mainGreenCard = document.getElementById('bg-green')
const greenCard = document.getElementById('green-card')

const mainBlueCard = document.getElementById('bg-blue')
const blueCard = document.getElementById('blue-card')

const cardContent = document.getElementById('card_content')

const navButton = document.getElementById('nav-button')
const navSection = document.getElementById('nav-section')

const nav = document.getElementById('nav')
const svg = document.getElementById('svg')
const svgCross = document.getElementById('svg-cross')



navButton.addEventListener('click', () => {


    navSection.classList.toggle('scroll-to-bottom');
    nav.classList.toggle('jumping-animation');

    if (svgCross.style.display == 'none') {
        // svg.classList.toggle('lnr-cross');
        // svg.classList.toggle('svg-hover');
        // use.setAttribute('xlink:href', '#lnr-cross');
        alert('yes')
        svgCross.classList.toggle('nav-cross');
        svg.classList.toggle('nav-cross');

    }
    else {
        // svg.classList.toggle('lnr-menu');
        svg.classList.toggle('svg-hover');
        // // use.removeAttribute('xlink:href');
        // use.setAttribute('xlink:href', '#lnr-menu');
    }
})


mainOrangeCard.addEventListener('click', function() {

    mainOrangeCard.classList.toggle('flip')
})

mainGreenCard.addEventListener('click', function() {

    mainGreenCard.classList.toggle('flip')

})


mainBlueCard.addEventListener('click', function() {

    mainBlueCard.classList.toggle('flip')
})