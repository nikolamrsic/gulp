/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["*.html"],
  prefix: "tw-",
  corePlugins: {
    preflight: true,
  },
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
};
