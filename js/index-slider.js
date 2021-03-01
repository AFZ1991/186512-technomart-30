/* Оживление слайдера */
const slider = document.querySelector(".slider");
const slides = slider.querySelectorAll(".slide");

const prev = slider.querySelector(".arrow-prev");
const next = slider.querySelector(".arrow-next");

const dots = slider.querySelectorAll(".dot");

var count = slides.length;


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



for(var i = 0; i < count; i++){
	dots[i].addEventListener("click", function(evt){
	evt.preventDefault();
	var m = 0;

	for(var j = 0; j < count; j++){
		if(slides[j].classList.contains("slide-active")){
			m = j;
		}
		slides[j].classList.remove("slide-active");
		dots[j].classList.remove("current");
	}

	this.classList.add("current");
	if (m === 1)
		slides[0].classList.add("slide-active");
	else
		slides[1].classList.add("slide-active");
	});
}