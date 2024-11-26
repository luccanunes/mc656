import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
    default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class", // Adicionando o modo escuro
    theme: {
        extend: {
            fontFamily: {
                inter: ["Inter", "sans-serif"],
            },
            colors: {
                "black-100": "#2B2C35",
                "primary-blue": {
                    DEFAULT: "#2B59FF",
                    100: "#F5F8FF",
                },
                "secondary-orange": "#f79761",
                "light-white": {
                    DEFAULT: "rgba(59,60,152,0.03)",
                    100: "rgba(59,60,152,0.02)",
                },
                grey: "#747A88",
                ...colors, // Incluindo todas as cores padrão do Tailwind
            },
            boxShadow: {
                input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`, // Adicionando o estilo de sombra personalizado
            },
            backgroundImage: {
                pattern: "url('/pattern.png')",
                "hero-bg": "url('/hero-bg.png')",
            },
            animation: {
                scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
            },
            keyframes: {
                scroll: {
                    to: {
                        transform: "translate(calc(-50% - 0.5rem))",
                    },
                },
            },
        },
    },
    plugins: [
        addVariablesForColors, // Incluindo a função de variáveis CSS para cores
    ],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
    let allColors = flattenColorPalette(theme("colors"));
    let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );

    addBase({
        ":root": newVars,
    });
}
