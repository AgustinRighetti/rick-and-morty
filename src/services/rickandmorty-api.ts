import {useState, useEffect} from "react";

interface Character {
    id: number;
    name: string;
    image: string;
    species: string;
    location: string;
    gender: string;
}

export function useApiData() {
    const [characters, setCharacters] = useState<Character[]>([]);

    const getData = () => {
        fetch("https://rickandmortyapi.com/api/character")
            .then((res) => res.json())
            .then((agu) => setCharacters(agu.results));
    };

    console.log(characters);
    useEffect(() => {
        getData();
    }, []);

    return {
        characters,
    };
}
