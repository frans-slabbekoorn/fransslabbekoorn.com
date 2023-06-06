import React, { type CSSProperties } from 'react';

interface IconProps {
    name: string;
    rotate?: '90' | '180' | '270';
}

const Icon = ({ name, rotate }: IconProps) => {
    // Replace - with _ to match material icons
    name = name.replace('-', '_');

    const style: CSSProperties = {};

    if (rotate) {
        style.transform = `rotate(${rotate}deg)`;
    }

    return (
        <i className="icon material-icons inline-block align-middle w-4 h-4" style={style}>
            {name}
        </i>
    );
};

export default Icon;
