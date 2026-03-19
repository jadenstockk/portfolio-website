import faceImage from "../../../assets/face.png";

const Hero = () => {
  return (
    <section id="hero">
      <div className="wrapper">
        <h3
          className="small-heading-1 fade-up"
          style={{ animationDelay: "200ms" }}
        >
          Hello, my name is
        </h3>

        <div className="face-name fade-up" style={{ animationDelay: "300ms" }}>
          <img src={faceImage} alt="Portrait of Jaden Stock" />
          <h2 className="big-heading-1">Jaden Stock</h2>
        </div>

        <h2
          className="big-heading-2 fade-up"
          style={{ animationDelay: "400ms" }}
        >
          I build web experiences
        </h2>

        <p
          className="description-1 fade-up"
          style={{ animationDelay: "500ms" }}
        >
          With over five years of experience, I transform ideas into
          polished, reliable websites that support business growth. Let’s work
          together to build a solution you can be proud of.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <a
            className="btn fade-up"
            style={{ animationDelay: "600ms" }}
            href="/#projects"
          >
            View Recent Projects
          </a>
          <a
            className="btn fade-up"
            style={{ animationDelay: "700ms" }}
            href="mailto:jaden@jadenstock.com?subject=Project%20Inquiry&body=Hi%20Jaden%2C%0A%0AI%20would%20like%20to%20talk%20about%20a%20project."
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
