/* Video Carousel - Manual Scroll
   ========================================================================== */

const initVideoCarouselScroll = () => {
    const videoCarousel = document.getElementById('videoCarousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (videoCarousel && prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            videoCarousel.scrollBy({
                left: -300,
                behavior: 'smooth'
            });
        });

        nextBtn.addEventListener('click', () => {
            videoCarousel.scrollBy({
                left: 300,
                behavior: 'smooth'
            });
        });
    }
};


/* Slick Carousel - Video Slider
   ========================================================================== */

const initSlickCarousels = () => {
    if (typeof jQuery !== 'undefined' && jQuery.fn.slick) {
        jQuery(document).ready(function ($) {
            // Desktop video carousel
            $('.video-slider').slick({
                dots: true,
                infinite: true,
                speed: 300,
                slidesToShow: 4,
                slidesToScroll: 1,
                autoplay: false,
                arrows: true,
                prevArrow: '<button type="button" class="slick-prev"><img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/iconamoon_arrow-up-2-thin_55aa38bb-cb5e-4608-9097-927814968771.png?v=1758716845"></button>',
                nextArrow: '<button type="button" class="slick-next"><img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/iconamoon_arrow-up-2-thin_55aa38bb-cb5e-4608-9097-927814968771.png?v=1758716845"></button>',
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });

            // Auto-generate mobile gallery from desktop images
            initMobileGallery($);

            // Custom carousel controls
            $('.product_carousel-prev').on('click', function () {
                $('.video-slider').slick('slickPrev');
            });

            $('.product_carousel-next').on('click', function () {
                $('.video-slider').slick('slickNext');
            });
        });
    }
};


/* Mobile Gallery Auto-Generation
   ========================================================================== */

const initMobileGallery = ($) => {
    // Extract product images (filter out badges/icons)
    const desktopImages = [];
    $('.Desktop_only img').each(function () {
        const src = $(this).attr('src');
        if (src && !src.includes('leaves') && !src.includes('nysale') && !src.includes('sale-badge')) {
            if (desktopImages.indexOf(src) === -1) desktopImages.push(src);
        }
    });

    if (desktopImages.length > 0) {
        let mainSlides = '<div class="mobile-main-slider mb-4">';
        let thumbSlides = '<div class="mobile-thumb-slider px-1">';

        $.each(desktopImages, function (index, src) {
            // Add badges only to first slide
            let extras = '';
            if (index === 0) {
                extras = `
                    <img class="absolute top-4 right-4 w-20 z-10" src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/nysale.png?v=1766822224" alt="Sale">
                    <div class="absolute bottom-6 left-1/2 -translate-x-1/2 z-[2] flex justify-center gap-2 items-center px-4 py-1.5 bg-[#ffffffd9] border border-black rounded-full cursor-pointer text-xs w-max max-w-[90%] shadow-sm">
                        <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/leaves_1247958_1_cf2e7df4-c113-4c3a-be49-f876ec94d873.png?v=1766822629" class="w-4 h-4">
                        <span class="font-medium">Nutritional Information</span>
                    </div>`;
            }

            mainSlides += '<div class="relative outline-none"><img src="' + src + '" class="w-full rounded-2xl">' + extras + '</div>';
            thumbSlides += '<div class="px-1 outline-none"><img src="' + src + '" class="w-full rounded-lg cursor-pointer border-2 border-transparent transition-all"></div>';
        });

        mainSlides += '</div>';
        thumbSlides += '</div>';

        // Inject into DOM
        $('#mobile-gallery-container').html(mainSlides + thumbSlides);

        // Initialize Slick for mobile gallery
        const arrowClasses = "absolute top-1/2 -translate-y-1/2 z-20 w-9 h-9 bg-white/90 rounded-full flex !items-center !justify-center shadow-md cursor-pointer border-none outline-none hover:bg-white transition-colors";

        $('.mobile-main-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            asNavFor: '.mobile-thumb-slider',
            prevArrow: `<button type="button" class="slick-prev mobile-arrow-prev ${arrowClasses} left-4"><img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/iconamoon_arrow-up-2-thin_55aa38bb-cb5e-4608-9097-927814968771.png?v=1758716845" class="w-3.5 h-3.5 opacity-80 block"></button>`,
            nextArrow: `<button type="button" class="slick-next mobile-arrow-next ${arrowClasses} right-4"><img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/iconamoon_arrow-up-2-thin_55aa38bb-cb5e-4608-9097-927814968771.png?v=1758716845" class="w-3.5 h-3.5 opacity-80 block rotate-180"></button>`
        });

        $('.mobile-thumb-slider').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '.mobile-main-slider',
            dots: false,
            arrows: false,
            focusOnSelect: true,
            infinite: true,
            centerMode: false
        });
    }
};


/* Video Play/Pause Controls
   ========================================================================== */

const initVideoControls = () => {
    const videoSlides = document.querySelectorAll('.video-slide');

    videoSlides.forEach(slide => {
        const video = slide.querySelector('video');
        const playButton = slide.querySelector('img[alt="Play"]');
        const overlay = playButton?.parentElement;

        if (video && overlay) {
            slide.addEventListener('click', function (e) {
                e.preventDefault();

                if (video.paused) {
                    // Play this video and pause all others
                    video.play();
                    overlay.style.display = 'none';

                    videoSlides.forEach(otherSlide => {
                        const otherVideo = otherSlide.querySelector('video');
                        const otherOverlay = otherSlide.querySelector('img[alt="Play"]')?.parentElement;
                        if (otherVideo && otherVideo !== video && !otherVideo.paused) {
                            otherVideo.pause();
                            if (otherOverlay) otherOverlay.style.display = 'flex';
                        }
                    });
                } else {
                    video.pause();
                    overlay.style.display = 'flex';
                }
            });

            // Show overlay when video ends
            video.addEventListener('ended', function () {
                overlay.style.display = 'flex';
            });
        }
    });
};
