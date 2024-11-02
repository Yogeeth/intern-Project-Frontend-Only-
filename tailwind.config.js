/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#131419', 
        container: '#1F1F2E', 
        textPrimary: '#E5E5E5', 
        accent: '#FFD700', 
        inputBg: '#2E2E3B', 
        button: {
          DEFAULT: '#1E90FF', 
          hover: '#1C7AC5', 
        },
        profileBorder: '#FFD700', 
      },
    },
  },
  plugins: [],
}
