/* Product Gallery - Thumbnail Switching
   ========================================================================== */

// Switch main image when clicking thumbnails
const initProductGallery = () => {
    const thumbnails = document.querySelectorAll('.thumbnail-item');
    const mainImage = document.getElementById('main-image');

    thumbnails.forEach((thumb) => {
        thumb.addEventListener('click', function () {
            thumbnails.forEach(t => t.classList.remove('border-sculptique-green'));
            this.classList.add('border-sculptique-green');
            const thumbImg = this.querySelector('img');
            mainImage.src = thumbImg.src;
        });
    });
};
