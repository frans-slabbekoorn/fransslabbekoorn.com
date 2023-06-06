import React, { forwardRef } from 'react';

import ProjectRow from '~components/misc/ProjectRow';

const projects = [
    {
        name: 'Project 1',
        image: '/assets/images/project1.jpg',
    },
    {
        name: 'Project 2',
        image: '/assets/images/project2.png',
    },
    // Add more projects as needed
];

// This component is currently not in use but is intended for future use.

const ProjectSection = forwardRef<HTMLElement>((props, ref) => {
    return (
        <>
            <section ref={ref} className="px-8 pb-16 sm:px-12 md:px-16 lg:px-32 bg-primary-950">
                <h3 className="text-2xl pt-48 text-neutral-50">Projects</h3>
                <p className="text-sm mt-8 font-regular text-neutral-100 w-full sm:w-3/6">
                    Projects are at the heart of my journey as a software developer. From building
                    scalable APIs to crafting robust backend systems, I&apos;ve tackled various
                    challenges. I&apos;m always eager to embark on new projects, bringing my
                    expertise and passion to create innovative solutions that drive success.
                </p>
                <div className="pt-16">
                    {projects.map((project, index) => (
                        <ProjectRow key={index} name={project.name} />
                    ))}
                </div>
            </section>
            <div className="absolute w-full  h-16 bg-primary-950 rounded-bl-[32px] rounded-br-[32px] sm:rounded-bl-[96px] sm:rounded-br-[96px]" />
        </>
    );
});

ProjectSection.displayName = 'ProjectsSection';

export default ProjectSection;
