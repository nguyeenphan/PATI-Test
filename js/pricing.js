/* Pricing & Bundle Selection
   ========================================================================== */

// Update bundle option visual states based on selection
const updateBundleStates = () => {
    const pricingOptions = document.querySelectorAll('input[name="bundle"]');

    pricingOptions.forEach(radio => {
        const label = radio.closest('label');
        const allDivs = label.querySelectorAll('div');
        const shippingDivs = Array.from(allDivs).filter(div => {
            return div.classList.contains('bg-[#039869]');
        });

        // Adjust opacity based on checked state
        const opacity = radio.checked ? '1' : '0.6';
        shippingDivs.forEach(div => {
            div.style.opacity = opacity;
            div.style.transition = 'opacity 0.3s ease';
        });
    });
};

const initPricingOptions = () => {
    const pricingOptions = document.querySelectorAll('input[name="bundle"]');

    pricingOptions.forEach(radio => {
        const label = radio.closest('label');

        label.addEventListener('click', function () {
            radio.checked = true;
            updateBundleStates();
        });

        radio.addEventListener('change', updateBundleStates);
    });

    updateBundleStates();
};


/* Add to Cart Button
   ========================================================================== */

const initAddToCart = () => {
    const addToCartBtn = document.querySelector('.bg-sculptique-green');

    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function () {
            const originalText = this.textContent;
            this.textContent = '✓ ADDED TO CART!';
            this.classList.add('bg-green-700');

            setTimeout(() => {
                this.textContent = originalText;
                this.classList.remove('bg-green-700');
            }, 2000);
        });
    }
};
