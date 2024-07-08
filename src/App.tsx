import {Cards} from "./components/cards";
import {Title} from "./components/title";
import {useApiData} from "./services/rickandmorty-api";
import {Footer} from "./components/ui/footer";
import {Footertwo} from "./components/ui/footertwo";
import {Comment} from "./components/Comment";
import {Header} from "./components/ui/header";

function App() {
    const {characters} = useApiData();

    return (
        <div className="flex flex-col min-h-screen bg-black">
            <Title />
            <Header />
            <div className="container grid items-center justify-center w-full grid-cols-1 gap-10 pt-14 md:grid-cols-6">
                {characters.map((character) => (
                    <Cards
                        key={character.id}
                        gender={character.gender}
                        image={character.image}
                        location={character.location}
                        name={character.name}
                        species={character.species}
                    />
                ))}
            </div>
            <Comment />
            <Footertwo />
            <Footer />
        </div>
    );
}

export default App;
