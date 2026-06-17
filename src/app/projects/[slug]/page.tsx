import {
  getProjectBySlug,
  getProjectSlug,
  getProjectsWithCaseStudy,
  hasCaseStudy,
} from "@/lib/projects";
import { notFound } from "next/navigation";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return getProjectsWithCaseStudy().map((project) => ({
    slug: getProjectSlug(project),
  }));
}

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project || !hasCaseStudy(project)) {
    notFound();
  }

  return (
    <main>
      <section
        id="case-study"
        className="fade-up"
        style={{ animationDelay: "120ms" }}
      >
        <div className="wrapper case-study-wrapper">
          <p className="small-heading-1">{project.year}</p>
          <h1 className="big-heading-1">{project.name}</h1>
          <p className="description-1 case-study-summary">
            {project.caseStudy?.summary ?? project.description}
          </p>

          <div className="case-study-links">
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer noopener"
                className="btn"
                data-analytics-event="case_study_link_click"
                data-analytics-label={`${project.name}_visit_website`}
              >
                Visit website
              </a>
            ) : null}
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer noopener"
                className="btn"
                data-analytics-event="case_study_link_click"
                data-analytics-label={`${project.name}_view_source`}
              >
                View source
              </a>
            ) : null}
          </div>

          <article className="case-study-article">
            {project.caseStudy?.content?.map((block, index) => {
              if (block.type === "heading") {
                if (block.level === 3) {
                  return <h3 key={`block-${index}`}>{block.text}</h3>;
                }

                return <h2 key={`block-${index}`}>{block.text}</h2>;
              }

              if (block.type === "paragraph") {
                return <p key={`block-${index}`}>{block.text}</p>;
              }

              if (block.type === "quote") {
                return (
                  <blockquote key={`block-${index}`}>
                    <p>{block.text}</p>
                    {block.citation ? <cite>{block.citation}</cite> : null}
                  </blockquote>
                );
              }

              if (block.type === "image") {
                return (
                  <figure key={`block-${index}`}>
                    <img src={block.src} alt={block.alt} />
                    {block.caption ? (
                      <figcaption>{block.caption}</figcaption>
                    ) : null}
                  </figure>
                );
              }

              if (block.style === "ordered") {
                return (
                  <ol key={`block-${index}`}>
                    {block.items.map((item, itemIndex) => (
                      <li key={`list-item-${itemIndex}`}>{item}</li>
                    ))}
                  </ol>
                );
              }

              return (
                <ul key={`block-${index}`}>
                  {block.items.map((item, itemIndex) => (
                    <li key={`list-item-${itemIndex}`}>{item}</li>
                  ))}
                </ul>
              );
            })}
          </article>
        </div>
      </section>
    </main>
  );
}
