/* Ingredients Accordion
   ========================================================================== */

const initIngredientsAccordion = () => {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const trigger = item.querySelector('.accordion-trigger');
        const content = item.querySelector('.accordion-content');
        const icon = item.querySelector('.accordion-icon');

        trigger.addEventListener('click', function () {
            const isOpen = !content.classList.contains('hidden');

            if (isOpen) {
                content.classList.add('hidden');
                icon.classList.remove('rotate-45');
                item.classList.remove('border-[#039869]');
                item.classList.add('border-gray-200');
            } else {
                content.classList.remove('hidden');
                icon.classList.add('rotate-45');
                item.classList.remove('border-gray-200');
                item.classList.add('border-[#039869]');
            }
        });
    });
};


/* FAQ Accordion
   ========================================================================== */

const initFAQAccordion = () => {
    const faqItems = document.querySelectorAll('.faq-item');

    // Initialize all FAQs as closed
    faqItems.forEach(item => {
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('svg');
        answer.style.maxHeight = '0px';
        icon.style.transform = 'rotate(0deg)';
    });

    // Handle FAQ toggle
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = question.querySelector('svg');

        question.addEventListener('click', function () {
            const isOpen = answer.style.maxHeight && answer.style.maxHeight !== '0px';

            // Close all FAQs
            faqItems.forEach(faq => {
                const faqAnswer = faq.querySelector('.faq-answer');
                const faqIcon = faq.querySelector('svg');
                faqAnswer.style.maxHeight = '0px';
                faqIcon.style.transform = 'rotate(0deg)';
            });

            // Open clicked FAQ if it was closed
            if (!isOpen) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                icon.style.transform = 'rotate(180deg)';
            }
        });
    });
};


/* Ingredient Grid Items
   ========================================================================== */

const initIngredientItems = () => {
    const ingredientItems = document.querySelectorAll('.ingredient-item');

    ingredientItems.forEach(item => {
        const header = item.querySelector('.ingredient-header');
        const content = item.querySelector('.ingredient-content');
        const arrow = item.querySelector('.ingredient-arrow');

        if (header && content && arrow) {
            header.addEventListener('click', () => {
                const isOpen = !content.classList.contains('hidden');

                if (isOpen) {
                    content.classList.add('hidden');
                    arrow.classList.remove('rotate-90');
                } else {
                    content.classList.remove('hidden');
                    arrow.classList.add('rotate-90');
                }
            });
        }
    });
};
