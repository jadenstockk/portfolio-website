const fitGroups = [
  {
    title: "Who I work well with",
    items: [
      "Founders and small businesses needing a credible online presence",
      "Coaches, consultants, and service providers who want clients to trust them faster",
      "Brands that need something more tailored than a template",
    ],
  },
  {
    title: "What I help with",
    items: [
      "Brochure and service websites",
      "Landing pages and conversion-focused redesigns",
      "Custom web apps, integrations, and full-stack product builds",
    ],
  },
  {
    title: "What working with me feels like",
    items: [
      "Clear communication and practical guidance",
      "Thoughtful design paired with reliable engineering",
      "End-to-end ownership from idea to launch",
    ],
  },
];

export default function Trust() {
  return (
    <section id="fit" className="fade-up" style={{ animationDelay: "700ms" }}>
      <div className="wrapper">
        <h2 className="medium-heading-1">
          <span className="section-number">03.</span> How I Can Help
        </h2>
        <p className="description-1 section-intro">
          I build websites and digital products that make businesses easier to
          understand, easier to trust, and easier to contact.
        </p>

        <div className="trust-grid">
          {fitGroups.map((group) => (
            <article className="trust-card" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
