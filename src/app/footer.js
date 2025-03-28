

export default function Footer() {
    return (
        <div className="bg-gray-800 text-white relative w-full text-center flex flex-col md:flex-row items-center justify-center py-4 gap-2">
            <p className="text-center">
                © 2025 Team Decisiontree
            </p>
            <span className="mx-2 md:block hidden">|</span>
            <a className="text-blue-600 hover:text-blue-800 dark:text-blue-300" href="mailto:contact@decisiontree.se" target="_blank">contact@decisiontree.se</a>
            <span className="mx-2 md:block hidden">|</span>
            <a className="text-blue-600 hover:text-blue-800 dark:text-blue-300" href="https://github.com/TeamDecisiontree">Github</a>
        </div>
    )
}