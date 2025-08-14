import ProjectsHeader from '../components/ProjectsHeader';
import ProjectCard from '../components/ProjectCard';
import ProjectFilter from '../components/ProjectFilter';
import NavBar from '../components/NavBar';

// Dummy project data
const projects = [
    {
        id: 1,
        title: 'Okari',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        year: '2025',
        imageSrc: '/assets/projects/project.png',
        imageAlt: 'Okari project showcase',
    },
    {
        id: 2,
        title: 'Nexus',
        description:
            'A modern digital platform that revolutionizes user experience through innovative design principles.',
        year: '2024',
        imageSrc: '/assets/projects/project-card-bg.png',
        imageAlt: 'Nexus project showcase',
    },
    {
        id: 3,
        title: 'Zenith',
        description:
            'Creative solution focused on minimalistic approach and sustainable development practices.',
        year: '2024',
        imageSrc: '/assets/hero-background.png',
        imageAlt: 'Zenith project showcase',
    },
    {
        id: 4,
        title: 'Vertex',
        description:
            'Technical implementation showcasing cutting-edge technology integration  .',
        year: '2023',
        imageSrc: '/assets/projects/project.png',
        imageAlt: 'Vertex project showcase',
    },
    {
        id: 5,
        title: 'Lumina',
        description:
            'Brand identity project that captures the essence of modern aesthetics and timeless design.',
        year: '2023',
        imageSrc: '/assets/projects/project-card-bg.png',
        imageAlt: 'Lumina project showcase',
    },
    {
        id: 6,
        title: 'Echo',
        description:
            'Digital transformation initiative that bridges traditional values with contemporary innovation.',
        year: '2022',
        imageSrc: '/assets/hero-background.png',
        imageAlt: 'Echo project showcase',
    },
];

export default function Projects() {
    return (
        <div className="bg-black">
            {/* Projects Header */}
            <NavBar />
            <ProjectsHeader />

            {/* Project Filter */}
            <ProjectFilter />

            {/* Projects Grid */}
            <section className="w-full bg-black py-[3.125rem]">
                <div className="mx-auto px-[1rem] md:px-[2rem] lg:px-[5rem]">
                    <div className="grid grid-cols-1 gap-[2.5rem] md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                        {projects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                title={project.title}
                                description={project.description}
                                year={project.year}
                                imageSrc={project.imageSrc}
                                imageAlt={project.imageAlt}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
