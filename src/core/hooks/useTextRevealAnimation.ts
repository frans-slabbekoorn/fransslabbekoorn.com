'use client';

import { useEffect, useRef } from 'react';

import { ScrollTrigger, gsap } from 'gsap/all';

interface Options {
    delay?: number;
    duration?: number;
    stagger?: number;
}

const useTextRevealAnimation = (
    ref: React.RefObject<HTMLElement>[],
    { delay = 0, duration = 0.7, stagger: customStagger }: Options = {},
    binaryText?: string,
) => {
    const hasMounted = useRef(false);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        if (hasMounted.current) return;

        hasMounted.current = true;

        ref.forEach(elementRef => {
            const element = elementRef.current;
            if (!element) {
                return;
            }

            element.removeAttribute('class');

            const prefersReducedMotion = window.matchMedia(
                '(prefers-reduced-motion: reduce)',
            ).matches;

            if (prefersReducedMotion) {
                return;
            }

            const text = binaryText ?? element.innerText;
            const words = text.split(/\s+/);

            if (words.length === 0) {
                return;
            }

            const wrappedWords = words.map(
                word =>
                    `<span class="t--animation-line inline-flex overflow-hidden"><span class="t--animation-span inline-flex overflow-hidden">${word}</span></span>`,
            );
            element.innerHTML = wrappedWords.join(' ');

            const wordCount = words.length;
            const division = 0.08 / Math.log10(wordCount);
            const calculatedStagger = Math.min(
                Math.max(0.04 / (division * wordCount), 0),
                0.08,
            ).toFixed(4);

            const stagger =
                customStagger !== undefined
                    ? customStagger
                    : Number(calculatedStagger) < 0.01
                    ? 0
                    : Number(calculatedStagger);

            const wordSpans = element.querySelectorAll('.t--animation-span');

            gsap.set(wordSpans, { yPercent: 100 });

            const trigger = ScrollTrigger.create({
                trigger: element,
                start: 'top bottom',
                once: true,
                onEnter: () => {
                    gsap.fromTo(
                        wordSpans,
                        {
                            yPercent: 100,
                        },
                        {
                            duration,
                            stagger,
                            yPercent: 0,
                            onComplete: () => {
                                if (!element.parentElement) {
                                    return;
                                }
                                element.parentElement.innerHTML = words.join(' ');
                            },
                        },
                    ).delay(delay);
                },
            });

            return () => {
                trigger.kill();
            };
        });
    }, [ref, delay, duration, customStagger, binaryText, hasMounted]);

    return ref;
};

export default useTextRevealAnimation;
