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

function initNavegaMenu() {
    const navHamburguer = document.querySelector('.nav-hamburguer');
    const hamburguer = document.querySelector('.hamburguer');
    const itemMenu = document.querySelectorAll('.nav-hamburguer a')
    
    function atualizarMenu() {
        navHamburguer.classList.toggle('mostrarNav');
        hamburguer.classList.toggle('ativo');
    }
    
    itemMenu.forEach(item => {
        item.onclick = atualizarMenu;
    })

    hamburguer.onclick = atualizarMenu;
}
initNavegaMenu();

// SLIDES DEPOIMENTOS
let slideIndex = 1;
if(window.innerWidth > 320 && window.innerWidth < 1000) {
    showSlides(slideIndex);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.querySelectorAll('.depoimento');

    if (n > slides.length) slideIndex = 1
    if (n < 1) slideIndex = slides.length

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slides[slideIndex-1].style.display = 'flex';
}
