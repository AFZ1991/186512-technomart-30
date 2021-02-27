/* Модальное окно обратной связи */
const feedbackLink = document.querySelector(".feedback-link");
const feedbackPopup = document.querySelector(".modal-feedback");
const feedbackWindow = feedbackPopup.querySelector(".modal");
const feedbackClose = feedbackPopup.querySelector(".modal-close");
const feedbackForm = feedbackPopup.querySelector(".feedback-form");
const feedbackName = feedbackPopup.querySelector(".feed-name");
const feedbackPassword = feedbackPopup.querySelector(".feed-pass");
const feedbackMessage = feedbackPopup.querySelector(".feed-mess");

let isStorageSupport = true;
let storage = "";

try{
	storage = localStorage.getItem("name");
} catch(err){
	isStorageSupport = false;
}

feedbackLink.addEventListener("click", function(evt){
	evt.preventDefault();
	feedbackPopup.classList.add("show");

	if (storage){
		feedbackName.value = storage;
		feedbackPassword.focus();
	} else {
		feedbackName.focus();
	}
});

feedbackClose.addEventListener("click", function(evt){
	evt.preventDefault();
	feedbackPopup.classList.remove("show");
	feedbackPopup.classList.remove("error");
});

feedbackForm.addEventListener("submit", function(evt){
	if(!feedbackName.value || !feedbackPassword.value || !feedbackMessage.value){
		evt.preventDefault();
		feedbackWindow.classList.remove("error");
		feedbackWindow.offsetWidth = feedbackWindow.offsetWidth;
		feedbackWindow.classList.add("error");
	} else {
		if (isStorageSupport){
			localStorage.setItem("name", feedbackName.value);
			localStorage.setItem("password", feedbackPassword.value);
			localStorage.setItem("message", feedbackMessage.value);
		}
	}
});


window.addEventListener("keydown", function(evt){
	if(evt.which === 27){
		if(feedbackPopup.classList.contains("show")){
			evt.preventDefault();
			feedbackPopup.classList.remove("show");
			feedbackPopup.classList.remove("error");
		}
	}
});




/* Модальное окно карты */
const mapLink = document.querySelector(".contacts-link");
const mapPopup = document.querySelector(".modal-map");
const mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function(evt){
	evt.preventDefault();
	mapPopup.classList.add("show");
});

mapClose.addEventListener("click", function(evt){
	evt.preventDefault();
	mapPopup.classList.remove("show");
	mapPopup.classList.remove("error");
});

window.addEventListener("keydown", function(evt){
	if(evt.which === 27){
		if(mapPopup.classList.contains("show")){
			evt.preventDefault();
			mapPopup.classList.remove("show");
			mapPopup.classList.remove("error");
		}
	}
});




/* Модальное окно корзины */
const addLink = document.querySelector(".buy-button");
const addPopup = document.querySelector(".modal-add");
const addClose = addPopup.querySelector(".modal-close");

addLink.addEventListener("click", function(evt){
	evt.preventDefault();
	addPopup.classList.add("show");
});

addClose.addEventListener("click", function(evt){
	evt.preventDefault();
	addPopup.classList.remove("show");
	addPopup.classList.remove("error");
});

window.addEventListener("keydown", function(evt){
	if(evt.which === 27){
		if(addPopup.classList.contains("show")){
			evt.preventDefault();
			addPopup.classList.remove("show");
			addPopup.classList.remove("error");
		}
	}
});