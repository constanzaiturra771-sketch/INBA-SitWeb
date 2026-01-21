document.addEventListener("DOMContentLoaded", () => {

    /* MENÚ DESPLEGABLE */
    const botonesServicios = document.querySelectorAll(".btn-servicios");

    botonesServicios.forEach(boton => {
        const submenu = boton.nextElementSibling;

        boton.addEventListener("click", (e) => {
            e.preventDefault();

            document.querySelectorAll(".submenu.activo").forEach(menu => {
                if (menu !== submenu) {
                    menu.classList.remove("activo");
                }
            });

            submenu.classList.toggle("activo");
        });
    });

    document.addEventListener("click", (e) => {
        botonesServicios.forEach(boton => {
            const submenu = boton.nextElementSibling;

            if (!boton.contains(e.target) && !submenu.contains(e.target)) {
                submenu.classList.remove("activo");
            }
        });
    });

    /* CARRUSEL HERO (PORTADA) */
    const slidesHero = document.querySelectorAll('.slide');
    const btnNextHero = document.querySelector('.control.next');
    const btnPrevHero = document.querySelector('.control.prev');

    let indexHero = 0;

    function mostrarHero(n) {
        slidesHero.forEach(slide => slide.classList.remove('activo'));
        slidesHero[n].classList.add('activo');
    }

    if (slidesHero.length > 0 && btnNextHero && btnPrevHero) {
        mostrarHero(indexHero);

        btnNextHero.addEventListener('click', () => {
            indexHero = (indexHero + 1) % slidesHero.length;
            mostrarHero(indexHero);
        });

        btnPrevHero.addEventListener('click', () => {
            indexHero = (indexHero - 1 + slidesHero.length) % slidesHero.length;
            mostrarHero(indexHero);
        });

        setInterval(() => {
            indexHero = (indexHero + 1) % slidesHero.length;
            mostrarHero(indexHero);
        }, 6000);
    }

    /* CARRUSEL HISTORIA */
    const carouselHistoria = document.querySelector('.carousel-historia');
    if (!carouselHistoria) return;

    const slidesHistoria = carouselHistoria.querySelectorAll('.carousel-slide');
    const btnPrevHistoria = carouselHistoria.querySelector('.prev');
    const btnNextHistoria = carouselHistoria.querySelector('.next');

    let indexHistoria = 0;

    function mostrarHistoria(n) {
        slidesHistoria.forEach(slide => slide.classList.remove('activo'));
        slidesHistoria[n].classList.add('activo');
    }

    mostrarHistoria(indexHistoria);

    btnNextHistoria.addEventListener('click', () => {
        indexHistoria = (indexHistoria + 1) % slidesHistoria.length;
        mostrarHistoria(indexHistoria);
    });

    btnPrevHistoria.addEventListener('click', () => {
        indexHistoria = (indexHistoria - 1 + slidesHistoria.length) % slidesHistoria.length;
        mostrarHistoria(indexHistoria);
    });

    setInterval(() => {
        indexHistoria = (indexHistoria + 1) % slidesHistoria.length;
        mostrarHistoria(indexHistoria);
    }, 6000);

});
