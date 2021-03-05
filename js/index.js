/* Модальное окно обратной связи */
const feedbackLink = document.querySelector(".feedback-link");
const feedbackPopup = document.querySelector(".modal-feedback");
const feedbackWindow = feedbackPopup.querySelector(".modal");
const feedbackClose = feedbackPopup.querySelector(".modal-close");
const feedbackForm = feedbackPopup.querySelector(".feedback-form");
const feedbackName = feedbackPopup.querySelector(".feed-name");
const feedbackPassword = feedbackPopup.querySelector(".feed-pass");
const feedbackMessage = feedbackPopup.querySelector(".feed-mess");


/* Проверка на заполненность локального хранилища */
let isStorageSupport = true;
let storage = "";

try{
	storage = localStorage.getItem("name");
} catch(err){
	isStorageSupport = false;
}

/* Открытие модального окна обратной связи */
feedbackLink.addEventListener("click", function(evt){
	evt.preventDefault();
	feedbackPopup.classList.add("show");
	document.body.style.overflow = 'hidden';
	document.body.style.marginRight = 16 + 'px';

	if (storage){
		feedbackName.value = storage;
		feedbackPassword.focus();
	} else {
		feedbackName.focus();
	}
});

/* Закрытие модального окна обратной связи по нажантию на крестик */
feedbackClose.addEventListener("click", function(evt){
	evt.preventDefault();
	document.body.style.overflow = '';
	document.body.style.marginRight = 0;
	feedbackPopup.classList.remove("show");
	feedbackPopup.classList.remove("error");
});

/* Проверка формы обратной связи по событию отправки */
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

/* Закрытие модального окна обратной связи по нажатию "Esc" */
window.addEventListener("keydown", function(evt){
	if(evt.which === 27){
		if(feedbackPopup.classList.contains("show")){
			evt.preventDefault();
			document.body.style.overflow = '';
			document.body.style.marginRight = 0;
			feedbackPopup.classList.remove("show");
			feedbackPopup.classList.remove("error");
		}
	}
});



/****************************************************************/


/* Модальное окно карты */
const mapLink = document.querySelector(".contacts-link");
const mapPopup = document.querySelector(".modal-map");
const mapClose = mapPopup.querySelector(".modal-close");

/* Открытие модального окна карты */
mapLink.addEventListener("click", function(evt){
	evt.preventDefault();
	mapPopup.classList.add("show");
	document.body.style.overflow = 'hidden';
	document.body.style.marginRight = 16 + 'px';
});

/* Закрытие модального окна карты по нажатию на крестик */
mapClose.addEventListener("click", function(evt){
	evt.preventDefault();
	document.body.style.overflow = '';
	document.body.style.marginRight = 0;
	mapPopup.classList.remove("show");
	mapPopup.classList.remove("error");
});

/* Закрытие модального окна по нажатию "Esc" */
window.addEventListener("keydown", function(evt){
	if(evt.which === 27){
		if(mapPopup.classList.contains("show")){
			evt.preventDefault();
			document.body.style.overflow = '';
			document.body.style.marginRight = 0;
			mapPopup.classList.remove("show");
			mapPopup.classList.remove("error");
		}
	}
});



/****************************************************************/


/* Модальное окно корзины */
const addLinks = document.querySelectorAll(".buy-button");
const addPopup = document.querySelector(".modal-add");
const addClose = addPopup.querySelector(".modal-close");
const addNextBuy = addPopup.querySelector(".m-button-add");

/* Открытие модального окна корзины */
for(var i = 0; i < addLinks.length; i++){
	addLinks[i].addEventListener("click", function(evt){
	evt.preventDefault();
	addPopup.classList.add("show");
	document.body.style.overflow = 'hidden';
	document.body.style.marginRight = 16 + 'px';
	});
}

/* Закрытие модального окна корзины по нажатию на крестик */
addClose.addEventListener("click", function(evt){
	evt.preventDefault();
	document.body.style.overflow = '';
	document.body.style.marginRight = 0;
	addPopup.classList.remove("show");
	addPopup.classList.remove("error");
});

/* Закрытие модального окна корзины по нажатию на "Продолжить покупки" */
addNextBuy.addEventListener("click", function(evt){
	evt.preventDefault();
	document.body.style.overflow = '';
	document.body.style.marginRight = 0;
	addPopup.classList.remove("show");
	addPopup.classList.remove("error");
});

/* Закрытие модального окна корзины по нажатию на "Esc" */
window.addEventListener("keydown", function(evt){
	if(evt.which === 27){
		if(addPopup.classList.contains("show")){
			evt.preventDefault();
			document.body.style.overflow = '';
			document.body.style.marginRight = 0;
			addPopup.classList.remove("show");
			addPopup.classList.remove("error");
		}
	}
});



/****************************************************************/


/* Оживление слайдера */
const slider = document.querySelector(".slider");
const slides = slider.querySelectorAll(".slide");
const prev = slider.querySelector(".arrow-prev");
const next = slider.querySelector(".arrow-next");
const dots = slider.querySelectorAll(".dot");
const dot1 = slider.querySelector(".dot1");
const dot2 = slider.querySelector(".dot2");
var count = slides.length;

