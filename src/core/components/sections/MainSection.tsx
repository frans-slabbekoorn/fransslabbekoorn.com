import React, { type RefObject } from 'react';
import type { FC } from 'react';

import { gsap } from 'gsap';

import Card from '~components/Card';
import AnimationWrapper from '~components/misc/AnimationWrapper';
import ScrollWrapper from '~components/misc/ScrollWrapper';

interface MainSectionProps {
    aboutSectionRef: RefObject<HTMLDivElement>;
    socialsSectionRef: RefObject<HTMLDivElement>;
}

const MainSection: FC<MainSectionProps> = ({ aboutSectionRef, socialsSectionRef }) => {
    const handleCardClick = (sectionRef: React.RefObject<HTMLDivElement>) => {
        if (sectionRef.current) {
            gsap.to(window, {
                duration: 1,
                scrollTo: {
                    y: sectionRef.current.offsetTop,
                },
                ease: 'Circ.easeInOut',
            });
        }
    };

    return (
        <section className="main px-8 sm:px-12 md:px-16 lg:px-32 bg-neutral-50 ">
            <div className="wrapper pt-8 sm:pt-16 md:pt-24 flex flex-col sm:flex-row justify-between">
                <ScrollWrapper x={-50} className="w-full sm:w-2/6">
                    <h1 className="text-3xl font-regular text-neutral-800 mb-4 sm:mb-2">
                        <AnimationWrapper delay={3.5}>Frans Slabbekoorn</AnimationWrapper>
                    </h1>
                </ScrollWrapper>

                <ScrollWrapper x={50} className="w-full sm:w-2/6">
                    <p className="text-sm text-left sm:text-right font-regular text-neutral-600">
                        <AnimationWrapper speed={0.001} delay={3.5}>
                            I&apos;m a software developer based in Ouddorp, Netherlands,
                            specializing in backend development. Skilled in Laravel, Javascript,
                            API&apos;s and databases, I craft efficient solutions for complex
                            problems.
                        </AnimationWrapper>
                    </p>
                </ScrollWrapper>
            </div>
            <div className="cards mt-8 sm:mt-12">
                <hr className="h-px border-neutral-200" />
                <div className="cards__wrapper mt-8 mb-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <ScrollWrapper x={-20}>
                        <Card
                            title="About"
                            onClick={() => handleCardClick(aboutSectionRef)}
                            color="bg-primary-900"
                        />
                    </ScrollWrapper>
                    <ScrollWrapper x={20}>
                        <Card title="Socials" onClick={() => handleCardClick(socialsSectionRef)} />
                    </ScrollWrapper>
                </div>
                <hr className="h-px border-neutral-200" />
            </div>
            <div className="wrapper pt-8 sm:pt-12 md:pt-16 flex flex-col sm:flex-row justify-between">
                <p className="text-sm sm:text-left font-regular text-neutral-600 w-full sm:w-2/4 mt-4 sm:mt-48">
                    Currently working for{' '}
                    <a
                        data-type="link"
                        href="https://pixelperfect.agency"
                        className="underline"
                        target="_blank"
                        rel="noreferrer">
                        Pixel Perfect Agency
                    </a>
                </p>
                <ScrollWrapper x={50} className="w-full sm:w-2/6">
                    <h2 className="text-3xl font-regular text-left sm:text-right text-neutral-800 mb-4 sm:mb-2 mt-8 sm:mt-0">
                        <AnimationWrapper delay={3.5}>Software Developer</AnimationWrapper>
                    </h2>
                </ScrollWrapper>
            </div>
            <hr className="h-px border-neutral-200 pb-24 mt-8" />
        </section>
    );
};

export default MainSection;
