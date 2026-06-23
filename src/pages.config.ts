/**
 * Page Metadata Configuration File
 *
 * Centralized SEO metadata for all static pages. Single source of truth
 * for titles and descriptions to ensure consistency across the site.
 *
 * Usage:
 * ```astro
 * ---
 * import MainLayout from '../layouts/MainLayout.astro';
 * import SEO from '../components/SEO.astro';
 * import { pagesConfig } from '../pages.config';
 * ---
 *
 * <MainLayout>
 *   <SEO
 *     slot="head"
 *     title={pagesConfig.projects.title}
 *     description={pagesConfig.projects.description}
 *   />
 *   <!-- Page content -->
 * </MainLayout>
 * ```
 *
 * @module pages.config
 */

interface PageMeta {
  title: string
  description: string
  heading?: string
  intro?: string
}

export const pagesConfig = {
  home: {
    title: "Home",
    description:
      "I'm Angelo Miguel, a recent IT graduate passionate about web development, building modern applications, and continuously learning new technologies.",
  },

  projects: {
    title: "Projects",
    description:
      "A collection of personal and academic projects that showcase my skills in web development, problem-solving, and creating user-friendly experiences.",
    heading: "Projects",
    intro:
      "Some of the things I've built while learning, experimenting, and growing as a developer.",
  },

  journey: {
    title: "Career Journey",
    description:
      "My journey into tech—from discovering programming to earning my IT degree and pursuing a career in software development.",
    heading: "Journey",
    intro:
      "The experiences, lessons, and milestones that shaped my path into software development.",
  },

  contact: {
    title: "Contact",
    description:
      "Feel free to reach out if you'd like to connect, collaborate, or discuss opportunities.",
    heading: "Let's Connect",
  },
} as const

export type PagesConfig = typeof pagesConfig
export type PageConfig = PageMeta
