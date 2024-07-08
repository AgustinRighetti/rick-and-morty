import {useState} from "react";

interface Props {
    name: string;
    image: string;
    species: string;
}
export function Cards({name, image, species}: Props) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="relative overflow-hidden transition-all rounded-lg duration-400 drop-shadow-lg w-fit hover:shadow-lg hover:shadow-primary-800 "
            onClick={() => setIsOpen(!isOpen)}
        >
            {isOpen ? (
                <div className="relative">
                    <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full text-white from-primary-200 from-primary-800 bg-gradient-to-r ">
                        <h2 className="text-2xl">{name}</h2>

                        <span>{species}</span>
                    </div>
                    <img alt={name} className="opacity-0 " src={image} />
                </div>
            ) : (
                <img alt={name} src={image} />
            )}
        </div>
    );
}
