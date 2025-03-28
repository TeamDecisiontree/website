import Image from 'next/image'


export default function Team() {
    return (
        <div className="min-h-screen">
            <div className="flex flex-col items-center justify-center min-h-screen gap-4 pt-10 pb-10">
                <h1 className="md:text-6xl text-4xl">Meet our team</h1>
                <div className="grid md:grid-cols-2 md:grid-rows-4 grid-cols-1 grid-rows-8 gap-25 mt-6 px-10 max-w-screen">
                    <div className="grid-item flex flex-col text-center items-center mt-6">
                        <Image className="filter dark:invert" width={150} height={150} alt="Placeholder" src="/profile.png" />
                        <h2 className="text-xl md:text-4lg mt-6">Isac Almqvist</h2>
                        <p className="text-lg">Developer</p>
                        <a className="text-lg hover:text-blue-700 text-blue-500" target="_blank" href="mailto:isac@decisiontree.se">isac@decisiontree.se</a>
                    </div>
                    <div className="grid-item flex flex-col text-center items-center mt-6">
                        <Image className="filter dark:invert" width={150} height={150} src="/profile.png" alt="Placeholder" />
                        <h2 className="text-xl md:text-4lg mt-6">Lukas Andersson</h2>
                        <p className="text-lg">Developer</p>
                        <a className="text-lg hover:text-blue-700 text-blue-500" target="_blank" href="mailto:lukas@decisiontree.se">lukas@decisiontree.se</a>
                    </div>
                    <div className="grid-item flex flex-col text-center items-center mt-6">
                        <Image className="filter dark:invert" width={150} height={150} src="/profile.png" alt="Placeholder" />
                        <h2 className="text-xl md:text-4lg mt-6">Malte Berg</h2>
                        <p className="text-lg">Scrum Master</p>
                        <a className="text-lg hover:text-blue-700 text-blue-500" target="_blank" href="mailto:malte@decisiontree.se">malte@decisiontree.se</a>
                    </div>
                    <div className="grid-item flex flex-col text-center items-center mt-6">
                        <Image className="filter dark:invert" width={150} height={150} src="/profile.png" alt="Placeholder" />
                        <h2 className="text-xl md:text-4lg mt-6">Zhengan Chen</h2>
                        <p className="text-lg">Developer</p>
                        <a className="text-lg hover:text-blue-700 text-blue-500" target="_blank" href="mailto:chen@decisiontree.se">chen@decisiontree.se</a>
                    </div>
                    <div className="grid-item flex flex-col text-center items-center mt-6">
                        <Image className="filter dark:invert" width={150} height={150} src="/profile.png" alt="Placeholder" />
                        <h2 className="text-xl md:text-4lg mt-6">Mostafa Faik</h2>
                        <p className="text-lg">Developer</p>
                        <a className="text-lg hover:text-blue-700 text-blue-500" target="_blank" href="mailto:mostafa@decisiontree.se">mostafa@decisiontree.se</a>
                    </div>
                    <div className="grid-item flex flex-col text-center items-center mt-6">
                        <Image className="filter dark:invert" width={150} height={150} src="/profile.png" alt="Placeholder" />
                        <h2 className="text-xl md:text-4lg mt-6">Albert Falck</h2>
                        <p className="text-lg">Product Owner</p>
                        <a className="text-lg hover:text-blue-700 text-blue-500" target="_blank" href="mailto:albert@decisiontree.se">albert@decisiontree.se</a>
                    </div>
                    <div className="grid-item flex flex-col text-center items-center mt-6">
                        <Image className="filter dark:invert" width={150} height={150} src="/profile.png" alt="Placeholder" />
                        <h2 className="text-xl md:text-4lg mt-6">Arvin Mardukh</h2>
                        <p className="text-lg">Developer</p>
                        <a className="text-lg hover:text-blue-700 text-blue-500" target="_blank" href="mailto:arvin@decisiontree.se">arvin@decisiontree.se</a>
                    </div>
                    <div className="grid-item flex flex-col text-center items-center mt-6">
                        <Image className="filter dark:invert" width={150} height={150} src="/profile.png" alt="Placeholder" />
                        <h2 className="text-xl md:text-4lg mt-6">Viktor Sandström</h2>
                        <p className="text-lg">Developer</p>
                        <a className="text-lg hover:text-blue-700 text-blue-500" target="_blank" href="mailto:viktor@decisiontree.se">viktor@decisiontree.se</a>
                    </div>
                </div>
                <div className="flex flex-col items-center text-center gap-4 mt-20 mb-10">
                    <h1 className="text-6xl">Contact us</h1>
                    <p className="text-lg p-10 md:p-0">To get in contact with the team, send an email to <a className="hover:text-blue-700 text-blue-500" href="mailto:contact@decisiontree.se" target="_blank" >contact@decisiontree.se</a></p>
                </div>
            </div>
        </div>
    )
}