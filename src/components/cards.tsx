import {useState} from "react";

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./ui/dialog";

interface Props {
    name: string;
    image: string;
    species: string;
    location: any;
    gender: string;
}
export function Cards({name, image, species, location, gender}: Props) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            {/* className="relative overflow-hidden transition-all rounded-lg duration-400 drop-shadow-lg w-fit hover:shadow-lg hover:shadow-primary-800 "
           onClick={() => setIsOpen(!isOpen)}
       
           {isOpen ? (
                <div className="relative">
                    <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full text-white from-primary-200 from-primary-800 bg-gradient-to-r ">
                        <h2 className="text-2xl">{name}</h2>

                        <span>{species}</span>
                        <span>{location.name}</span>
                    </div>
                    <img alt={name} className="opacity-0 " src={image} />
                </div>
            ) : (
                <img alt={name} src={image} />
            )} */}
            <Dialog>
                <DialogTrigger asChild>
                    <img alt="dada" className="rounded-lg" src={image} />
                </DialogTrigger>
                <DialogContent className="bg-black from-myprimary-200 from-myprimary-800 bg-gradient-to-r">
                    <DialogHeader>
                        <div className="flex justify-center">
                            <div className="w-56 p-4 bg-white border border-black rounded-lg">
                                <DialogDescription className="flex justify-center pb-4">
                                    <div className="border border-black ">
                                        <img alt="hola" src={image} />
                                    </div>
                                </DialogDescription>

                                <DialogTitle>
                                    <div className="flex justify-center"> {name}</div>
                                </DialogTitle>
                                <DialogDescription>
                                    <div className="flex justify-center">Species: {species}</div>
                                </DialogDescription>
                                <DialogDescription>
                                    <div className="flex justify-center">Gender: {gender}</div>
                                </DialogDescription>
                            </div>
                        </div>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
}
