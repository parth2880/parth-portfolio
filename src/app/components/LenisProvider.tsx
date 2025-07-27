"use client";

import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';

interface LenisProviderProps {
    children: React.ReactNode;
}

const LenisProvider: React.FC<LenisProviderProps> = ({ children }) => {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        // Initialize Lenis with basic configuration
        lenisRef.current = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        // Expose Lenis instance globally for use in other components
        (window as any).lenis = lenisRef.current;

        // RAF for smooth scrolling
        function raf(time: number) {
            lenisRef.current?.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Cleanup
        return () => {
            if (lenisRef.current) {
                lenisRef.current.destroy();
                delete (window as any).lenis;
            }
        };
    }, []);

    return <>{children}</>;
};

export default LenisProvider; 