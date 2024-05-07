/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
        extend: {
            colors: {
                // Define your custom colors here
                customMainColor: '#00BCD4',
            },
            filter: {
                grayscale: 'grayscale(100%)', // Define your custom filter here
            },
        },
    },
  plugins: [],
};
