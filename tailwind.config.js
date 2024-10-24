/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'reenie-beanie': ['var(--font-reenie-beanie)'],
      },
      animation: {
        float: 'float 1s ease-out',
        shake: 'shake 0.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0) scale(1)', opacity: 1 },
          '100%': { transform: 'translateY(-50px) scale(1.5)', opacity: 0 },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px), translateY(-5px)' },
          '75%': { transform: 'translateX(5px), translateY(5px)' },
        },
      },
    },
  },
  plugins: [],
};
