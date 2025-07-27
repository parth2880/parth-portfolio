export const initScrollAnimations = () => {
    // Wait for the DOM to be ready
    if (typeof window === 'undefined') return;

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Add a small delay to ensure smooth animation
                setTimeout(() => {
                    entry.target.classList.add('animate');
                }, 100);
            }
        });
    }, observerOptions);

    // Observe all elements with scroll-animate class
    const animatedElements = document.querySelectorAll('.scroll-animate');
    animatedElements.forEach((el) => {
        observer.observe(el);
    });

    // Also check for elements already in view on page load
    animatedElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            setTimeout(() => {
                el.classList.add('animate');
            }, 200);
        }
    });

    return observer;
}; 