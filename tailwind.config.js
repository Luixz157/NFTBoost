/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        poppins: ['var(--font-poppins)'],
      },
      colors: {
        'blue-primary': '#1D4FFE',
        'green-primary': '#4BCE97',
        'green-border-card': '#131317',
        'gray-area-favorite': '#05030A',
        'gray-hover-btn-slide': '#07050F',
      },
      maxWidth: {
        grid: '77.5rem', //1216px
        'cardnft': '17.4rem',//279px
        'card-collector': '37rem',//592px
        'logo-size-mg': '10rem',//160px
        'nav-header': '48.3rem', //773px
        'left-cont-footer': '20.25rem',//324px
        'content-desc-hero': '41.1rem', //658px
      },
      width: {
        'area-cards-mobile': '20.7rem',//700px
      },
      height: {
        'area-image-nft': '14.75rem', //236px
        'area-cards-mobile': '15.3rem',//244px
        'area-card-desk': '26.6rem',//426px
        'area-banner': '29.5rem',//472px
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        'hero-pattern': 'url("../assets/bg-hero.svg")',
        'banner': 'url("../assets/bg-banner.svg")'
      },
    },
    screens: {
      '@tablet': '640px',

      '@laptop': '1024px',

      '@desktop': '1280px',
    },
  },
  plugins: [require("tailwindcss-animate")],
}