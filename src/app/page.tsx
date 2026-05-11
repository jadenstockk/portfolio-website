import HashAndAnalyticsClient from "@/components/Client/HashAndAnalyticsClient"
import About from "@/components/Index/About/About"
import Contact from "@/components/Index/Contact/Contact"
import Hero from "@/components/Index/Hero/Hero"
import Projects from "@/components/Index/Projects/Projects"

export default function Home() {
	return (
		<main>
			<HashAndAnalyticsClient />
			<Hero />
			<About />
			{/* <Skills /> */}
			<Projects />
			<Contact />
		</main>
	)
}
