/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        "./src/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                border_title: 'rgb(99, 115, 129)',
                border_contents: 'rgb(90, 164, 255)',
                border_card: 'rgb(160, 188, 229)',
                border4: 'rgb(79, 70, 229)',
                border5: 'rgb(90, 164, 255)',
            },
        },
    },
    plugins: [],
}

