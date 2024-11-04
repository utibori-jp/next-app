// pages/projects/[id].tsx
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

const ProjectDetail = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <Layout>
            <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-4xl font-bold mb-4">Project {id}</h2>
                <p className="text-lg text-gray-700">
                    Details about project {id} will go here. This could include descriptions, features,
                    technologies used, and any other relevant information that showcases the project.
                </p>

                <div className="mt-6">
                    <h3 className="text-2xl font-semibold mb-2">Project Highlights</h3>
                    <ul className="list-disc list-inside">
                        <li>Highlight 1: Brief description.</li>
                        <li>Highlight 2: Brief description.</li>
                        <li>Highlight 3: Brief description.</li>
                    </ul>
                </div>

                <div className="mt-6">
                    <h3 className="text-2xl font-semibold mb-2">Technologies Used</h3>
                    <p className="text-gray-600">React, Next.js, Tailwind CSS, and more.</p>
                </div>

                <div className="mt-6">
                    <h3 className="text-2xl font-semibold mb-2">Links</h3>
                    <a href="#" className="text-blue-500 hover:underline">View on GitHub</a>
                </div>
            </div>
        </Layout>
    );
};

export default ProjectDetail;
