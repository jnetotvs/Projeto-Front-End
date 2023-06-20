const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animete';

function animeScroll() {
const windowTop = window.pageYOffset + 184;
    target.forEach(function(element){
        if((windowTop) > element.offsetTop){
            element.classList.add(animationClass);
        }else{
            element.classList.remove(animationClass);
        }

    })
}

window.addEventListener('scroll', function(){
    animeScroll();
});