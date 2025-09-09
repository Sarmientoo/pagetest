// ==================== MOBILE MENU FUNCTIONALITY ====================
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const menuToggle = document.querySelector('.menu-toggle');
    
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
}

// ==================== SMOOTH SCROLLING ====================
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            
            // Close mobile menu if open
            const navMenu = document.querySelector('.nav-menu');
            const menuToggle = document.querySelector('.menu-toggle');
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    });
}

// ==================== HEADER SCROLL EFFECT ====================
function initHeaderScrollEffect() {
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        
        if (window.scrollY > 100) {
            header.style.background = 'rgba(20, 25, 47, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
        } else {
            header.style.background = 'rgba(20, 25, 47, 0.95)';
            header.style.boxShadow = 'none';
        }
    });
}

// ==================== CLOSE MENU ON OUTSIDE CLICK ====================
function initOutsideClickClose() {
    document.addEventListener('click', function(event) {
        const navMenu = document.querySelector('.nav-menu');
        const menuToggle = document.querySelector('.menu-toggle');
        const nav = document.querySelector('nav');
        
        // If menu is open and click is outside nav area
        if (navMenu.classList.contains('active') && !nav.contains(event.target)) {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });
}

// ==================== LOADING ANIMATION ====================
function initLoadingAnimation() {
    window.addEventListener('load', function() {
        document.body.style.opacity = '1';
        document.body.style.transition = 'opacity 0.5s ease';
    });
}

// ==================== BUTTON HOVER EFFECTS ====================
function initButtonEffects() {
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .contact-btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// ==================== FORM VALIDATION (si agregas formulario) ====================
function validateContactForm(formData) {
    const errors = [];
    
    if (!formData.get('name') || formData.get('name').trim().length < 2) {
        errors.push('El nombre debe tener al menos 2 caracteres');
    }
    
    if (!formData.get('email') || !isValidEmail(formData.get('email'))) {
        errors.push('Por favor ingresa un email válido');
    }
    
    if (!formData.get('message') || formData.get('message').trim().length < 10) {
        errors.push('El mensaje debe tener al menos 10 caracteres');
    }
    
    return errors;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ==================== SCROLL TO TOP FUNCTIONALITY ====================
function createScrollToTopButton() {
    // Create button element
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '↑';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.setAttribute('aria-label', 'Volver arriba');
    
    // Add styles
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #4f46e5;
        color: white;
        border: none;
        font-size: 1.2rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
    `;
    
    document.body.appendChild(scrollBtn);
    
    // Show/hide on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollBtn.style.opacity = '1';
            scrollBtn.style.visibility = 'visible';
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top on click
    scrollBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ==================== PERFORMANCE OPTIMIZATION ====================
function optimizeImages() {
    // Lazy loading para imágenes (si agregas más)
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ==================== ANALYTICS TRACKING ====================
function trackUserInteraction(action, element) {
    // Placeholder para Google Analytics o similar
    console.log(`User action: ${action} on ${element}`);
    
    // Ejemplo: gtag('event', action, { element: element });
}

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initSmoothScrolling();
    initHeaderScrollEffect();
    initOutsideClickClose();
    initLoadingAnimation();
    initButtonEffects();
    createScrollToTopButton();
    optimizeImages();
    
    // Add event listeners for tracking
    document.querySelectorAll('a, button').forEach(element => {
        element.addEventListener('click', function() {
            trackUserInteraction('click', this.textContent || this.getAttribute('aria-label'));
        });
    });
    
    console.log('AMG Website initialized successfully! 🚀');
});

// ==================== UTILITY FUNCTIONS ====================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll events for better performance
window.addEventListener('scroll', debounce(function() {
    // Scroll events here
}, 10));



// Animación de entrada cuando el elemento es visible
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                }
            });
        }, observerOptions);

        // Observar elementos para animaciones
        document.querySelectorAll('.subsection').forEach(el => {
            observer.observe(el);
        });

        // Efectos de paralaje suave
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            const floatingElements = document.querySelector('.floating-elements');
            if (floatingElements) {
                floatingElements.style.transform = `translateY(${rate}px)`;
            }
        });

        // Animación de escritura para el título
        function typeWriter(element, text, speed = 100) {
            let i = 0;
            element.innerHTML = '';
            
            function type() {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                }
            }
            type();
        }

        // Inicializar animación de escritura cuando la sección sea visible
        const titleObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const title = entry.target;
                    const originalText = title.textContent;
                    typeWriter(title, originalText, 150);
                    titleObserver.unobserve(title);
                }
            });
        }, { threshold: 0.5 });

        document.addEventListener('DOMContentLoaded', () => {
            const title = document.querySelector('.section-title');
            titleObserver.observe(title);
        });

        // Efecto de hover dinámico en la ilustración
        const illustration = document.querySelector('.illustration');
        const character = document.querySelector('.character');

        illustration.addEventListener('mousemove', (e) => {
            const rect = illustration.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            const moveX = x / 10;
            const moveY = y / 10;
            
            character.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });

        illustration.addEventListener('mouseleave', () => {
            character.style.transform = 'translate(0, 0)';
            character.style.transition = 'transform 0.3s ease';
        });

        illustration.addEventListener('mouseenter', () => {
            character.style.transition = 'none';
        });
