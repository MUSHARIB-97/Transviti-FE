import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0154AA",
        text: {
          secondary: "#585D6E",
          black: "#333333",
          card: "#585D6E",
        },
        background: {
          primary: "#0154AA",
          secondary: "#F6F9FF",
        },
        hover: {
          primary: "#1f75cf",
        },
      },
      screens: {
        xlcustom: "1200px",
        mdcustom: "1030px",
        smcustom: "500px",
        titlecustom: "980px",
        searchtextcustom: "750px",
      },
      border: {
        primary: "#E9ECEF",
      },
      fontFamily: {
        neue: ["NeueHaas"],
      },
    },
  },
  plugins: [],
};

export default config;
