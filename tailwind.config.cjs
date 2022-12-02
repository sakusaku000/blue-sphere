const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
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
                },
                neutral:colors.neutral
            }
        }
	},
	plugins: [],
	important:true
}
