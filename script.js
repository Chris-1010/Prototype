let optionsButton = document.querySelector('img.options');
let navMenu = document.querySelector('nav > section:first-of-type');
let skipLink = document.querySelector('#skiplink');
let logo = document.querySelector('a.logo');
let banner = document.querySelector('#banner');
let accessibility = false;

optionsButton.addEventListener('click', function() {
    if (!accessibility) this.classList.toggle('active');
}, false);

navMenu.addEventListener('click', function() {
    this.classList.toggle('active');
}, false);

skipLink.addEventListener('onfocus', function() {
    optionsButton.classList.add('active');
    accessibility = true;
});

skipLink.addEventListener('focusin', enableAccessibility);
logo.addEventListener('focusin', enableAccessibility);

function enableAccessibility() {
    optionsButton.classList.add('active');
    banner.classList.add('accessibility');
    accessibility = true;
};

