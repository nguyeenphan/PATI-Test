/* Main Initializer
   ========================================================================== */

/* Mobile Menu
   ========================================================================== */

const initMobileMenu = () => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function () {
            alert('Mobile menu coming soon!');
        });
    }
};


/* Initialize All Features
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
    initProductGallery();
    initPricingOptions();
    initAddToCart();
    initIngredientsAccordion();
    initFAQAccordion();
    initIngredientItems();
    initMobileMenu();
    initSmoothScroll();
    initScrollAnimations();
    initVideoCarouselScroll();
    initSlickCarousels();
    initVideoControls();
});
