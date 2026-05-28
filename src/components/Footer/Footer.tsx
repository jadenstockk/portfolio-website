import "./Footer.css";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-icons">
        <a
          href="https://www.linkedin.com/in/jadenstock/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="footer-icon" src="/assets/linkedin.svg" alt="" />
        </a>
        <a
          href="https://github.com/jadenstockk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="footer-icon" src="/assets/github.svg" alt="" />
        </a>
      </div>
      <div className="footer-text">
        Created by <span>Jaden Stock</span>
      </div>
    </footer>
  );
}
