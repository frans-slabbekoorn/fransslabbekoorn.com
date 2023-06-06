import { useEffect } from 'react';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Options {
    scale?: number;
    x?: number;
}

/**
 * Creates a scroll-based animation for an element using GSAP and ScrollTrigger.
 * @param element - A reference to the HTML element to animate.
 * @param options - An object containing animation options. Defaults to `{ scale: 0.95, y: -10 }`.
 * @param options.scale - The scale of the element at the start and end of the animation.
 * @param options.x - The horizontal distance of the element at the start and end of the animation.
 */

const useScrollAnimation = (element: React.RefObject<HTMLElement>, { x = -10 }: Options = {}) => {
    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (prefersReducedMotion || !element.current) {
            return;
        }

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: element.current,
                start: `top 10%`,
                end: 'bottom top',
                scrub: 1,
                toggleActions: 'restart pause resume pause',
            },
        });

        tl.fromTo(
            element.current,
            {
                x: 0, // Start at x: 0
            },
            {
                x, // Animate to the specified x value
            },
        );

        return () => {
            tl.kill();
        };
    }, [element, x]);

    return null;
};
export default useScrollAnimation;
