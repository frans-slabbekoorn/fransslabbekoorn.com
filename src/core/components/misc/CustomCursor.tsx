import React from 'react';
import type { FC } from 'react';

import useMouseTrailer from '~hooks/useMouseTrailer';

const MouseTrailer: FC = () => {
    const { trailerRef, cursorRef, interacting } = useMouseTrailer();

    if (typeof window !== 'undefined' && 'ontouchstart' in window) {
        return null;
    }

    return (
        <div id="trailer" ref={trailerRef} className="fixed pointer-events-none z-40">
            <div
                ref={cursorRef}
                className="w-3 h-3 bg-neutral-950/60 backdrop-blur-md rounded-full"
            />
            {interacting && (
                <span className="text-neutral-50 text-sm absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    GO TO
                </span>
            )}
        </div>
    );
};

export default MouseTrailer;
