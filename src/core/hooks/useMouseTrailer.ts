import { useEffect, useRef, useState } from 'react';

import { gsap } from 'gsap';

const useMouseTrailer = () => {
    const trailerRef = useRef<HTMLDivElement>(null);
    const cursorRef = useRef<HTMLDivElement>(null);
    const [interacting, setInteracting] = useState(false);

    useEffect(() => {
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

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement | null;

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

        const handleMouseLeave = () => {
            if (cursorRef.current) {
                gsap.to(cursorRef.current, {
                    scale: 1,
                    duration: 0.4,
                    ease: 'back.out(1.7)',
                });
            }
        };

        const handleMouseMove = () => {
            if (cursorRef.current) {
                setTimeout(() => {
                    if (cursorRef.current) {
                        cursorRef.current.classList.add('opacity-100');
                    }
                }, 1000); // Delay of 1 second (1000 milliseconds)
            }
        };

        if (cursorRef.current) {
            cursorRef.current.classList.add('opacity-0');
        }

        window.addEventListener('mousemove', animateTrailer);
        window.addEventListener('mouseover', handleMouseOver);
        window.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', animateTrailer);
            window.removeEventListener('mouseover', handleMouseOver);
            window.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return { trailerRef, cursorRef, interacting };
};

export default useMouseTrailer;
