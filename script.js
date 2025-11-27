const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Why Choose Us Animation Trigger
const whyChooseUsItems = document.querySelectorAll('.why-choose-us-item');

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
            }, index * 200); // Stagger the animations
        }
    });
}, observerOptions);

whyChooseUsItems.forEach(item => {
    observer.observe(item);
});

// FAQ Accordion Functionality
function toggleFAQ(button) {
    const answer = button.nextElementSibling;
    const icon = button.querySelector('i');

    if (answer.classList.contains('hidden')) {
        answer.classList.remove('hidden');
        icon.classList.remove('fa-plus');
        icon.classList.add('fa-minus');
    } else {
        answer.classList.add('hidden');
        icon.classList.remove('fa-minus');
        icon.classList.add('fa-plus');
    }
}
