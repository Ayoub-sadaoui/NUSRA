/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        myLight: {
          primary: "#F79122",
          secondary: "#000000",
          "base-100": "#FFFFFF",
          "primary-content": "#8F8F8F",
          "bg-footer": "#F79122",
          "neutral-content": "#494845",
          neutral: "#FFFFFF",
        },
        myDark: {
          primary: "#F79122",
          secondary: "#FFFFFF",
          "base-100": "#494845",
          "primary-content": "#F4F4F4",
          "neutral-content": "#FFFFFF",
          neutral: "#000000",
        },
      },
    ],
  },
  theme: {
    screens: {
      xs: "500px", // Your custom breakpoint for screens smaller than sm
      sm: "640px", // Default sm breakpoint
      md: "780px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        Aljazeera: ["Aljazeera", "sans-serif"],
      },

      colors: {
        // Add your custom color here
        "bg-footer": "#F79122", // Adjust the color value as needed
      },
    },
  },

  plugins: [require("daisyui")],
};
