import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Semantic Backgrounds/Text
        page: 'rgb(var(--bg-page) / <alpha-value>)',
        card: 'rgb(var(--bg-card) / <alpha-value>)',
        main: 'rgb(var(--text-main) / <alpha-value>)',
        muted: 'rgb(var(--text-muted) / <alpha-value>)',
        
        // Brand Colors (Now mapped to CSS variables)
        brand: {
          blue: 'rgb(var(--accent-primary) / <alpha-value>)',      
          cyan: 'rgb(var(--accent-secondary) / <alpha-value>)',
          // Mapped specifically for 'bg-brand-dark' usage if any remains
          dark: 'rgb(var(--bg-page) / <alpha-value>)', 
        }
      },
      backgroundImage: {
        // Updated Gradient to use the variables
        'mesh-gradient': 'radial-gradient(at 0% 0%, rgb(var(--accent-primary) / 0.1) 0px, transparent 50%), radial-gradient(at 100% 0%, rgb(var(--accent-secondary) / 0.1) 0px, transparent 50%)',
      }
    },
  },
  plugins: [],
};
export default config;