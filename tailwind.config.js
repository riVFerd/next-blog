/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
        './src/app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                'primary-light': '#f0f0f0',
                'primary-dark': '#262626',
                'secondary-dark': '#060606',
                'accent-blue': '#007aff',
                'muted': "hsl(200 40% 86.1%)",
                'dark-muted': "hsl(230 20% 20%)",
            }
        },
    },
    plugins: [],
}
