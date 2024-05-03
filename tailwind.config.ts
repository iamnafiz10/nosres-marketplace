const flowbite = require("flowbite-react/tailwind");
import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        './node_modules/flowbite/**/*.js',
        './node_modules/flowbite-react/lib/esm/**/*.js',
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
                'graycolor': "#828D9E",
                'bordercolor': "#a1a1a1db",
            }
        },
    },
    plugins: [
        require('flowbite/plugin'),
    ],
};
export default config;