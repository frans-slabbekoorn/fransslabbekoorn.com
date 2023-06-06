import React, { useRef } from 'react';
import type { FC } from 'react';

import { gsap } from 'gsap';

import Icon from '~components/utils/Icon';

interface Props {
    title: string;
    onClick?: () => void;
    color?: string;
}

const Card: FC<Props> = ({ title, onClick, color = 'bg-primary-500' }) => {
    const textRef = useRef<HTMLDivElement>(null);

    const handleMouseEnter = () => {
        gsap.fromTo(
            textRef.current,
            { rotate: -36 },
            {
                y: '40',
                rotate: 0,
                duration: 0.5,
                ease: 'Power4.easeOut',
            },
        );
    };

    const handleMouseLeave = () => {
        gsap.to(textRef.current, {
            y: '200%',
            duration: 0.5,
            ease: 'Power2.easeOut',
            rotate: -36,
        });
    };

    return (
        <div
            data-type="link"
            className={`card relative ${color} rounded-sm h-44 overflow-hidden select-none cursor-pointer`}
            onClick={onClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <div className="card__title text-neutral-50 mt-6 ml-6">{title}</div>
            <div
                ref={textRef}
                className="absolute bottom-0 w-full text-neutral-50 text-[6rem] transform translate-y-full transition-all duration-300 ease-in-out">
                {title}
            </div>
            <div className="absolute bottom-0 right-0 pr-8 pb-8 text-neutral-50">
                <Icon name="arrow-outward" rotate="90" />
            </div>
        </div>
    );
};

export default Card;
