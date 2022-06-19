const colors = require("tailwindcss/colors");

module.exports = {
    purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
    darkMode: "class", // or 'media' or 'class'
    theme: {
        fontFamily:{
            sans:["Gibson Regular", "sans-serif"],
            title:["Gibson SemiBold", "sans-serif"]
        },
        extend:{
            colors:{
                brand:{
                    light:"#95cafe",
                    dark:"#8bbaf4"
                },
                neutral:colors.neutral
            }
        }
    },
    variants: {
        extend: {},
    },
    important: true,
}