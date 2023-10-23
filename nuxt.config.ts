export default defineNuxtConfig({
    ssr: false,
    build: {
      transpile: ["vuetify"],
    },
    css: ["@/assets/scss/style.scss"],
    vite: {
      define: {
        "process.env.DEBUG": false,
      },
    },
    components: [{
        path: "~/components",
        pathPrefix: false,
    }],
    app: {
        head: {
          htmlAttrs: {
            lang: 'en'
          },
          bodyAttrs: {
            class: 'demo'
          },
          charset: 'utf-8',
          titleTemplate: '%s - Nuxt 3 Vuetify',
          meta: [
            {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1, maximum-scale=5'
            },
            {
              name: 'author',
              content: "onthelock, Thailand"
            },
          ]
        }
    },
    runtimeConfig:{
        public: {
            api: {
                url: "http://localhost:3001"
            }
        }
    }
  });
