const buttons = document.querySelectorAll('[data-carousel-button]');
const indicator = document.querySelectorAll('[data-carousel-button-index]');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        const slides = button.closest('[data-carousel]').querySelector('[data-slides]');

        const activeSlide = slides.querySelector('[data-active]');
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;

        if(newIndex < 0) newIndex = slides.children.length - 1;
        if(newIndex >= slides.children.length) newIndex = 0;

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;

    });
});

indicator.forEach(button => {
    button.addEventListener('click', () => {
        const newSlide = button.dataset.carouselButtonIndex;
        const slides = document.querySelector('[data-slides]');
        
        const activeSlide = slides.querySelector('[data-active]');
        const prevSlide = [...slides.children].indexOf(activeSlide);

        try{
            slides.children[newSlide].dataset.active = true;
            if(newSlide != Number(prevSlide)) delete activeSlide.dataset.active;
            else throw new Error(String(prevSlide))
        }catch(e) {
            console.log(e.message)
            slides.children[e.message].dataset.active = true;
        }
    })
})
