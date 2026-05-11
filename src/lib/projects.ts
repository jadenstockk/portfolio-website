import projectList from "@/data/projects.json"

type CaseStudyBlock =
	| {
			type: "heading"
			level?: 2 | 3
			text: string
	  }
	| {
			type: "paragraph"
			text: string
	  }
	| {
			type: "list"
			style?: "unordered" | "ordered"
			items: string[]
	  }
	| {
			type: "quote"
			text: string
			citation?: string
	  }
	| {
			type: "image"
			src: string
			alt: string
			caption?: string
	  }

export type Project = {
	slug?: string
	year: string
	name: string
	starred: boolean
	tags: string[]
	github?: string | null
	link?: string | null
	description: string
	date: string
	caseStudy?: {
		summary?: string
		content: CaseStudyBlock[]
	}
}

const projects = projectList as Project[]

function slugify(input: string) {
	return input
		.toLowerCase()
		.trim()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-+|-+$/g, "")
}

export function getProjectSlug(project: Project) {
	return project.slug ?? slugify(project.name)
}

export function getAllProjects() {
	return [...projects].sort((a, b) => b.date.localeCompare(a.date))
}

export function getStarredProjects() {
	return getAllProjects().filter((project) => project.starred)
}

export function getProjectBySlug(slug: string) {
	return getAllProjects().find((project) => getProjectSlug(project) === slug)
}

export function hasCaseStudy(project: Project) {
	return Boolean(project.caseStudy?.content?.length)
}

export function getProjectsWithCaseStudy() {
	return getAllProjects().filter(hasCaseStudy)
}

export function getProjectDestination(project: Project) {
	if (hasCaseStudy(project)) {
		return {
			href: `/projects/${getProjectSlug(project)}`,
			external: false
		}
	}

	const fallback = project.link ?? project.github ?? null
	if (fallback) {
		return {
			href: fallback,
			external: true
		}
	}

	return null
}
