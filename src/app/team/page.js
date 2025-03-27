
export default function Team() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center min-h-screen gap-4 mt-10">
                <h1 className="text-6xl">Meet our team</h1>
                <div className="grid grid-cols-2 grid-rows-4 gap-20 mt-6 px-10 max-w-screen">
                    <div className="grid-item flex flex-col text-center items-center gap-4">
                        <img className="size-60" src="https://th.bing.com/th/id/OIP.F2zXcQvddzx5yuC0HNlohQHaHa?rs=1&pid=ImgDetMain" alt="Placeholder" />
                        <h2 className="text-4xl">Lukas Andersson</h2>
                    </div>
                    <div className="grid-item flex flex-col text-center items-center gap-4">
                        <img className="size-60" src="https://th.bing.com/th/id/OIP.F2zXcQvddzx5yuC0HNlohQHaHa?rs=1&pid=ImgDetMain" alt="Placeholder" />
                        <h2 className="text-4xl">Lukas Andersson</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}