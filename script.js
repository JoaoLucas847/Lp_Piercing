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
let slideDepoimentosIdx = 0;

function showSlidesDepoimentos() {
    let i;
    let slides = document.getElementsByClassName("group-carousel-depoimentos");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideDepoimentosIdx++;

    if (slideDepoimentosIdx > slides.length) {slideDepoimentosIdx = 1}

    slides[slideDepoimentosIdx-1].style.display = "grid";  
    setTimeout(showSlidesDepoimentos, 3000);
}
showSlidesDepoimentos();

// SLIDES JOIAS
let slideJoiasIdx = 0;

function showSlidesJoias() {
    let i;
    let slides = document.getElementsByClassName("group-carousel-joia");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideJoiasIdx++;

    if (slideJoiasIdx > slides.length) {slideJoiasIdx = 1}

    slides[slideJoiasIdx-1].style.display = "grid";  
    setTimeout(showSlidesJoias, 3000);
}
showSlidesJoias();

// SLIDES APLICAÇÕES
let slideAplicacaoIdx = 0;

function showSlidesAplicacao() {
    let i;
    let slides = document.getElementsByClassName("group-carousel-aplicacao");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideAplicacaoIdx++;

    if (slideAplicacaoIdx > slides.length) {slideAplicacaoIdx = 1}

    slides[slideAplicacaoIdx-1].style.display = "grid";  
    setTimeout(showSlidesAplicacao, 3000);
}
showSlidesAplicacao();

// SLIDES PERFURAÇÃO - HEADER
let slidePerfuracaoIdx = 0;

function showSlidesPerfuracao() {
    let i;
    let slides = document.querySelectorAll(".img-home-item");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slidePerfuracaoIdx++;

    if (slidePerfuracaoIdx > slides.length) {slidePerfuracaoIdx = 1}

    slides[slidePerfuracaoIdx-1].style.display = "block";  
    setTimeout(showSlidesPerfuracao, 3000);
}
showSlidesPerfuracao();