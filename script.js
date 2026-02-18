// 1. Scroll Reveal Animation
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// 2. Shopping Cart Logic
let count = 0;
const cartCountElement = document.getElementById('cart-count');
const addButtons = document.querySelectorAll('.add-to-cart');

addButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        count++;
        cartCountElement.innerText = count;
        
        // Add a little "pop" animation to the cart icon
        cartCountElement.style.transform = "scale(1.5)";
        setTimeout(() => {
            cartCountElement.style.transform = "scale(1)";
        }, 200);

        // Change button text temporarily
        const originalText = btn.innerText;
        btn.innerText = "Added!";
        btn.style.background = "#10b981"; // Green color
        
        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.background = ""; // Back to CSS default
        }, 1000);
    });
});

// 3. Sticky Navbar Change on Scroll
window.addEventListener('scroll', () => {
    const header = document.getElementById('navbar');
    if (window.scrollY > 50) {
        header.style.padding = "0.5rem 5%";
        header.style.background = "rgba(15, 23, 42, 0.95)";
    } else {
        header.style.padding = "1rem 5%";
        header.style.background = "#0f172a";
    }
});