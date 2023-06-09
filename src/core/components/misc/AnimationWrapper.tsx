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

    return <span ref={textRef}>{children}</span>;
};

export default TextWrapper;
