import React from 'react';
import type { FC } from 'react';

import AnimationWrapper from '~components/misc/AnimationWrapper';

interface Props {
    name: string;
}

const ProjectRow: FC<Props> = ({ name }) => {
    return (
        <div className="relative pt-8" data-type="image">
            <div className="row text-base text-neutral-100">
                <AnimationWrapper>{name}</AnimationWrapper>
                <sup>(2023)</sup>
                <hr className="h-px border-neutral-700 mt-4" />
            </div>
        </div>
    );
};

export default ProjectRow;
