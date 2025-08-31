export const SOCIAL_LINKS = {
    DISCORD: 'https://discord.gg/premierstudios ',
    INSTAGRAM: 'https://instagram.com/@premierstudiosmc',
    TWITTER: 'https://x.com/PremierStudiosX',
};

export const MINECRAFT_SITE_LINK = '';
export const CONTACT_US_LINK = '/contact-us';

export const PHONE_NUMBER = '+44 20 7946 0990';
export const EMAIL = 'hello@premierstudios.net';
export const ADDRESS = '123 Pixel Lane, London, UK, SW1A 1AA';

export interface Project {
    id: number;
    title: string;
    description: string;
    year: string;
    imageSrc: string;
    imageAlt: string;
    category: 'creative' | 'technical' | 'writing';
}

export const PROJECTS_DATA: Project[] = [
    {
        id: 1,
        title: 'Okari',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        year: '2025',
        imageSrc: '/assets/projects/project.png',
        imageAlt: 'Okari project showcase',
        category: 'creative',
    },
    {
        id: 2,
        title: 'Nexus',
        description:
            'A modern digital platform that revolutionizes user experience through innovative design principles.',
        year: '2024',
        imageSrc: '/assets/projects/project-card-bg.png',
        imageAlt: 'Nexus project showcase',
        category: 'technical',
    },
    {
        id: 3,
        title: 'Zenith',
        description:
            'Creative solution focused on minimalistic approach and sustainable development practices.',
        year: '2024',
        imageSrc: '/assets/hero-background.png',
        imageAlt: 'Zenith project showcase',
        category: 'creative',
    },
    {
        id: 4,
        title: 'Vertex',
        description:
            'Technical implementation showcasing cutting-edge technology integration  .',
        year: '2023',
        imageSrc: '/assets/projects/project.png',
        imageAlt: 'Vertex project showcase',
        category: 'technical',
    },
    {
        id: 5,
        title: 'Lumina',
        description:
            'Brand identity project that captures the essence of modern aesthetics and timeless design.',
        year: '2023',
        imageSrc: '/assets/projects/project-card-bg.png',
        imageAlt: 'Lumina project showcase',
        category: 'creative',
    },
    {
        id: 6,
        title: 'Echo',
        description:
            'Digital transformation initiative that bridges traditional values with contemporary innovation.',
        year: '2022',
        imageSrc: '/assets/hero-background.png',
        imageAlt: 'Echo project showcase',
        category: 'writing',
    },
];
