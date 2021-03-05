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



/***************************************************************/


/* Интерактивность меню сортировки */
const sortingButtons = document.querySelectorAll(".sorting-button");

for(var i = 0; i < sortingButtons.length; i++){
	sortingButtons[i].addEventListener("click", function(evt){
		evt.preventDefault();
		for(var j = 0; j < sortingButtons.length; j++)
			sortingButtons[j].classList.remove("active");

		this.classList.add("active");
	});
}


/* Интерактивность пагинации */
const paginations = document.querySelectorAll(".pagination-link");

for(var i = 0; i < paginations.length; i++){
	paginations[i].addEventListener("click", function(evt){
		evt.preventDefault();
		for(var j = 0; j < paginations.length; j++)
			paginations[j].classList.remove("current");

		this.classList.add("current");
	});
}



/***************************************************************/


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