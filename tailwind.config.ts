/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{ts, tsx}", "./app/**/*.{ts,tsx}"],
  theme: {
    fontSize: {
      heading1: [
        "84px",
        {
          lineHeight: "120%",
          fontWeight: "700", // bold
        },
      ],
      heading2: [
        "72px",
        {
          lineHeight: "120%",
          fontWeight: "700", // bold
        },
      ],
      heading3: [
        "48px",
        {
          lineHeight: "auto",
          fontWeight: "600",
        },
      ],
      body: [
        "44px",
        {
          lineHeight: "160%",
          fontWeight: "800", // Extrabold
        },
      ],
      base: [
        "34px",
        {
          lineHeight: "auto",
          fontWeight: "500",
        },
      ],
      small: [
        "28px",
        {
          lineHeight: "160%",
          fontWeight: "300",
        },
      ],
      "subtle-bold": [
        "24px",
        {
          lineHeight: "auto",
          fontWeight: "600",
        },
      ],
      subtle: [
        "24px",
        {
          lineHeight: "auto",
          fontWeight: "400",
        },
      ],
      "tiny-bold": [
        "16px",
        {
          lineHeight: "26px",
          fontWeight: "400",
        },
      ],
      tiny: [
        "16px",
        {
          lineHeight: "160%",
          fontWeight: "300",
        },
      ],
    },
    extend: {
      fontFamily: {
        heading: "var(--font-poppins)",
        body: "var(--font-inter)",
      },
    },
  },
};
