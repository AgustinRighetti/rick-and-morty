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
        },
    },
    plugins: [],
};
