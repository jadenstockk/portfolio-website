import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrapper">
        <h2 className="big-heading-1">Let&apos;s get in touch</h2>
        <p className="description-1">
          I&apos;d love to hear about your project or answer any questions you
          have, even if it&apos;s just to say hello.
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            alignItems: "center",
          }}
        >
          <a href="mailto:jaden@jadenstock.com" className="btn">
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <IconMail size={18} stroke={1.8} />
              Send me an email
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/jadenstock/"
            target="_blank"
            rel="noreferrer noopener"
            className="btn"
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <IconBrandLinkedin size={18} stroke={1.8} />
              Connect on LinkedIn
            </span>
          </a>
          <a
            href="https://github.com/jadenstockk"
            target="_blank"
            rel="noreferrer noopener"
            className="btn"
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <IconBrandGithub size={18} stroke={1.8} />
              Follow me on GitHub
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
