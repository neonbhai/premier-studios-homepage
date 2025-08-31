import ProjectsHeader from '../components/ProjectsHeader';
import ProjectCard from '../components/ProjectCard';
import ProjectFilter from '../components/ProjectFilter';
import NavBar from '../components/NavBar';
import ScrollAnimatedSection from '../components/scroll-animated-section';
import { PROJECTS_DATA } from '../../CONSTS';

export default function Projects() {
    return (
        <div className="bg-[#050505]">
            {/* Projects Header */}
            <NavBar transparent />
            <ProjectsHeader />

            {/* Project Filter */}
            <ProjectFilter />

            {/* Projects Grid */}
            <section className="w-full bg-[#050505] py-[3.125rem]">
                <div className="mx-auto px-[1rem] md:px-[2rem] lg:px-[5rem]">
                    <div className="grid grid-cols-1 gap-[2.5rem] md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                        {PROJECTS_DATA.map((project) => (
                            <ScrollAnimatedSection
                                key={project.id}
                                delay={0}
                                duration={0.5}
                                ease="power2.out"
                            >
                                <ProjectCard
                                    title={project.title}
                                    description={project.description}
                                    year={project.year}
                                    imageSrc={project.imageSrc}
                                    imageAlt={project.imageAlt}
                                />
                            </ScrollAnimatedSection>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