/* Перелистывание слайдов назад по нажатию стрелочки "назад" */
prev.addEventListener("click", function(evt){
	evt.preventDefault();
	for(var i = 0; i < count; i++){
		if(slides[i].classList.contains("slide-active")){
			n = i;
			slides[i].classList.remove("slide-active");
			dots[i].classList.remove("current");
		}
	}

	if(n === 0){
		slides[count - 1].classList.add("slide-active");
		dots[count - 1].classList.add("current");
	} else {
		slides[n-1].classList.add("slide-active");
		dots[n-1].classList.add("current");
	}
});


/* Перелистывание слайдов вперёд по нажатию стрелочки "вперёд" */
next.addEventListener("click", function(evt){
	evt.preventDefault();
	for(var i = 0; i < count; i++){
		if(slides[i].classList.contains("slide-active")){
			n = i;
			slides[i].classList.remove("slide-active");
			dots[i].classList.remove("current");
		}
	}
	if(n === (count - 1)){
		slides[0].classList.add("slide-active");
		dots[0].classList.add("current");
	} else {
		slides[n+1].classList.add("slide-active");
		dots[n+1].classList.add("current");
	}
});


/* Выбор слайда 1 по нажатию на маркер */
dot1.addEventListener("click", function(evt){
	evt.preventDefault();
	for(var i = 0; i < count; i++){
		slides[i].classList.remove("slide-active");
		dots[i].classList.remove("current");
	}
	this.classList.add("current");
	slides[0].classList.add("slide-active");
});

/* Выбор слайда 2 по нажатию на маркер */
dot2.addEventListener("click", function(evt){
	evt.preventDefault();
	for(var i = 0; i < count; i++){
		slides[i].classList.remove("slide-active");
		dots[i].classList.remove("current");
	}
	this.classList.add("current");
	slides[1].classList.add("slide-active");
});



/****************************************************************/


/* Переключение вкладок сервисов */
const buttonDelivery = document.querySelector(".delivery-button");
const buttonGuarantee = document.querySelector(".guarantee-button");
const buttonCredit = document.querySelector(".credit-button");
const buttonsServices = document.querySelectorAll(".services-menu-button");

const delivery = document.querySelector(".delivery");
const guarantee = document.querySelector(".guarantee");
const credit = document.querySelector(".credit");
const services = document.querySelectorAll(".services-item");

/* Выбор вкладки "Доставка" */
buttonDelivery.addEventListener("click", function(evt){
	evt.preventDefault();
	for(var i = 0; i < buttonsServices.length; i++){
		buttonsServices[i].classList.remove("services-active");
		services[i].classList.remove("services-current");
	}

	buttonDelivery.classList.add("services-active");
	delivery.classList.add("services-current");
});

/* Выбор вкладки "Гарантия" */
buttonGuarantee.addEventListener("click", function(evt){
	evt.preventDefault();
	for(var i = 0; i < buttonsServices.length; i++){
		buttonsServices[i].classList.remove("services-active");
		services[i].classList.remove("services-current");
	}

	buttonGuarantee.classList.add("services-active");
	guarantee.classList.add("services-current");
});

/* Выбор вкладки "Кредит" */
buttonCredit.addEventListener("click", function(evt){
	evt.preventDefault();
	for(var i = 0; i < buttonsServices.length; i++){
		buttonsServices[i].classList.remove("services-active");
		services[i].classList.remove("services-current");
	}

	buttonCredit.classList.add("services-active");
	credit.classList.add("services-current");
});



/****************************************************/


/* Добавление товвров в закладки и корзину (инкремент) */
const buyButton = addPopup.querySelector(".m-button-buy");
const topCart = document.querySelector(".cart");
const counterCart = document.querySelector(".cnt-cart");

/* Добавление товар в корзину и инкремент счетчика */
buyButton.addEventListener("click", function(evt){
	evt.preventDefault();
	let countBuy = parseInt(counterCart.textContent);
	countBuy++;
	counterCart.textContent = '';
	counterCart.textContent = countBuy;

	/* Покраснение корзины при наличии */
	if(counterCart.textContent > 0){
		topCart.classList.add("red-back");
	} else {
		topCart.classList.remove("red-back");
	}
});




/* Добавление товар в закладки и инкремент счетчика */
const bookmarkButtons = document.querySelectorAll(".bookmark-button");
const topBookmark = document.querySelector(".bookmark");
const counterBookmark = document.querySelector(".cnt-bookmark");


/* Открытие модального окна корзины */
for(var i = 0; i < bookmarkButtons.length; i++){
	bookmarkButtons[i].addEventListener("click", function(evt){
		evt.preventDefault();
		let countBook = parseInt(counterBookmark.textContent);
		countBook++;
		counterBookmark.textContent = '';
		counterBookmark.textContent = countBook;

		/* Покраснение закладок при наличии */
		if(counterBookmark.textContent > 0){
			topBookmark.classList.add("red-back");
		} else {
			topBookmark.classList.remove("red-back");
		}
	});
}


/* Сброс счетчиков по кнопке "Оформить заказ" */
const buyTopButton = document.querySelector(".buy-top-button");

buyTopButton.addEventListener("click", function(evt){
	evt.preventDefault();
	counterCart.textContent = '';
	counterCart.textContent = '0';
	counterBookmark.textContent = '';
	counterBookmark.textContent = '0';
	topCart.classList.remove("red-back");
	topBookmark.classList.remove("red-back");
});