import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: "#004080",
          deep: "#002243",
          footer: "#003a70",
          blue: "#006da7",
          teal: "#248782",
          lime: "#83e07f",
          yellow: "#f9f871",
          mist: "#e6f0fa",
        },
      },
      fontFamily: {
        exo: ["var(--font-exo)", "sans-serif"],
        mont: ["var(--font-mont)", "sans-serif"],
      },
      backgroundImage: {
        "header-dark":
          "linear-gradient(164deg, #004080 0%, #006da7 45%, #0097b0 76%, #83e07f 100%)",
        "header-light":
          "linear-gradient(164deg, #ccedff 0%, #ccf8ff 35%, #d9f2e9 69%, #fdfdce 92%)",
        "hero-v":
          "linear-gradient(180deg, rgba(0,34,67,0.24) 0%, rgba(0,34,67,0.51) 25%, rgba(0,34,67,0.8) 55%, rgba(0,34,67,0.95) 80%, #002243 100%)",
        "hero-h":
          "linear-gradient(270deg, rgba(0,34,67,0.34) 0%, rgba(0,34,67,0.84) 65%, rgba(0,34,67,0.95) 100%)",
        "specialties-fade":
          "linear-gradient(180deg, rgba(0,34,67,0.8) 0%, #002243 85%)",
      },
    },
  },
  plugins: [],
};

export default config;
