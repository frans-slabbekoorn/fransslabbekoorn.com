import React, { forwardRef } from 'react';

import AnimationWrapper from '~components/misc/AnimationWrapper';
import ScrollWrapper from '~components/misc/ScrollWrapper';

const AboutSection = forwardRef<HTMLElement, object>((_, ref) => {
    return (
        <>
            <section ref={ref} className="about px-8 sm:px-12 md:px-16 lg:px-32 bg-neutral-50">
                <div className="wrapper pt-8 sm:pt-16 md:pt-24 grid grid-cols-1 sm:grid-cols-4">
                    <ScrollWrapper x={-50}>
                        <p className="label text-neutral-600 text-sm col-span-1">About me</p>
                    </ScrollWrapper>
                    <h3 className="text-xl text-neutral-700 col-span-3 mt-8 sm:mt-0">
                        As a Software Developer, I am responsible for creating fast, robust APIs and
                        handling all technical aspects related to backend development. My expertise
                        lies in crafting efficient solutions with a focus on scalability and
                        performance. My passion for technology and coding is what drives me to
                        constantly learn and improve my skills.
                        <hr className="h-px border-neutral-200 mt-8" />
                    </h3>
                </div>
            </section>
            <section className="about px-8 sm:px-12 md:px-16 lg:px-32 bg-neutral-50">
                <div className="wrapper pt-8 sm:pt-16 md:pt-24 grid grid-cols-1 sm:grid-cols-4">
                    <ScrollWrapper x={-50}>
                        <p className="label text-neutral-600 text-sm col-span-1">Tech Stack</p>
                    </ScrollWrapper>

                    <h3 className="text-base text-neutral-700 col-span-2 mt-8 sm:mt-0">
                        With over 4 years of experience in backend development I&apos;m confident in
                        using the following technologies:
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
                        <p className="label text-neutral-600 text-sm col-span-1">Experience</p>
                    </ScrollWrapper>
                    <h3 className="text-base text-neutral-700 col-span-2 mt-8 sm:mt-0">
                        Throughout my career, I have gained valuable experience working on diverse
                        projects in different industries.
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
                                href="http://pixelperfect.agency"
                                target="_blank"
                                rel="noreferrer"
                                className="wrapper flex justify-between">
                                <p className="year">
                                    <AnimationWrapper>2023-now</AnimationWrapper>
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
