export const initScrollAnimations = () => {
    if (typeof window === 'undefined') return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        },
        {
            threshold: 0.1,
            rootMargin: '-50px',
        }
    );

    // Observe all elements with scroll-animate class
    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observer.observe(el));

    return observer;
}; 