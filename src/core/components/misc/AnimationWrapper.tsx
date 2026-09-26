import React from 'react';
import type { FC } from 'react';

import useBinaryTextAnimation from '~hooks/useBinaryTextAnimation';

interface TextWrapperProps {
    children: string;
    speed?: number;
    delay?: number;
}

const TextWrapper: FC<TextWrapperProps> = ({ children, speed = 0.03, delay = 0.1 }) => {
    const textRef = useBinaryTextAnimation(children, speed, delay);

    // Screen readers get the real text, the scrambled copy is only visual
    return (
        <span>
            <span className="sr-only">{children}</span>
            <span ref={textRef} aria-hidden="true">
                {children}
            </span>
        </span>
    );
};

export default TextWrapper;
