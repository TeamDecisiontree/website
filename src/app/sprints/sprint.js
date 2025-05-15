import Image from "next/image";
import PropTypes from "prop-types";

export default function Sprint({ sprintNr, images, goal, desc, listHeader, list}) {
    return (
        <>
            <h2 className="md:text-4xl text-2xl pt-20">Sprint {sprintNr}</h2>
            <div className="grid grid-rows-2 grid-cols-1 gap-4 md:gap-8 md:grid-rows-1 md:grid-cols-3 mt-2 max-w-screen pr-6 pl-6">
                <div className="grid-item flex flex-col items-center justify-center gap-2">
                    {
                        images.map((image, index) => (
                            <Image key={"img" + index} width={400} height={200} src={image.src} alt={image.alt} className="w-auto"/>
                        ))
                    }
                </div>
                <div className='grid-item flex flex-col text-justify justify-evenly gap-2 col-span-2'>
                    <h3 className='md:text-3xl text-2xl text-center italic'>Sprint Goal: {goal}</h3>
                    <p className='md:text-xl text-lg'>
                        {desc}
                    </p>
                    <div>
                        <p className="md:text-xl text-lg">{listHeader}</p>
                        <ul className='text-lg md:text-xl list-disc list-inside'>
                            {
                                list.map((item, index) => (
                                    <li key={"item" + index}>
                                        {item}
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

Sprint.propTypes = {
    sprintNr: PropTypes.number.isRequired,
    goal: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    listHeader: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(PropTypes.string).isRequired,
    images: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired
        })
    ).isRequired
};