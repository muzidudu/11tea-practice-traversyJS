  /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./content/**/*.{html,js,md,liquid,svg}", "./_includes/**/*.{html,js,md,liquid,svg}"],
  theme: {
    // ...
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
    // ...
  ],
}