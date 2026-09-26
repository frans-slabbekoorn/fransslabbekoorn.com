import React, { forwardRef, useEffect, useRef } from 'react';

import AnimationWrapper from '~components/misc/AnimationWrapper';
import ScrollWrapper from '~components/misc/ScrollWrapper';
import { track } from '~functions/eyes';
import type { Dictionary } from '~locales/en';

const CAREER_START_YEAR = 2019;

interface Props {
    dict: Dictionary;
}

const AboutSection = forwardRef<HTMLElement, Props>(({ dict }, ref) => {
    const sectionRef = useRef<HTMLElement | null>(null);
    const yearsOfExperience = new Date().getFullYear() - CAREER_START_YEAR;

    const setRefs = (node: HTMLElement | null) => {
        sectionRef.current = node;
        if (typeof ref === 'function') {
            ref(node);
        } else if (ref) {
            ref.current = node;
        }
    };

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) {
            return undefined;
        }

        const observer = new IntersectionObserver(
            entries => {
                if (entries.some(entry => entry.isIntersecting)) {
                    track('AboutVisited');
                    observer.disconnect();
                }
            },
            { threshold: 0.3 },
        );
        observer.observe(section);

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <section ref={setRefs} className="about px-8 sm:px-12 md:px-16 lg:px-32 bg-neutral-50">
                <div className="wrapper pt-8 sm:pt-16 md:pt-24 grid grid-cols-1 sm:grid-cols-4">
                    <ScrollWrapper x={-50}>
                        <p className="label text-neutral-600 text-sm col-span-1">
                            {dict.about.label}
                        </p>
                    </ScrollWrapper>
                    <h3 className="text-xl text-neutral-700 col-span-3 mt-8 sm:mt-0">
                        {dict.about.text}
                        <hr className="h-px border-neutral-200 mt-8" />
                    </h3>
                </div>
            </section>
            <section className="about px-8 sm:px-12 md:px-16 lg:px-32 bg-neutral-50">
                <div className="wrapper pt-8 sm:pt-16 md:pt-24 grid grid-cols-1 sm:grid-cols-4">
                    <ScrollWrapper x={-50}>
                        <p className="label text-neutral-600 text-sm col-span-1">
                            {dict.about.techStackLabel}
                        </p>
                    </ScrollWrapper>

                    <h3 className="text-base text-neutral-700 col-span-2 mt-8 sm:mt-0">
                        {dict.about.techStackText.replace('{years}', String(yearsOfExperience))}
                    </h3>
                </div>
                <div className="wrapper grid grid-cols-1 sm:grid-cols-4 mt-16">
                    <div className="col-span1" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 col-span-3">
                        <div className="row text-base text-neutral-600">
                            <AnimationWrapper>Aws</AnimationWrapper>
                            <hr className="h-px border-neutral-200 mt-4" />
                        </div>
                        <div className="row text-base text-neutral-600">
                            <AnimationWrapper>NextJS</AnimationWrapper>
                            <hr className="h-px border-neutral-200 mt-4" />
                        </div>
                        <div className="row text-base text-neutral-600">
                            <AnimationWrapper>Laravel</AnimationWrapper>
                            <hr className="h-px border-neutral-200 mt-4" />
                        </div>
                        <div className="row text-base text-neutral-600">
                            <AnimationWrapper>Docker</AnimationWrapper>
                            <hr className="h-px border-neutral-200 mt-4" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="about px-8 sm:px-12 md:px-16 lg:px-32 bg-neutral-50">
                <div className="wrapper pt-8 sm:pt-16 md:pt-24 grid grid-cols-1 sm:grid-cols-4">
                    <ScrollWrapper x={-50}>
                        <p className="label text-neutral-600 text-sm col-span-1">
                            {dict.about.experienceLabel}
                        </p>
                    </ScrollWrapper>
                    <h3 className="text-base text-neutral-700 col-span-2 mt-8 sm:mt-0">
                        {dict.about.experienceText}
                    </h3>
                </div>
                <div className="wrapper grid grid-cols-1 sm:grid-cols-4 mt-16 pb-32">
                    <div className="col-span1" />
                    <div className="grid grid-cols-1 gap-16 col-span-3">
                        <div className="row text-base text-neutral-600">
                            <div className="wrapper flex justify-between">
                                <p className="year">
                                    <AnimationWrapper>2021-2023</AnimationWrapper>
                                </p>
                                <p className="place">
                                    <AnimationWrapper>Emerit B.V</AnimationWrapper>
                                </p>
                            </div>
                            <hr className="h-px border-neutral-200 mt-4" />
                        </div>
                        <div className="row text-base text-neutral-600">
                            <a
                                data-type="link"
                                href="https://pixelperfect.agency"
                                target="_blank"
                                rel="noreferrer"
                                onClick={() =>
                                    track('ProjectLinkClicked', {
                                        name: 'Pixel Perfect Agency',
                                        url: 'https://pixelperfect.agency',
                                    })
                                }
                                className="wrapper flex justify-between">
                                <p className="year">
                                    <AnimationWrapper>{`2023-${dict.about.now}`}</AnimationWrapper>
                                </p>
                                <p className="place">
                                    <AnimationWrapper>Pixel Perfect Agency</AnimationWrapper>
                                </p>
                            </a>
                            <hr className="h-px border-neutral-200 mt-4" />
                        </div>
                    </div>
                </div>
            </section>
            <div className="absolute w-full h-16 bg-neutral-50 rounded-bl-[32px] rounded-br-[32px] sm:rounded-bl-[96px] sm:rounded-br-[96px]" />
        </>
    );
});

AboutSection.displayName = 'AboutSection';

export default AboutSection;
