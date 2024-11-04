// pages/projects.tsx
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    const projects = [
        { id: 1, title: 'Project One', description: 'Description of project one.' },
        { id: 2, title: 'Project Two', description: 'Description of project two.' },
    ];

    return (
        <Layout>
            <h2 className="text-3xl">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </Layout>
    );
};

export default Projects;
