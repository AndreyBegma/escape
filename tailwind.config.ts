import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{ 
        orange: "#DD783F"
      },
      textColor:{ 
        darkGray: "#768088",
        gray: "rgba(255, 255, 255, 0.63)"
      },
      fontSize:{ 
        title: "50px"
      },
      width: {
        container: "960px",
      },
      height: {
        header: "500px",
      },
      backgroundImage: {
        "header": "url(http://localhost:3000/h_bg.jpg)",
      }
    },
  },
  plugins: [],
};
export default config;
