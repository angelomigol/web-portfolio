/**
 * Robots.txt API Route
 *
 * Route: /robots.txt
 *
 * @example
 * Generated output:
 * ```
 * User-agent: *
 * Allow: /
 *
 * Sitemap: https://example.com/sitemap-index.xml
 * ```
 */

import type { APIRoute } from "astro"
import { siteConfig } from "@/config"

export const GET: APIRoute = () => {
  const siteUrl = siteConfig.url.endsWith("/")
    ? siteConfig.url.slice(0, -1)
    : siteConfig.url

  const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap-index.xml
  `

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  })
}
