import { createEyes } from 'eyes-next';

type Events = {
    ProjectLinkClicked: { name: string; url: string };
    SocialLinkClicked: { platform: string };
    AboutVisited: undefined;
};

export const { useEyes, track } = createEyes<Events>();
