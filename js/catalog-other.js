/* Интерактивность страницы каталога */
const sortingButtons = document.querySelectorAll(".sorting-button");

for(var i = 0; i < sortingButtons.length; i++){
	sortingButtons[i].addEventListener("click", function(evt){
		evt.preventDefault();
		for(var j = 0; j < sortingButtons.length; j++)
			sortingButtons[j].classList.remove("active");

		this.classList.add("active");
	});
}





const paginations = document.querySelectorAll(".pagination-link");

for(var i = 0; i < paginations.length; i++){
	paginations[i].addEventListener("click", function(evt){
		evt.preventDefault();
		for(var j = 0; j < paginations.length; j++)
			paginations[j].classList.remove("current");

		this.classList.add("current");
	});
}