import Image from 'next/image'

export default function Sprints() {
    return (
        <div className="min-h-screen">
            <div className="flex flex-col items-center justify-center min-h-screen gap-4 pt-10 pb-10">
                <h1 className="md:text-6xl text-4xl">Sprints</h1>
                <h2 className="md:text-4xl text-2xl pt-20">Sprint 1</h2>
                <div className="grid md:grid-rows:1 md:grid-cols-3 grid-rows-2 grid-cols-1 md:gap-40 gap-10 mt-6 px-10 max-w-screen">
                    <div className="grid-item flex flex-col mt-6 items-center justify-center">
                        <Image width={400} height={200} src="/simple_combat.gif" alt="Simple Combat GIF" />
                        <Image width={400} height={200} src="/stats.gif" alt="Stats Screen GIF" />
                    </div>
                    <div className='grid-item flex flex-col mt-6 text-justify col-span-2'>
                        <h3 className='text-3xl text-center font-semibold italic'>Sprint Goal: Implement combat and main menu</h3>
                        <p className='text-2xl'>
                            The goal for sprint 1 was to implement the combat system as well as the main menu. 
                            This goal was reached. <br/><br/> In this sprint we managed to accomplish:
                        </p>
                        <ul className='text-2xl list-disc list-inside'>
                            <li>Combat system</li>
                            <li>Inventory</li>
                            <li>Stats</li>
                            <li>Skill tree with 3 implemented abilities</li>
                            <li>Some graphics</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}