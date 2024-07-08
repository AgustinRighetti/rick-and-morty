/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            container: {
                center: true,
                padding: "20px",
            },
            fontFamily: {
                roboto: ["Roboto", "sans-serif"],
                lora: ["Lora", "sans-serif"],
            },
            colors: {
                primary: {
                    50: "#f3f8fc",
                    100: "#e6f0f8",
                    200: "#c7e1f0",
                    300: "#96c8e3",
                    400: "#5dabd3",
                    500: "#3891bf",
                    600: "#2874a1",
                    700: "#225d82",
                    800: "#20516f",
                    900: "#1f435b",
                    950: "#152b3c",
                },
            },
            backgroundImage: {
                background: "url('./public/footer-image.jpg')",
            },
            animation: {
                typewriter: "typewriter 2s steps(20) forwards",
                caret: "typewriter 2s steps(20) forwards, blink 1s steps(20) infinite 2s",
            },
            keyframes: {
                typewriter: {
                    to: {
                        left: "100%",
                    },
                },
                blink: {
                    "0%": {
                        opacity: "0",
                    },
                    "0.1%": {
                        opacity: "1",
                    },
                    "50%": {
                        opacity: "1",
                    },
                    "50.1%": {
                        opacity: "0",
                    },
                    "100%": {
                        opacity: "0",
                    },
                },
            },
        },
    },
    plugins: [],
};
