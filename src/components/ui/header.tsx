import "../../index.css";
export function Header() {
    return (
        <div className="flex items-center justify-center w-full">
            <h2
                className="relative w-[max-content] font-mono
        before:absolute before:inset-0 before:animate-typewriter
        before:bg-black
        after:absolute after:inset-0 after:w-[0.125em] after:animate-caret
        after:bg-white text-white"
            >
                Click on your favorite characters and get information about them...
            </h2>
        </div>
    );
}
