// JavaScript Document

var openFormLink = document.querySelector('#modal-map-link');
var modal = document.querySelector('#modal-window-map');
var closingCross = document.querySelector('#modal-window-map-close');

openFormLink.addEventListener('click', function() {
   modal.classList.add('form-block');
});

closingCross.addEventListener('click', function() {
    contactForm.classList.add('form-block');
});