const toggleBtnMenu = document.querySelector('.modile__btn')
const dropdownMenu = document.querySelector('.dropdown-menu');

toggleBtnMenu.onclick = function() {
	dropdownMenu.classList.toggle('open')
}

const toggleBtnSearch = document.querySelector('.search-btn')
const searchContent = document.querySelector('.search-content')

toggleBtnSearch.onclick = function() {
	searchContent.classList.toggle('open')
}

const toggleBtnFeaturedLeft = document.querySelector('.featured__btn_left')
const toggleBtnFeaturedRight = document.querySelector('.featured__btn_right')

const featuredLeft = document.querySelector('.featured__cards_left')
const featuredRight = document.querySelector('.featured__cards_right')

toggleBtnFeaturedLeft.onclick = function() {
	featuredRight.classList.toggle('open')
	featuredLeft.classList.toggle('close')
}

toggleBtnFeaturedRight.onclick = function() {
	featuredLeft.classList.remove('close')
	featuredRight.classList.remove('open')
}

const carouselBtn1 = document.querySelector('.carousel__btn_1')
const carouselBtn2 = document.querySelector('.carousel__btn_2')
const carouselBtn3 = document.querySelector('.carousel__btn_3')
const carouselBtn4 = document.querySelector('.carousel__btn_4')

const reviewsCarousel1 = document.querySelector('.reviews__carousel_1')
const reviewsCarousel2 = document.querySelector('.reviews__carousel_2')
const reviewsCarousel3 = document.querySelector('.reviews__carousel_3')
const reviewsCarousel4 = document.querySelector('.reviews__carousel_4')

carouselBtn1.addEventListener('click', function() {
	reviewsCarousel1.setAttribute('data-active', '')
	reviewsCarousel2.removeAttribute('data-active')
	reviewsCarousel3.removeAttribute('data-active')
	reviewsCarousel4.removeAttribute('data-active')

	carouselBtn1.classList.toggle('active')
	carouselBtn2.classList.remove('active')
	carouselBtn3.classList.remove('active')
	carouselBtn4.classList.remove('active')
})

carouselBtn2.addEventListener('click', function() {
	reviewsCarousel1.removeAttribute('data-active')
	reviewsCarousel2.setAttribute('data-active', '')
	reviewsCarousel3.removeAttribute('data-active')
	reviewsCarousel4.removeAttribute('data-active')

	carouselBtn1.classList.remove('active')
	carouselBtn2.classList.toggle('active')
	carouselBtn3.classList.remove('active')
	carouselBtn4.classList.remove('active')
})

carouselBtn3.addEventListener('click', function() {
	reviewsCarousel1.removeAttribute('data-active')
	reviewsCarousel2.removeAttribute('data-active')
	reviewsCarousel3.setAttribute('data-active', '')
	reviewsCarousel4.removeAttribute('data-active')

	carouselBtn1.classList.remove('active')
	carouselBtn2.classList.remove('active')
	carouselBtn3.classList.toggle('active')
	carouselBtn4.classList.remove('active')
})

carouselBtn4.addEventListener('click', function() {
	reviewsCarousel1.removeAttribute('data-active')
	reviewsCarousel2.removeAttribute('data-active')
	reviewsCarousel3.removeAttribute('data-active')
	reviewsCarousel4.setAttribute('data-active', '');

	carouselBtn1.classList.remove('active')
	carouselBtn2.classList.remove('active')
	carouselBtn3.classList.remove('active')
	carouselBtn4.classList.toggle('active')
})



