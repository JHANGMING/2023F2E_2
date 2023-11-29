/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '24px',
        md: '12px',
      },
    },
    fontSize: {
      base: [
        "16px",
        {
          lineHeight: "24px",
        },
      ],
      "s": [
        "12px",
        {
          lineHeight: "18px",
        },
      ],
      "sm": [
        "14px",
        {
          lineHeight: "21px",
        },
      ],
      "m": [
        "20px",
        {
          lineHeight: "30px",
        },
      ],
      "l": [
        "24px",
        {
          lineHeight: "36px",
        },
      ],



    },
    spacing: {
      0: "0px",
      0.5:"4px",
      1: "8px",
      1.5: "12px",
      1.75: "14px",
      2: "16px",
      2.25:"18px",
      2.5: "20px",
      2.75:"22px",
      3: "24px",
      3.25:"26px",
      3.5: "28px",
      3.75:"30px",
      4: "32px",
      4.5:"36px",
      5: "40px",
      6: "48px",
      6.25:"50px",
      7: "56px",
      8: "64px",
      9:"72px",
      9.5:"76px",
      10:"80px",
      11:"88px",
      12:"96px",
      12.25:"98px",
      12.875:"103px",
      13.75:"110px",
      14.5:"116px",
      14.75:"118px",
      16.5:"132px",
      19.75:"158px",
      22.5:"180px",
      28:"224px",
      28.75:"230px",
      30:"240px",
      37.5:"300px",
      41.5:"332px"

    },
    extend: {
      colors: {
        election: {
          DEFAULT: "#F2F1DE",
          first: "#6F66DC",
          second: "#EBC80F",
          third: "#1CC5B1",
          fourth:"#F2E94E",
          fifth:"#FA8334",
          sixth:"#383838",
          seventh:"#00000099"
          
        },
      },
      fontFamily: {
        TC: ['"Noto Sans TC"', "sans-serif"],
        EN: ['Inter', "sans-serif"],
      },
      spacing: {
        74: "296px",
      },
      boxShadow: {
        "2xl": "0px 0px 0px 1px #fff",
        "3xl": "0px 0px 0px 1px #3F5D45;",
      },
    },
    screens: {
      md: "768px",
      lg: "992px",
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",

          "@screen md": {
            maxWidth: "768px",
          },
          "@screen lg": {
            maxWidth: "1920px",
          },
        },
      });
    },
  ],
}

