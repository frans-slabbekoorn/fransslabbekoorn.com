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
    const textRef = useRef<HTMLSpanElement>(null);

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
        <button
            type="button"
            data-type="link"
            className={`card relative block w-full text-left ${color} rounded-sm h-44 overflow-hidden select-none cursor-pointer`}
            onClick={onClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onFocus={handleMouseEnter}
            onBlur={handleMouseLeave}>
            <span className="card__title block text-neutral-50 mt-6 ml-6">{title}</span>
            <span
                ref={textRef}
                aria-hidden="true"
                className="absolute bottom-0 w-full text-neutral-50 text-[6rem] transform translate-y-full transition-all duration-300 ease-in-out">
                {title}
            </span>
            <span
                className="absolute bottom-0 right-0 pr-8 pb-8 text-neutral-50"
                aria-hidden="true">
                <Icon name="arrow-outward" rotate="90" />
            </span>
        </button>
    );
};

export default Card;
