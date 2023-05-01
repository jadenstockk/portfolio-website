import React from "react"
import faceImage from "../../../assets/face.png"

const Hero = () => {
	return (
		<section id="hero">
			<div className="wrapper">
				<h3
					className="small-heading-1 fade-up"
					style={{ animationDelay: "200ms" }}
				>
					Hi there. My name is
				</h3>
				<div className="face-name fade-up" style={{ animationDelay: "300ms" }}>
					<img src={faceImage} alt="" />
					<h2 className="big-heading-1">Jaden Stock.</h2>
				</div>
				<h2
					className="big-heading-2 fade-up"
					style={{ animationDelay: "400ms" }}
				>
					I am a student developer.
				</h2>
				<p
					className="description-1 fade-up"
					style={{ animationDelay: "500ms" }}
				>
					I'm currently making my way through 11th grade in high school. I have
					a passion for software development, design, and music. I'm always
					learning and see great value in being open to new perspectives and
					ideas.
				</p>
				<a
					className="btn fade-up"
					style={{ animationDelay: "600ms" }}
					href="/#projects"
				>
					Check out my latest project
				</a>
			</div>
		</section>
	)
}

export default Hero
