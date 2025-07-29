import { useState, useEffect } from 'react';

export const useActiveSection = () => {
    const [activeSection, setActiveSection] = useState<string>('');

    useEffect(() => {
        const sections = ['home', 'projects', 'skills', 'about-me', 'contacts'];

        const updateActiveSection = () => {
            const scrollPosition = window.scrollY + 100; // Offset for header height

            // Check if we're at the top (home section)
            if (scrollPosition < 200) {
                setActiveSection('home');
                return;
            }

            // Check each section
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        return;
                    }
                }
            }
        };

        // Handle hash changes
        const handleHashChange = () => {
            const hash = window.location.hash.slice(1); // Remove the #
            if (hash && sections.includes(hash)) {
                setActiveSection(hash);
            }
        };

        // Initial check
        updateActiveSection();
        handleHashChange();

        // Add event listeners
        window.addEventListener('scroll', updateActiveSection);
        window.addEventListener('hashchange', handleHashChange);

        return () => {
            window.removeEventListener('scroll', updateActiveSection);
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    return activeSection;
}; 