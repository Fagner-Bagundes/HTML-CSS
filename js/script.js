const slider = document.querySelectorAll('.desafio-f');
const btnVoltar = document.querySelector('.btn-voltar');
const btnAvancar = document.querySelector('.btn-avancar');

let currentSlide = 0;

function hideSlider() {
    slider.forEach(item = item.classList.remove('on'))
};

function showSlider() {
    slider[currentSlide].classList.add('on')
}

function avancarSlide(){
    
}

btnAvancar.addEventListener(`click`, () => console.log(`Clicado`))

btnVoltar.addEventListener(`click`, () => console.log(`Clicado`))