/**
 * Website Configuration File
 *
 * TODO: Add description of the configuration file and its purpose.
 *
 * Contents:
 * - Metadata (URL, language, title, description)
 * - Author information (title, name, email, bio)
 * - Social media links (GitHub, LinkedIn)
 * - Navigation structure
 *
 * @module config
 */

/**
 * Helper function to retrieve environment variables with a fallback option.
 *
 * @param {string} key - Environment variable key (e.g., "BASE_URL")
 * @param {string} fallback - Default value to return if the environment variable is not set (default: "")
 * @returns {string} Evironment variable value or fallback if not set
 */
const getEnv = (key: string, fallback: string = ""): string => {
  return import.meta.env[key] ?? fallback
}

export const siteConfig = {
  url: getEnv("SITE_URL", "http://localhost:4321"),
  language: getEnv("SITE_LANGUAGE", "en"),
  title: getEnv("SITE_TITLE", "My Website"),
  description: getEnv(
    "SITE_DESCRIPTION",
    "A simple web portfolio built with Astro."
  ),

  author: {
    name: getEnv("SITE_AUTHOR_NAME", "Angelo Cardenas"),
    title: getEnv("SITE_AUTHOR_TITLE", "BSIT Graduate"),
    bio: getEnv("SITE_AUTHOR_BIO", "A passionate software developer."),
    email: getEnv("SITE_AUTHOR_EMAIL", "miguel.cardenas0714@gmail.com"),
  },

  social: {
    github: getEnv("SOCIAL_GITHUB", "https://www.github.com/angelomigol"),
    linkedin: getEnv(
      "SOCIAL_LINKEDIN",
      "https://www.linkedin.com/in/angelo-miguel-cardenas-4b38b738b"
    ),
  },

  /**
   * Navigation links
   *
   * Main navigation structure for the website.
   */
  nav: [
    { label: "Projects", href: "/web-portfolio/projects" },
    { label: "Journey", href: "/web-portfolio/journey" },
    { label: "Contact", href: "/web-portfolio/contact" },
  ],
} as const

/**
 * Helper function to filter and format social links.
 *
 * @returns {Array} Array of social link objects with platform name and URL
 */
export const socialLinks = Object.entries(siteConfig.social)
  .filter(([_, url]) => url)
  .map(([platform, url]) => ({
    platform: platform.charAt(0).toUpperCase() + platform.slice(1),
    url,
  }))

/**
 * Type exports
 *
 */
export type SiteConfig = typeof siteConfig
export type SocialLinks = typeof siteConfig.social
export type NavItem = (typeof siteConfig.nav)[number]
