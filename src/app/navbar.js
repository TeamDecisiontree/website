import Link from 'next/link';

export default function Navbar() {
    return (
        <div className="bg-gray-800 text-white p-6 justify-start flex drop-shadow-2xl">
            <h1 className="text-4xl">Team Decisiontree</h1>
            <div className="justify-items-end space-x-4 text-2xl mx-auto flex flex-row justify-center items-center text-center mr-1">
                <Link href="/" className="hover:text-blue-400">Home</Link>
                <a href="/team" className="hover:text-blue-400">About us</a>
                <a href="/sprints" className="hover:text-blue-400">Sprints</a>
                <a href="/expo" className="hover:text-blue-400">Expo</a>
            </div>
        </div>
    );
}