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
        background: 'var(--background)',
        surface: 'var(--surface)',
        text: 'var(--text)',
        'text-secondary': 'var(--text-secondary)',
        button: 'var(--button)',
        'button-text': 'var(--button-text)',
        'secondary-bg': 'var(--secondary-bg)',
        'header-bg': 'var(--header-bg)',
        border: 'var(--border)',
        hint: 'var(--hint)',
        link: 'var(--link)',
      },
    },
  },
  plugins: [],
};

export default config;
