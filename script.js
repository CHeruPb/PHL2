document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const navbar = document.querySelector('.navbar');
    const body = document.body;

    burgerMenu.addEventListener('click', function() {
        navbar.classList.toggle('active');
        burgerMenu.classList.toggle('active');
        body.classList.toggle('menu-open');
    });

    // Закрытие меню при клике вне его
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navbar.contains(event.target);
        const isClickOnBurger = burgerMenu.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnBurger && navbar.classList.contains('active')) {
            navbar.classList.remove('active');
            burgerMenu.classList.remove('active');
            body.classList.remove('menu-open');
        }
    });

    // Закрытие меню при клике на ссылку
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navbar.classList.remove('active');
            burgerMenu.classList.remove('active');
            body.classList.remove('menu-open');
        });
    });

    // Закрытие меню при изменении размера окна (когда переходим на десктопную версию)
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            const isDesktop = window.innerWidth > 850;
            const burgerVisible = burgerMenu.offsetParent !== null;
            
            // Если экран стал большим (десктоп) и меню было открыто, закрываем его
            if (isDesktop || !burgerVisible) {
                navbar.classList.remove('active');
                burgerMenu.classList.remove('active');
                body.classList.remove('menu-open');
            }
        }, 100);
    });
});

