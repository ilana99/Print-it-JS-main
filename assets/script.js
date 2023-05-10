const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrow_right = document.querySelector(".arrow_right")
const arrow_left = document.querySelector(".arrow_left")
const dots = document.querySelector(".dots");
const banner_img = document.querySelector(".banner-img");


let div = document.getElementById("banner")
let paragraph = div.querySelector("p")

var dotArray = [];
var dot_selected;

function addDot() {
	for (var i = 0; i < slides.length; i++) {
		var dot = document.createElement("p");
		dots.appendChild(dot);
		dot.classList.add("dot");
		dotArray.push(dot);
	};
}

addDot();

var dot_selected = dotArray[0];
dot_selected.classList.add("dot_selected");
let currentIndex = dotArray.indexOf(dot_selected);

function changeDot(isNext) {
	const increment = isNext ? 1 : -1;
	dot_selected.classList.remove("dot_selected");
	currentIndex += increment;
	if (currentIndex === slides.length) {
		currentIndex = 0;
	} else if (currentIndex < 0) {
		currentIndex =  slides.length - 1;
	}
	dot_selected = dotArray[currentIndex];
	dot_selected.classList.add("dot_selected");
}

function showSlide() {
	banner_img.src = "assets/images/slideshow/" + slides[currentIndex].image;
}

function changeText() {
	paragraph.innerHTML = slides[currentIndex].tagLine;
}

arrow_right.addEventListener("click", function () {
	changeDot(true);
	showSlide();
	changeText();
})


arrow_left.addEventListener("click", function () {
	changeDot(false)
	showSlide();
	changeText();

})

