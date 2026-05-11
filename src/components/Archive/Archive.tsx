import {
	getAllProjects,
	getProjectDestination,
	getProjectSlug,
	hasCaseStudy
} from "@/lib/projects"

export default function Archive() {
	const projects = getAllProjects()

	return (
		<div>
			<section
				id="archive"
				className="fade-up"
				style={{ animationDelay: "200ms" }}
			>
				<div className="wrapper">
					<h2 className="big-heading-1">My Projects</h2>
					<table>
						<tbody>
							<tr className="table-headings">
								<th>Year</th>
								<th>Name</th>
								<th className="mobile-hide">Tags</th>
								<th>Case Study</th>
								<th>Links</th>
							</tr>
							{projects.map((project, index) => {
								const destination = getProjectDestination(project)
								return (
									<tr
										className="project-section"
										key={`${project.name}-${index}`}
									>
										<td className="project-year">{project.year}</td>
										<td>
											{project.starred ? (
												<img
													width="15px"
													style={{ marginRight: "5px" }}
													src="/assets/star.svg"
													alt=""
												/>
											) : null}
											{project.name}
										</td>
										<td className="mobile-hide project-tags">
											{project.tags.map((tag, tagIndex) => {
												if (!tag) {
													return null
												}
												return (
													<div
														className="mobile-hide project-tag"
														key={`${project.name}-archive-tag-${tagIndex}`}
													>
														{tag}
													</div>
												)
											})}
										</td>
										<td>
											{hasCaseStudy(project) ? (
												<a
													href={`/projects/${getProjectSlug(project)}`}
													className="link"
												>
													Read
												</a>
											) : destination?.href ? (
												<a
													href={destination.href}
													target="_blank"
													rel="noreferrer noopener"
													className="link"
												>
													Visit
												</a>
											) : (
												<span className="description-2">-</span>
											)}
										</td>
										<td>
											{project.github ? (
												<a
													href={project.github}
													target="_blank"
													rel="noreferrer noopener"
													style={{ marginRight: "10px" }}
												>
													<img width="18px" src="/assets/github.svg" alt="" />
												</a>
											) : null}
											{project.link ? (
												<a
													href={project.link}
													target="_blank"
													rel="noreferrer noopener"
												>
													<img
														width="15px"
														src="/assets/external-link.svg"
														alt=""
													/>
												</a>
											) : null}
										</td>
									</tr>
								)
							})}
						</tbody>
					</table>
				</div>
			</section>
		</div>
	)
}
