import { useEffect, useState } from 'react';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Options {
    scale?: number;
    x?: number;
}

const useScrollAnimation = (element: React.RefObject<HTMLElement>, { x = -10 }: Options = {}) => {
    const [disableAnimation, setDisableAnimation] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined') {
            // Skip animation setup if running outside a browser context
            return;
        }

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        const handleResize = () => {
            const screenWidth = window.innerWidth;
            setDisableAnimation(screenWidth <= 1000);
        };

        if (prefersReducedMotion || !element.current) {
            return;
        }

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: element.current,
                start: 'top top',
                end: 'bottom top',
                scrub: 1,
                toggleActions: 'restart pause resume pause',
            },
        });

        if (disableAnimation) {
            tl.fromTo(element.current, { x: 0 }, { x: 0 });
        } else {
            tl.fromTo(element.current, { x: 0 }, { x });
        }

        window.addEventListener('resize', handleResize);
        handleResize(); // Call handleResize initially to set the correct disableAnimation value

        return () => {
            tl.kill();
            window.removeEventListener('resize', handleResize);
        };
    }, [element, x, disableAnimation]);

    useEffect(() => {
        if (!disableAnimation && element.current) {
            gsap.set(element.current, { clearProps: 'x' });
        }
    }, [disableAnimation, element]);

    return null;
};

export default useScrollAnimation;
