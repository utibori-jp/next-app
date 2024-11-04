// components/Layout.tsx
import Link from 'next/link';
import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode; // childrenの型を指定
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <header className="bg-gray-800 text-white p-4">
                <h1 className="text-2xl">My Portfolio</h1>
                <nav>
                    <Link href="/">Home</Link>
                    <Link href="/projects" className="ml-4">Projects</Link>
                </nav>
            </header>
            <main className="p-4">{children}</main>
            <footer className="bg-gray-800 text-white p-4 text-center">
                &copy; {new Date().getFullYear()} My Portfolio
            </footer>
        </div>
    );
};

export default Layout;
