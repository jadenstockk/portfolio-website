export default function NotFound() {
	return (
		<main>
			<section
				style={{
					height: "80svh",
					alignItems: "center",
					justifyContent: "center"
				}}
			>
				<div
					className="wrapper"
					style={{ gap: "0.3rem", alignItems: "center", textAlign: "center" }}
				>
					<h3
						className="small-heading-1 fade-up"
						style={{ animationDelay: "200ms" }}
					>
						404
					</h3>
					<h1
						className="big-heading-1 fade-up"
						style={{ animationDelay: "300ms" }}
					>
						Page not found
					</h1>
					<p
						className="description-1 fade-up"
						style={{ animationDelay: "400ms" }}
					>
						The page you&apos;re looking for doesn&apos;t exist or may have been
						moved.
					</p>
					<div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
						<a
							className="btn fade-up"
							style={{ animationDelay: "500ms" }}
							href="/"
						>
							Go home
						</a>
						<a
							className="btn fade-up"
							style={{ animationDelay: "600ms" }}
							href="/#projects"
						>
							View projects
						</a>
					</div>
				</div>
			</section>
		</main>
	)
}
