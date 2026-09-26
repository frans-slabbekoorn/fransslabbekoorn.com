'use client';

import React, { useEffect, useRef } from 'react';

import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import AnimationWrapper from '~components/misc/AnimationWrapper';
import CustomCursor from '~components/misc/CustomCursor';
import AboutSection from '~components/sections/AboutSection';
import MainSection from '~components/sections/MainSection';
import SocialSection from '~components/sections/SocialSection';
import type { Dictionary } from '~locales/en';

gsap.registerPlugin(ScrollToPlugin);

interface Props {
    dict: Dictionary;
}

const HomePage = ({ dict }: Props) => {
    const preloaderRef = useRef<HTMLDivElement>(null);
    const aboutSectionRef = useRef<HTMLElement>(null);
    const socialsSectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            addInvisibleClass();
            return;
        }

        const timeline = gsap.timeline();

        const text = document.querySelectorAll('.preloader__text');
        timeline
            .fromTo(
                text,
                { y: -100, rotate: -5.625 },
                { duration: 1, y: 0, ease: 'Circ.easeInOut', rotate: 0 },
            )
            .to(text, { delay: 1, duration: 1, y: 100, ease: 'Circ.easeInOut', rotate: 5.625 });

        const boxes = document.querySelectorAll('.box');
        timeline.fromTo(
            boxes,
            { height: '33.3vh' },
            {
                duration: 2.5,
                height: '0vh',
                ease: 'Circ.easeInOut',
                onComplete: () => {
                    addInvisibleClass();
                    document.body.style.overflow = 'auto';
                },
            },
        );
        // Disable scrolling on the body
        document.body.style.overflow = 'hidden';

        // Scroll to the top of the page
        window.scrollTo(0, 0);
    }, []);

    const addInvisibleClass = () => {
        if (preloaderRef.current) {
            preloaderRef.current.classList.add('invisible');
        }
    };

    return (
        <>
            <CustomCursor />

            <div
                className="preloader fixed w-full h-screen z-10 motion-reduce:hidden"
                ref={preloaderRef}>
                <div className=" h-screen flex justify-center items-center flex-col">
                    <span className="inline-flex overflow-hidden">
                        <span className="inline-flex overflow-hidden">
                            <h1 className="preloader__text -translate-y-[100px] -rotate-[5.625deg] text-xl text-neutral-950 z-10">
                                <AnimationWrapper delay={1}>Frans Slabbekoorn</AnimationWrapper>
                            </h1>
                        </span>
                    </span>

                    <span className="inline-flex overflow-hidden">
                        <span className="inline-flex overflow-hidden">
                            <h2 className="preloader__text -translate-y-[100px] -rotate-[5.625deg] text-base text-neutral-800 z-10">
                                <AnimationWrapper delay={1}>{dict.role}</AnimationWrapper>
                            </h2>
                        </span>
                    </span>
                </div>
                <div className="box box-1 absolute top-[0%] h-[33.3vh] w-screen bg-neutral-50" />
                <div className="box box-2 absolute h-[33.3vh] w-screen top-[66.6%] bg-neutral-50" />
                <div className="box box-3 absolute h-[33.3vh] w-screen top-[33.3%] bg-neutral-50" />
            </div>
            <MainSection
                dict={dict}
                aboutSectionRef={aboutSectionRef}
                socialsSectionRef={socialsSectionRef}
            />
            <AboutSection ref={aboutSectionRef} dict={dict} />
            <SocialSection ref={socialsSectionRef} dict={dict} />
        </>
    );
};

export default HomePage;
