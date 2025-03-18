import React from "react"
import ContactForm from "./ContactForm"

const Contact = () => {
	return (
		<section id="contact">
			<div className="wrapper">
				<h2 className="big-heading-1">Let's get in touch</h2>
				<p className="description-1">
				I'd love to hear about your project or answer any questions you have — even if it’s just to say hello!
				</p>
				<ContactForm />
			</div>
			
		</section>
	)
}

export default Contact
