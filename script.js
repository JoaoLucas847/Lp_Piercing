function initScrollSuave() {
    const linksIternos = document.querySelectorAll('.js-menu a[href^="#"]');
    
    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
    
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
    
    linksIternos.forEach(link => {
        link.addEventListener('click', scrollToSection);
    })

}
initScrollSuave();

function initAnimacaoScroll() {
    const sections = document.querySelectorAll('.js-scroll');
    
    if(sections.length) {
        const windowMetade = window.innerHeight * 0.8;
        
        function animaScroll() {
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowMetade) < 0;
        
                if(isSectionVisible) {
                    section.classList.add('ativo');
                }
        
            })
        }
        
        animaScroll();
        
        window.addEventListener('scroll', animaScroll);
    
    }

}
initAnimacaoScroll();

function initAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt');
    const activeClass = 'ativo';

    if(accordionList.length) {
        accordionList[0].classList.add(activeClass);
        accordionList[0].nextElementSibling.classList.add(activeClass);
        
        function activeAccordion() {
            accordionList.forEach(item => {
                item.classList.remove(activeClass);
                item.nextElementSibling.classList.remove(activeClass);
            });

            this.classList.add(activeClass);
            this.nextElementSibling.classList.add(activeClass);
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion)
        })
        
    } 

}
initAccordion();

const navHamburguer = document.querySelector('.nav-hamburguer');
const Hamburguer = document.querySelector('.hamburguer');

const atualizarMenu = function(){
    navHamburguer.classList.toggle('mostrarNav');
    Hamburguer.classList.toggle('ativo');
}

Hamburguer.onclick = atualizarMenu;