import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-gray-800 text-white p-6 justify-start flex drop-shadow-2xl w-screen">
            <h1 className="lg:text-4xl text-lg ">Team Decisiontree</h1>
            <div className="justify-items-end space-x-4 lg:text-2xl text-md mx-auto flex flex-row justify-center items-center text-center lg:mr-2 lg:gap-2">
                <Link href="/" className="hover:text-blue-400">Home</Link>
                <a href="/team" className="hover:text-blue-400">About us</a>
                <a href="/sprints" className="hover:text-blue-400">Sprints</a>
                <a href="/expo" className="hover:text-blue-400">Expo</a>
            </div>
        </nav>
    );
}