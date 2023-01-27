const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "neutral-light": "#FFFFFF",
      dark: "#0B0D17",
      accent: "#D0D6F9",
      "neutral-shade": "#979797",
    },
    extend: {
      fontFamily: {
        serif: [
          "var(--font-barlow-condensed)",
          ...defaultTheme.fontFamily.serif,
        ],
        sans: ["var(--font-bellefair)", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "home-desktop": "url('/assets/home/background-home-desktop.jpg')",
        "home-mobile": "url('/assets/home/background-home-mobile.jpg')",
        "home-tablet": "url('/assets/home/background-home-tablet.jpg')",

        "crew-desktop": "url('/assets/crew/background-crew-desktop.jpg')",
        "crew-mobile": "url('/assets/crew/background-crew-mobile.jpg')",
        "crew-tablet": "url('/assets/crew/background-crew-tablet.jpg')",

        "destination-desktop":
          "url('/assets/destination/background-destination-desktop.jpg')",
        "destination-mobile":
          "url('/assets/destination/background-destination-mobile.jpg')",
        "destination-tablet":
          "url('/assets/destination/background-destination-tablet.jpg')",

        "technology-desktop":
          "url('/assets/technology/background-technology-desktop.jpg')",
        "technology-mobile":
          "url('/assets/technology/background-technology-mobile.jpg')",
        "technology-tablet":
          "url('/assets/technology/background-technology-tablet.jpg')",
      },
    },
  },
  plugins: [],
};
