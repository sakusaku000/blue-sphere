module.exports = {
    purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
    darkMode: "class", // or 'media' or 'class'
    theme: {
        fontFamily:{
            sans:["Inter", "sans-serif"],
            title:["Montserrat", "sans-serif"]
        },
        extend:{
            colors:{
                brand:{
                    light:"#95cafe",
                    dark:"#8bbaf4"
                }
            }
        }
    },
    variants: {
        extend: {},
    },
    important: true,
}