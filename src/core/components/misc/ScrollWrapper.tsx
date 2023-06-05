'use client';

import React, { type ReactNode, useRef } from 'react';

import useScaleAnimation from '~hooks/useScrollAnimation';

interface Props {
    children?: string | ReactNode;
    scale?: number;
    x?: number;
    className?: string;
}

const ScrollWrapper = ({ children, x = -10, className }: Props) => {
    const elementRef = useRef(null);

    useScaleAnimation(elementRef, { x });

    return (
        <div ref={elementRef} className={`scroll-animation${className ? ` ${className}` : ''}`}>
            {children}
        </div>
    );
};

export default ScrollWrapper;
