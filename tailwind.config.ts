import type { Config } from "tailwindcss";

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        bodyBackground: "#e7e6e2",
        body: "#333",
        title: "black",
        transparent: "transparent",
        navBackground: "#2d2d2d",
        black: "black",
        primary: "#e5bb73",
        white: "white",
        yellow: "#d6ceb9",
        ellow: "#d6ceb9",
        grey: "#999",
        imageBg: "#d9d9d9",
        imagey: "#d9d9d9",
        heroBody: "#a6a6a6",
        green: "#74ff8b",
        yellowActive: "#d2af71",
      },
      spacing: {
        portraitSection: "60px",
        desktopSection: "150px",
        tabletSection: "100px",
        landscapeSection: "80px",
      },
    },
  },
  plugins: [addVariablesForColors],
};
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
