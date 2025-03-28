import Image from 'next/image'


export default function Team() {
    return (
        <div className="min-h-screen">
            <div className="flex flex-col items-center justify-center min-h-screen gap-4 pt-10 pb-10">
                <h1 className="text-6xl">Meet our team</h1>
                <div className="grid grid-cols-2 grid-rows-4 gap-25 mt-6 px-10 max-w-screen">
                    <div className="grid-item flex flex-col text-center items-center mt-6">
                        <Image className="filter dark:invert" width={150} height={150} alt="Placeholder" src="/profile.png" />
                        <h2 className="text-4xl mt-6">Isac Almqvist</h2>
                        <p className="text-lg">Developer</p>
                        <p className="text-lg">isac@decisiontree.se</p>
                    </div>
                    <div className="grid-item flex flex-col text-center items-center mt-6">
                        <Image className="filter dark:invert" width={150} height={150} src="/profile.png" alt="Placeholder" />
                        <h2 className="text-4xl mt-6">Lukas Andersson</h2>
                        <p className="text-lg">Developer</p>
                        <p className="text-lg">lukas@decisiontree.se</p>
                    </div>
                    <div className="grid-item flex flex-col text-center items-center mt-6">
                        <Image className="filter dark:invert" width={150} height={150} src="/profile.png" alt="Placeholder" />
                        <h2 className="text-4xl mt-6">Malte Berg</h2>
                        <p className="text-lg">SCRUM Master</p>
                        <p className="text-lg">malte@decisiontree.se</p>
                    </div>
                    <div className="grid-item flex flex-col text-center items-center mt-6">
                        <Image className="filter dark:invert" width={150} height={150} src="/profile.png" alt="Placeholder" />
                        <h2 className="text-4xl mt-6">Zhengan Chen</h2>
                        <p className="text-lg">Developer</p>
                        <p className="text-lg">chen@decisiontree.se</p>
                    </div>
                    <div className="grid-item flex flex-col text-center items-center mt-6">
                        <Image className="filter dark:invert" width={150} height={150} src="/profile.png" alt="Placeholder" />
                        <h2 className="text-4xl mt-6">Mostafa Faik</h2>
                        <p className="text-lg">Developer</p>
                        <p className="text-lg">mostafa@decisiontree.se</p>
                    </div>
                    <div className="grid-item flex flex-col text-center items-center mt-6">
                        <Image className="filter dark:invert" width={150} height={150} src="/profile.png" alt="Placeholder" />
                        <h2 className="text-4xl mt-6">Albert Falck</h2>
                        <p className="text-lg">Product Owner</p>
                        <p className="text-lg">albert@decisiontree.se</p>
                    </div>
                    <div className="grid-item flex flex-col text-center items-center mt-6">
                        <Image className="filter dark:invert" width={150} height={150} src="/profile.png" alt="Placeholder" />
                        <h2 className="text-4xl mt-6">Arvin Mardukh</h2>
                        <p className="text-lg">Developer</p>
                        <p className="text-lg">arvin@decisiontree.se</p>
                    </div>
                    <div className="grid-item flex flex-col text-center items-center mt-6">
                        <Image className="filter dark:invert" width={150} height={150} src="/profile.png" alt="Placeholder" />
                        <h2 className="text-4xl mt-6">Viktor Sandström</h2>
                        <p className="text-lg">Developer</p>
                        <p className="text-lg">viktor@decisiontree.se</p>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-4 mt-20">
                    <h1 className="text-6xl">Contact us</h1>
                    <p className="text-lg">To get in contact with the team, send an email to <a className="hover:text-blue-400" href="mailto:contact@decisiontree.se">contact@decisiontree.se</a></p>
                </div>
            </div>
        </div>
    )
}