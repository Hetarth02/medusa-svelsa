/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {},
    },
    daisyui: {
        themes: false,
    },
    plugins: [require("daisyui")],
};
