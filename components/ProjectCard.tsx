// components/ProjectCard.tsx
import Link from 'next/link';

// プロジェクトの型を定義
interface Project {
    id: number; // プロジェクトのID
    title: string; // プロジェクトのタイトル
    description: string; // プロジェクトの説明
}

interface ProjectCardProps {
    project: Project; // projectの型をProjectに変更
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className="border rounded p-4">
            <h3 className="text-xl">{project.title}</h3>
            <p>{project.description}</p>
            <Link href={`/projects/${project.id}`} className="text-blue-500">View Details</Link>
        </div>
    );
};

export default ProjectCard;
