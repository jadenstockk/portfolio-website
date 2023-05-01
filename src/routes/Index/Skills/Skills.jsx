import React from "react"

const Skills = () => {
	return (
		<section
			id="skills"
			className="fade-up"
			style={{ animationDelay: "700ms" }}
		>
			<div className="wrapper">
				<h2 className="medium-heading-1">
					<span className="section-number">02.</span> My Skills
				</h2>
				<div className="skills-container description-1">
					<div>
						<h3>Web Development</h3>
						<div className="skill-item">HTML & CSS</div>
						<div className="skill-item">
							<a href="https://react.dev/" target="_blank" rel="noreferrer">
								React
							</a>
						</div>
						<div className="skill-item">
							<a href="https://nextjs.org/">Next.js</a>
						</div>
						<div className="skill-item">Node.js</div>
						<div className="skill-item">Express.js</div>
						<div className="skill-item">MongoDB</div>
						<div className="skill-item">Supabase</div>
						<div className="skill-item">TailwindCSS</div>
					</div>
					<div>
						<h3>Other</h3>
						<div className="skill-item">Grade 7 Piano</div>
						<div className="skill-item">Music Theory</div>
						<div className="skill-item">
							Music Production in Logic Pro X and Abelton Live
						</div>
						<div className="skill-item">Design in Figma</div>
						<div className="skill-item">
							Video Editing in Adobe Premiere Pro, Adobe After Effects, and
							DaVinci Resolve
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Skills
