// اسکریپت‌های سایت
console.log("سلام! سایت من با GitHub Pages راه‌اندازی شده است.");

// پیکربندی ScrollReveal
ScrollReveal().reveal('section', {
    delay: 300,
    distance: '50px',
    origin: 'bottom',
    opacity: 0,
    easing: 'ease-in-out',
    reset: true
});

// دکمه بازگشت به بالا
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});