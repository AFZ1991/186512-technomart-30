/* Модальное окно корзины */
const addLinks = document.querySelectorAll(".buy-button");
const addPopup = document.querySelector(".modal-add");
const addClose = addPopup.querySelector(".modal-close");
const addNextBuy = addPopup.querySelector(".m-button-add");

for(var i = 0; i < addLinks.length; i++){
	addLinks[i].addEventListener("click", function(evt){
	evt.preventDefault();
	addPopup.classList.add("show");
	document.body.style.overflow = 'hidden';
	});
}

addClose.addEventListener("click", function(evt){
	evt.preventDefault();
	document.body.style.overflow = '';
	addPopup.classList.remove("show");
	addPopup.classList.remove("error");
});


addNextBuy.addEventListener("click", function(evt){
	evt.preventDefault();
	document.body.style.overflow = '';
	addPopup.classList.remove("show");
	addPopup.classList.remove("error");
});


window.addEventListener("keydown", function(evt){
	if(evt.which === 27){
		if(addPopup.classList.contains("show")){
			evt.preventDefault();
			document.body.style.overflow = '';
			addPopup.classList.remove("show");
			addPopup.classList.remove("error");
		}
	}
});