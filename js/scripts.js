var link = document.querySelector(".login-link");
var popUpLogin = document.querySelector(".modal-login");
var close = popUpLogin.querySelector(".modal-close");
var login = document.querySelector("input[name=login]");
var form = popUpLogin.querySelector("form");
var password = popUpLogin.querySelector("input[name=password");
var storage = localStorage.getItem("login");
var storagePas = localStorage.getItem("password");
var buttonMap = document.querySelector(".button-map");
var map = document.querySelector(".modal-map");
var closeMap = map.querySelector(".modal-close");
link.addEventListener("click", function(evt){
	evt.preventDefault();
	popUpLogin.classList.add("modal-show");
	if (storage){
		login.value = storage;
		password.value = storagePas;
	}
	else {
		login.focus()
	}
});
close.addEventListener("click", function(evt){
	evt.preventDefault();
	popUpLogin.classList.remove("modal-show");
	popUpLogin.classList.remove("modal-error");
});
closeMap.addEventListener("click", function(evt){
	evt.preventDefault();
	map.classList.remove("modal-show");
});
form.addEventListener("submit", function(evt){
	evt.preventDefault();
	if (!login.value||!password.value) {
		popUpLogin.classList.add("modal-error");
	}
	else {
		localStorage.setItem("login", login.value);
		localStorage.setItem("password", password.value);
	}
});
window.addEventListener("keydown", function(evt){
	if (evt.keyCode === 27) {
			popUpLogin.classList.remove("modal-show");
			popUpLogin.classList.remove("modal-error");
			map.classList.remove("modal-show");
	}
});
buttonMap.addEventListener("click", function(evt){
	evt.preventDefault();
	map.classList.add("modal-show");
});

$(document).ready(function(){
	$(".slider").slick(
		{
			arrows:true, 
			autoplay:true,
			dots:true
		});
});


