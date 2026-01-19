/* Nutrition Popup
   ========================================================================== */

function initNutritionPopup() {
    const popup = document.getElementById('nutrition-popup');
    const trigger = document.getElementById('nutrition-popup-trigger');
    const closeBtn = document.getElementById('nutrition-popup-close');
    const ctaBtn = popup ? popup.querySelector('.main_product-btn') : null;

    if (!popup || !trigger) return;

    // Open popup
    trigger.addEventListener('click', function (e) {
        e.preventDefault();
        popup.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });

    // Close popup
    const closePopup = () => {
        popup.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    };

    // Close button (image)
    if (closeBtn) {
        closeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            closePopup();
        });
    }

    // Close when clicking CTA button
    if (ctaBtn) {
        ctaBtn.addEventListener('click', function() {
            closePopup();
        });
    }

    // Close when clicking overlay
    popup.addEventListener('click', function (e) {
        if (e.target === popup) {
            closePopup();
        }
    });

    // Close with ESC key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && popup.classList.contains('active')) {
            closePopup();
        }
    });
}