import Sprint from './sprint'

export default function Sprints() {
    return (
        <div className="min-h-screen flex flex-col items-center">
            <div className="flex flex-col items-center justify-center min-h-screen gap-4 pt-10 pb-10 md:max-w-3/4">
                <h1 className="md:text-6xl text-4xl">Sprints</h1>
                <Sprint
                    sprintNr={1}
                    images={[
                        { src: "/sprint1_1.gif", alt: "Stats screen GIF" },
                        { src: "/sprint1_2.gif", alt: "Simple combat GIF" }
                    ]}
                    goal="Implement combat and main menu"
                    desc={
                        "The goal for sprint 1 was to implement the combat system as well as the main menu. This goal was reached."
                    }
                    listHeader={
                        "In this sprint we managed to accomplish:"
                    }
                    list={[
                        "Combat system",
                        "Inventory",
                        "Stats",
                        "Skill tree with 3 implemented abilities",
                        "Some graphics"
                    ]}
                />
                <Sprint
                    sprintNr={2}
                    images={[
                        { src: "/sprint2_1.png", alt: "Sprint 2 image 1" },
                        { src: "/sprint2_2.png", alt: "Sprint 2 image 2" }
                    ]}
                    goal="Implement ability system and enemy AI"
                    desc={
                        "The goal for sprint 2 was to implement the ability system and enemy AI. This goal was reached."
                    }
                    listHeader={
                        "In this sprint we managed to accomplish:"
                    }
                    list={[
                        "Abilities",
                        "Skill tree with 4 implemented abilities",
                        "Enemy AI",
                        "Some graphics and animations"
                    ]}
                />
                <Sprint
                    sprintNr={3}
                    images={[
                        { src: "/sprint3_1.png", alt: "Sprint 3 image 1" },
                        { src: "/sprint3_2.png", alt: "Sprint 3 image 2" }
                    ]}
                    goal="Implement progression systems, enemy difficulty scaling and a tutorial"
                    desc={
                        "The goal for sprint 3 was to implement the progression systems, enemy difficulty scaling and a tutorial. This goal was reached but more fine-tuning is still in progress."
                    }
                    listHeader={
                        "In this sprint we managed to accomplish:"
                    }
                    list={[
                        "Progression systems",
                        "Enemy difficulty scaling",
                        "Tutorial",
                        "Some graphics and animations",
                        "Sound effects",
                        "Music",
                        "UI improvements"
                    ]}
                />
            </div>
        </div>
    )
}