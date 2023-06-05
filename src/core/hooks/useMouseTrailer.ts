import { useEffect, useRef, useState } from 'react';

import { gsap } from 'gsap';

// Custom hook for mouse trailer functionality
const useMouseTrailer = () => {
    // Refs for trailer and cursor elements
    const trailerRef = useRef<HTMLDivElement>(null);
    const cursorRef = useRef<HTMLDivElement>(null);

    // State for tracking interaction
    const [interacting, setInteracting] = useState(false);

    useEffect(() => {
        // Function to animate the trailer
        const animateTrailer = (e: MouseEvent) => {
            const x = e.clientX;
            const y = e.clientY;

            if (trailerRef.current) {
                gsap.to(trailerRef.current, {
                    left: x,
                    top: y,
                    duration: 1,
                    ease: 'back.out(1.7)',
                });
            }
        };

        // Function to handle mouse over event
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement | null;

            // Recursive function to check if an element or its ancestor has a specific data-type attribute
            const hasAncestorWithType = (element: HTMLElement | null, type: string): boolean => {
                if (!element) {
                    return false;
                }

                if (element.getAttribute('data-type') === type) {
                    return true;
                }

                return hasAncestorWithType(element.parentElement, type);
            };

            const isLink = hasAncestorWithType(target, 'link');
            setInteracting(!!isLink);
            const isImage = hasAncestorWithType(target, 'image');

            if (cursorRef.current) {
                gsap.to(cursorRef.current, {
                    scale: isImage ? 2.5 : isLink ? 8 : 2,
                    duration: 0.4,
                    ease: 'back.out(1.7)',
                });
            }
        };

        // Function to handle mouse leave event
        const handleMouseLeave = () => {
            if (cursorRef.current) {
                gsap.to(cursorRef.current, {
                    scale: 1,
                    duration: 0.4,
                    ease: 'back.out(1.7)',
                });
            }
        };

        // Event listeners for mouse-related events
        window.addEventListener('mousemove', animateTrailer);
        window.addEventListener('mouseover', handleMouseOver);
        window.addEventListener('mouseleave', handleMouseLeave);

        // Cleanup function to remove event listeners
        return () => {
            window.removeEventListener('mousemove', animateTrailer);
            window.removeEventListener('mouseover', handleMouseOver);
            window.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    // Return the necessary references and state
    return { trailerRef, cursorRef, interacting };
};

export default useMouseTrailer;
