import React from "react"

const About = () => {
	const scratchLink = "https://scratch.mit.edu/users/Magicmanthedj/"
	const discordLink = "https://discord.com/"
	const helpsieLink = "https://github.com/jadenstockk/helpsie"

	return (
		<section id="about" className="fade-up" style={{ animationDelay: "700ms" }}>
			<div className="wrapper">
				<h2 className="medium-heading-1">
					<span className="section-number">01.</span> About Me
				</h2>
				<p className="description-1">
					I started learning to code when I was 10 years old on the educational
					coding platform,{" "}
					<a href={scratchLink} target="_blank" rel="noopener noreferrer">
						Scratch
					</a>
					. However, my real coding experience started when I began playing
					around with{" "}
					<a href={discordLink} target="_blank" rel="noopener noreferrer">
						Discord
					</a>
					's API with the Discord.js framework. This lead me to create{" "}
					<a href={helpsieLink} target="_blank" rel="noopener noreferrer">
						Helpsie
					</a>
					, a public Discord bot, for other Discord users to use. Through all of
					this, I had accidentally taught myself JavaScript, Node.js, MongoDB,
					and soon enough I had also covered basic HTML, CSS, Express.js and
					also had skills in how to host my code and use the Linux terminal.
				</p>
				<p className="description-1">
					I am now a somewhat experienced React and Next.js web developer with a
					passion for UI design as well. I am also learning Java at my school.
					I'm very keen to continue learning and plan to continue working on
					projects to improve my skills.
				</p>
				<p className="description-1">
					Taking a step back from programming, I am also very passionate about
					music. I have been playing the piano for almost 11 years now and I'm
					so grateful to have had the opportunity to learn how to play. When I
					was in grade 3, my parents bought me a small CD player with two
					speakers. Being the little entrepreneur I was, I began DJing at my
					friends parties which quickly turned out to be very profitable. I
					began upgrading my equipment and eventually managed to buy myself a
					laptop. It was with this laptop that I began learning how to produce
					music and record my friends' vocals. This very fortunate background of
					mine has led me to be very well-versed in music theory, music
					production, and audio engineering, and allowed me to be a dedicated
					music student and sound coordinator for concerts and events at my
					school.
				</p>
			</div>
		</section>
	)
}

export default About
