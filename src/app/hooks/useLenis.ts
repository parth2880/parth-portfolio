"use client";

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export const useLenis = () => {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        // Get the Lenis instance from the window object
        const lenis = (window as typeof window & { lenis?: Lenis }).lenis;
        if (lenis) {
            lenisRef.current = lenis;
        }
    }, []);

    return lenisRef.current;
}; 