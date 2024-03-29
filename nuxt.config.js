export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "universal",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "hstrejoluna-digital-garden-nuxt",
    htmlAttrs: {
      lang: "en",
      "data-bs-theme": "dark",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/node_modules/bootstrap/dist/css/bootstrap.min.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~/plugins/bootstrap.js", mode: "client" }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxt/content"],
  content: {
    dir: 'content'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
