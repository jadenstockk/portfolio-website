import "./Navbar.css"

export default function Navbar() {
	return (
		<header id="navbar">
			<div className="wrapper nav-wrapper">
				<div className="nav-items">
					<a
						className="nav-item fade-up"
						href="/#about"
						style={{ animationDelay: "50ms" }}
					>
						<span className="nav-item-number">01.</span> About
					</a>
					<a
						className="nav-item fade-up"
						href="/#projects"
						style={{ animationDelay: "150ms" }}
					>
						<span className="nav-item-number">02.</span> Projects
					</a>
					<a
						className="nav-item fade-up"
						href="/#contact"
						style={{ animationDelay: "200ms" }}
					>
						<span className="nav-item-number">03.</span> Contact
					</a>
				</div>
			</div>
		</header>
	)
}
