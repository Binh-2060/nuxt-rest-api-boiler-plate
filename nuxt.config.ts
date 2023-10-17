import { mdi, aliases } from "vuetify/iconsets/mdi";
//@ts-ignore
import colors from "vuetify/lib/util/colors";
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@invictus.codes/nuxt-vuetify", "@nuxtjs/i18n"],
  devServer: {
    port: 3500,
  },

  i18n: {
    defaultLocale: "en",
    lazy: false,
    strategy: "no_prefix",
    locales: [
      {
        code: "en",
        file: "en.json",
        iso: "en-EN",
      },
      {
        code: "la",
        file: "la.json",
        iso: "la-LA",
      },
    ],
    langDir: "./locales",
  },

  vuetify: {
    vuetifyOptions: {
      icons: {
        defaultSet: "mdi",
        aliases,
        sets: {
          mdi,
        },
      },
      // @TODO: list all vuetify options
      theme: {
        themes: {
          light: {
            dark: false,
            colors: {
              primary: colors.blue.darken2,
              accent: colors.grey.darken3,
              secondary: colors.amber.darken3,
              info: colors.teal.lighten1,
              warning: colors.amber.base,
              error: colors.deepOrange.accent4,
              success: colors.green.accent3,
            },
          },
        },
      },
    },

    moduleOptions: {
      treeshaking: true,
      useIconCDN: true,
      styles: true,
      autoImport: true,
      useVuetifyLabs: true,
    },
  },
});
