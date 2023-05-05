const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrow_right = document.querySelector(".arrow_right")
const arrow_left = document.querySelector(".arrow_left")
const dots = document.querySelectorAll(".dot");
const dot_selected = document.querySelector(".dot_selected");
const banner_img = document.querySelector(".banner-img");


let div = document.getElementById("banner")
let paragraph = div.querySelector("p")


let currentIndex = 0;

function showSlide() {
    banner_img.src = slides[currentIndex].image; 
}

function changeDot() {
	dot_selected.classList.remove('dot_selected');
	const currentDot  = dots[currentIndex];
	currentDot.classList.add('dot_selected');
	const prevIndex = (currentIndex - 1 + dots.length) % dots.length;
	dots[prevIndex].classList.remove('dot_selected');
}

function changeDotRetour () {
	dot_selected.classList.remove('dot_selected'); // pour le dot_selected par défaut
	currentIndex = (currentIndex - 1 + slides.length) % slides.length; 
	prevDot = dots[currentIndex];
	prevDot.classList.add('dot_selected');
	dotBefore = dots[currentIndex + 1];
	dotBefore.classList.remove('dot_selected');
}

function changeText() {
	paragraph.innerHTML = slides[currentIndex].tagLine;
}

arrow_right.addEventListener("click", function() {
	currentIndex = (currentIndex + 1) % slides.length;
    showSlide();
	changeDot();
	changeText();
})


arrow_left.addEventListener("click", function() {
	 
    showSlide(); 
	changeText();
	changeDotRetour();
})

