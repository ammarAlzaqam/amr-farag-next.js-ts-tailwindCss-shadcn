/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{ts, tsx}", "./app/**/*.{ts,tsx}"],
  theme: {
    fontSize: {
      heading1: [
        "60px",
        {
          lineHeight: "125%",
          fontWeight: "700",
        },
      ],
      heading2: [
        "48px",
        {
          lineHeight: "125%",
          fontWeight: "500",
        },
      ],
      body: [
        "30px",
        {
          lineHeight: "125%",
          fontWeight: "400",
        },
      ],
      base: [
        "26px",
        {
          lineHeight: "125%",
          fontWeight: "400",
        },
      ],
      small: [
        "24px",
        {
          lineHeight: "100%",
          fontWeight: "500",
        },
      ],
      subtle: [
        "22px",
        {
          lineHeight: "125%",
          fontWeight: "400",
        },
      ],
      "tiny-bold": [
        "21px",
        {
          lineHeight: "24px",
          fontWeight: "700",
        },
      ],
      tiny: [
        "16px",
        {
          lineHeight: "125%",
          fontWeight: "400",
        },
      ],
    },
    extend: {
      fontFamily: {
        heading: "var(--font-poppins)",
        body: "var(--font-inter)",
        footer: "var(--font-manrope)",
      },
      screens: {
        xs: "400px",
      },
      keyframes: {
        "arrow-bounce": {
          "0%": { transform: "translateY(120%)", opacity: "0" }, // يبدأ من تحت ومش باين
          "30%": { transform: "translateY(0)", opacity: "1" }, // يطلع في النص ويبان
          "70%": { transform: "translateY(-150%)", opacity: "0" }, // يطلع فوق ويختفي
          "100%": { transform: "translateY(120%)", opacity: "0" }, // يرجع تاني تحت ويختفي
        },
      },
      animation: {
        "arrow-bounce": "arrow-bounce 0.9s ease-in-out forwards",
      },
    },
  },
};
