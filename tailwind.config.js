/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },

        extend: {
            fontFamily: {
                roboto: ["Roboto", "sans-serif"],
                lora: ["Lora", "sans-serif"],
            },
            backgroundImage: {
                background: "url('./public/footer-image.jpg')",
            },
            colors: {
                myprimary: {
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
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
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

                "accordion-down": {
                    from: {height: "0"},
                    to: {height: "var(--radix-accordion-content-height)"},
                },
                "accordion-up": {
                    from: {height: "var(--radix-accordion-content-height)"},
                    to: {height: "0"},
                },
            },
            animation: {
                typewriter: "typewriter 2s steps(20) forwards",
                caret: "typewriter 2s steps(20) forwards, blink 1s steps(20) infinite 2s",
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
