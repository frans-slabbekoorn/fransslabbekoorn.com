import React, { forwardRef } from 'react';

import { track } from '@vercel/analytics';

import AnimationWrapper from '~components/misc/AnimationWrapper';
import Icon from '~components/utils/Icon';

const socials = [
    { platform: 'Github', href: process.env.NEXT_PUBLIC_SOCIAL_GITHUB },
    { platform: 'LinkedIn', href: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN },
    { platform: 'Twitter', href: process.env.NEXT_PUBLIC_SOCIAL_TWITTER },
    { platform: 'Instagram', href: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM },
    { platform: 'Facebook', href: process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK },
];

const SocialSection = forwardRef<HTMLElement, object>((_, ref) => {
    return (
        <section ref={ref} className="px-8 sm:px-12 md:px-16 lg:px-32 bg-neutral-50">
            <div className="wrapper grid grid-cols-1 pt-24 sm:pt-48 sm:grid-cols-3">
                <h3 className="text-2xl pb-32 sm:pb-0 text-neutral-950">Socials</h3>
                <div className="grid grid-cols-1 col-span-2 gap-8">
                    {socials.map(({ platform, href }) => (
                        <a
                            key={platform}
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            data-type="link"
                            onClick={() => track('SocialLinkClicked', { platform })}
                            className="row relative text-base text-neutral-900">
                            <AnimationWrapper>{platform}</AnimationWrapper>
                            <hr className="h-px border-neutral-200 mt-4" />
                            <div className="absolute bottom-0 right-0 pr-6 pb-6 text-neutral-950">
                                <Icon name="arrow-outward" rotate="90" />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
            <hr className="h-px border-neutral-200 mt-32" />
            <div className="flex justify-between mt-8 pb-8">
                <p className="text-sm text-neutral-600">Frans Slabbekoorn</p>
                <p className="text-[0.8rem] text-neutral-600">Frontend by Joan Verhulst</p>
            </div>
        </section>
    );
});

SocialSection.displayName = 'SocialSection';

export default SocialSection;
