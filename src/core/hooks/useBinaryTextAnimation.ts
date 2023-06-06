'use client';

import { useEffect, useRef } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const binary = '01101000 01110101 01101000';

const useBinaryTextAnimation = (initialText: string, speed: number = 0.05, delay: number = 0) => {
    const textRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const textElement = textRef.current;
        let iteration = 0;
        const originalText = initialText || '';

        const characters = originalText.split('');
        const binaryLength = binary.length;

        const animateText = () => {
            if (textElement) {
                const animatedCharacters = characters.map((letter, index) => {
                    if (index < iteration) {
                        return letter;
                    }
                    return binary[index % binaryLength];
                });

                textElement.innerText = animatedCharacters.join('');

                if (iteration < originalText.length) {
                    iteration++;
                    gsap.delayedCall(speed, animateText);
                }
            }
        };

        const triggerElement = textElement?.parentElement;
        if (triggerElement) {
            gsap.fromTo(
                triggerElement,
                {},
                {
                    scrollTrigger: {
                        trigger: triggerElement,
                        start: 'top 80%',
                        end: 'bottom 80%',
                        onEnter: () => {
                            gsap.delayedCall(delay, () => {
                                // Use the delay value for the animation start
                                gsap.delayedCall(speed, animateText);
                            });
                        },
                    },
                },
            );
        }

        return () => {
            gsap.killTweensOf(textElement);
        };
    }, [initialText, speed, delay]);

    return textRef;
};

export default useBinaryTextAnimation;
