import { getProjectDestination, getStarredProjects } from "@/lib/projects"

export default function Projects() {
	const featuredProjects = getStarredProjects()

	return (
		<div>
			<section
				id="projects"
				className="fade-up"
				style={{ animationDelay: "700ms" }}
			>
				<div className="wrapper">
					<h2 className="medium-heading-1">
						<span className="section-number">03.</span> My Projects
					</h2>
					<p className="description-1"></p>
					<div className="projects-container">
						{featuredProjects.map((project, index) => {
							const destination = getProjectDestination(project)
							if (!destination) {
								return null
							}

							const content = (
								<div className="project">
									<h3>
										{project.name} ({project.year})
									</h3>
									<p>{project.description}</p>
									<div className="project-tags">
										{project.tags.map((tag, tagIndex) => {
											if (!tag) {
												return null
											}

											return (
												<div
													className="project-tag"
													key={`${project.name}-tag-${tagIndex}`}
												>
													{tag}
												</div>
											)
										})}
									</div>
								</div>
							)

							if (destination.external) {
								return (
									<a
										href={destination.href}
										target="_blank"
										rel="noreferrer noopener"
										data-analytics-event="featured_project_click"
										data-analytics-label={project.name}
										key={`${project.name}-${index}`}
									>
										{content}
									</a>
								)
							}

							return (
								<a
									href={destination.href}
									data-analytics-event="featured_project_click"
									data-analytics-label={project.name}
									key={`${project.name}-${index}`}
								>
									{content}
								</a>
							)
						})}
					</div>
					<a
						href="/projects"
						className="btn"
						data-analytics-event="projects_view_all_click"
						data-analytics-label="projects_archive"
					>
						View all
					</a>
				</div>
			</section>
		</div>
	)
}
