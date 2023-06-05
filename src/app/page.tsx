'use client';

import React, { useEffect, useRef } from 'react';

import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import AboutSection from '~components/AboutSection';
import MainSection from '~components/MainSection';
import SocialSection from '~components/SocialSection';
import AnimationWrapper from '~components/misc/AnimationWrapper';
import CustomCursor from '~components/misc/CustomCursor';

gsap.registerPlugin(ScrollToPlugin);

const Page = () => {
    const preloaderRef = useRef<HTMLDivElement>(null);
    const aboutSectionRef = useRef(null);
    const socialsSectionRef = useRef(null);

    useEffect(() => {
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

            <div className="preloader absolute w-full h-screen fixed z-10" ref={preloaderRef}>
                <div className=" h-screen flex justify-center items-center flex-col">
                    <span className="inline-flex overflow-hidden">
                        <span className="inline-flex overflow-hidden">
                            <h1 className="preloader__text text-xl text-neutral-950 z-10">
                                <AnimationWrapper delay={1}>Frans Slabbekoorn</AnimationWrapper>
                            </h1>
                        </span>
                    </span>

                    <span className="inline-flex overflow-hidden">
                        <span className="inline-flex overflow-hidden">
                            <h2 className="preloader__text text-base text-neutral-800 z-10">
                                <AnimationWrapper delay={1}>Software Developer</AnimationWrapper>
                            </h2>
                        </span>
                    </span>
                </div>
                <div className="box box-1 absolute top-[0%] w-screen bg-neutral-50 " />
                <div className="box box-2 absolute w-screen top-[66.6%] bg-neutral-50 " />
                <div className="box box-3 absolute w-screen top-[33.3%] bg-neutral-50 " />
            </div>
            <MainSection aboutSectionRef={aboutSectionRef} socialsSectionRef={socialsSectionRef} />
            <AboutSection ref={aboutSectionRef} />
            <SocialSection ref={socialsSectionRef} />
        </>
    );
};

export default Page;
