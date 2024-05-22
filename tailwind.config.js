/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary':'#1E2D48',
        'secondary':'#D1AF89',
        'gray':'#F1F1F1',
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
      lineHeight:{
       
      },
      fontFamily: {
        rokh: "rokh",
        stretch: "stretch",
        yekanBakhRegular: "yekanBakh-Regular",
        Astonia:"Astonia"
      },
      boxShadow: {
        'next':'box-shadow: -2px 0px 24px 0px #0000001A',
      },
      maxWidth:{
        'content':'1247px',
        'content2':'1391px',
      },
    }
},
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

