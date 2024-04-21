import type {Config} from "tailwindcss";

const flowbite = require("flowbite-react/tailwind");

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        flowbite.content(),
    ],
    theme: {
        screens: {
            sm: '576px',
            md: '768px',
            lg: '992px',
            xl: '1100px',
        },
        container: {
            center: true,
            padding: '1rem',
        },
        extend: {
            colors: {
                'primary': "#4D7FB8",
                'prgcolor': "#39393b",
            }
        },
    },
    plugins: [
        flowbite.plugin(),
    ],
};
export default config;
