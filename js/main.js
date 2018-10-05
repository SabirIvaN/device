var linkMap = document.querySelector('#main__contacts-us-map');
var formMap = document.querySelector('#modal-window-map');
var closeMap = document.querySelector('#modal-window-map-close');

linkMap.addEventListener('click', function() {
	event.preventDefault();
	formMap.classList.add('modal-window-map-show');
});

closeMap.addEventListener('click', function() {
	formMap.classList.remove('modal-window-map-show');
});

var linkWrite = document.querySelector('#main__contacts-us-button');
var formWrite = document.querySelector('#modal-window-write');
var closeWrite = document.querySelector('#modal-window-write-close');

linkWrite.addEventListener('click', function() {
	event.preventDefault();
	formWrite.classList.add('modal-window-write-show');
})

closeWrite.addEventListener('click', function() {
	formWrite.classList.remove('modal-window-write-show');
})