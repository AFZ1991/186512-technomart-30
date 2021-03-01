/* Скрипт переключения вкладов в JS */
const buttonDelivery = document.querySelector(".delivery-button");
const buttonGuarantee = document.querySelector(".guarantee-button");
const buttonCredit = document.querySelector(".credit-button");
const buttonsServices = document.querySelectorAll(".services-menu-button");

const delivery = document.querySelector(".delivery");
const guarantee = document.querySelector(".guarantee");
const credit = document.querySelector(".credit");
const services = document.querySelectorAll(".services-item");


buttonDelivery.addEventListener("click", function(evt){
	evt.preventDefault();
	for(var i = 0; i < buttonsServices.length; i++){
		buttonsServices[i].classList.remove("services-active");
		services[i].classList.remove("services-current");
	}

	buttonDelivery.classList.add("services-active");
	delivery.classList.add("services-current");
});

buttonGuarantee.addEventListener("click", function(evt){
	evt.preventDefault();
	for(var i = 0; i < buttonsServices.length; i++){
		buttonsServices[i].classList.remove("services-active");
		services[i].classList.remove("services-current");
	}

	buttonGuarantee.classList.add("services-active");
	guarantee.classList.add("services-current");
});

buttonCredit.addEventListener("click", function(evt){
	evt.preventDefault();
	for(var i = 0; i < buttonsServices.length; i++){
		buttonsServices[i].classList.remove("services-active");
		services[i].classList.remove("services-current");
	}

	buttonCredit.classList.add("services-active");
	credit.classList.add("services-current");
});