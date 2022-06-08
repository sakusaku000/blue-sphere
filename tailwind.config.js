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
                brand:"#95cafe"
            }
        }
    },
    variants: {
        extend: {},
    },
    important: true,
}