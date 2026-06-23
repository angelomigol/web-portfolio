import tailwindcss from "@tailwindcss/vite"
import { defineConfig, envField } from "astro/config"
import { loadEnv } from "vite"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"

const { SITE_URL } = loadEnv(
  process.env.NODE_ENV || "production",
  process.cwd(),
  ""
)

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: SITE_URL || "https://cardenas.angelo.me",
  env: {
    schema: {
      SITE_URL: envField.string({
        context: "client",
        access: "public",
        default: "https://cardenas.angelo.me",
      }),
      SITE_LANGUAGE: envField.string({
        context: "client",
        access: "public",
        default: "en",
      }),
      SITE_TITLE: envField.string({
        context: "client",
        access: "public",
        default: "Web Portfolio",
      }),
      SITE_DESCRIPTION: envField.string({
        context: "client",
        access: "public",
        default:
          "A portfolio of my projects, experiments, and the lessons I learned while building them.",
      }),

      SITE_AUTHOR_NAME: envField.string({
        context: "client",
        access: "public",
        default: "Angelo Cardenas",
      }),
      SITE_AUTHOR_TITLE: envField.string({
        context: "client",
        access: "public",
        default: "BSIT Graduate",
      }),
      SITE_AUTHOR_BIO: envField.string({
        context: "client",
        access: "public",
        default:
          "An aspiring software developer looking for opportunities to learn, grow, and contribute to meaningful projects",
      }),
      SITE_AUTHOR_EMAIL: envField.string({
        context: "client",
        access: "public",
        default: "miguel.cardenas0714@gmail.com",
      }),

      SOCIAL_GITHUB: envField.string({
        context: "client",
        access: "public",
        default: "https://www.github.com/angelomigol",
      }),
      SOCIAL_LINKEDIN: envField.string({
        context: "client",
        access: "public",
        default: "https://www.linkedin.com/in/angelo-miguel-cardenas-4b38b738b",
      }),
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [mdx(), sitemap()],
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
      config: {
        limitInputPixels: 268402689, // ~16K x 16K pixels
      },
    },
    remotePatterns: [],
  },
  markdown: {
    shikiConfig: {
      theme: "github-dark",
      wrap: true,
    },
  },
})
