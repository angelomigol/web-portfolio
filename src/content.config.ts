/**
 * Content Configuration File
 * TODO: Add description of the configuration file and its purpose.
 *
 * Collections:
 * - projects: Software projects with structured narrative content
 * - journey: Career timeline entries
 * - testimonials: Endorsements and recommendations
 *
 * @module content.config
 */

import { defineCollection } from "astro:content"
import { z } from "astro/zod"
import { glob } from "astro/loaders"

/**
 * Projects Collection
 *
 * Structure: Overview → Problem → Constraints → Approach →
 * Key Decisions → Tech Stack → Impact → Learnings.
 *
 * Features:
 * - Required narrative sections for consistent storytelling
 * - Key decisions with reasoning and alternatives
 * - Impact metrics (quantitative and qualitative)
 * - Featured flag for homepage showcase
 * - Optional custom order for manual curation
 * - Related project and decision slugs for cross-referencing
 */
const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    role: z.string(),
    year: z.number(),
    duration: z.string().optional(),
    teamSize: z.number().optional(),
    outcomeSummary: z.string(),
    overview: z.string(),
    problem: z.string(),
    constraints: z.array(z.string()),
    approach: z.string(),
    keyDecisions: z.array(
      z.object({
        decision: z.string(),
        reasoning: z.string(),
        alternatives: z.array(z.string()).optional(),
      })
    ),
    techStack: z.array(z.string()),
    impact: z.object({
      metrics: z
        .array(
          z.object({
            label: z.string(),
            value: z.string(),
          })
        )
        .optional(),
      qualitative: z.string(),
    }),
    learnings: z.array(z.string()),
    featured: z.boolean().default(false),
    status: z.enum(["completed", "ongoing", "archived"]).default("completed"),
    order: z.number().optional(),
    relatedProjects: z.array(z.string()).optional(),
  }),
})

/**
 * Journey Collection
 *
 * Career growth and learning progression timeline with milestones,
 * learning experiences, and career transitions.
 *
 * Features:
 * - Three entry types (milestone, learning, transition)
 * - Skills/technologies per entry
 * - Optional expandable content
 */
const journeyCollection = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/journey" }),
  schema: z.object({
    date: z.coerce.date(),
    title: z.string(),
    type: z.enum(["milestone", "learning", "transition"]),
    description: z.string(),
    skills: z.array(z.string()).optional(),
  }),
})

/**
 * Testimonials Collection
 *
 * Endorsements and recommendations from colleagues and clients.
 *
 * Features:
 * - Person details (name, role, company)
 * - Relationship context
 * - Quote text
 * - Optional LinkedIn profile link
 * - Featured flag for homepage display
 */
// const testimonialsCollection = defineCollection({
//   loader: glob({ pattern: "**/*.mdx", base: "./src/content/testimonials" }),
//   schema: z.object({
//     name: z.string(),
//     role: z.string(),
//     company: z.string(),
//     relationship: z.string(),
//     quote: z.string(),
//     linkedin: z.url().optional(),
//     featured: z.boolean().default(false),
//     date: z.coerce.date(),
//   }),
// })

/**
 * Export all collections
 *
 */
export const collections = {
  projects: projectsCollection,
  journey: journeyCollection,
  // testimonials: testimonialsCollection,
}
