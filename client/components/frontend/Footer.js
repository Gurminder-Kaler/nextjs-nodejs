import NewsLetterFooter from "./NewsLetterFooter";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="columns">
          <div className="column is-4">
            <h2>
              <strong>Category</strong>
            </h2>
            <ul>
              <li>
                <a href="#">Lorem ipsum dolor sit amet</a>
              </li>
              <li>
                <a href="#">Vestibulum errato isse</a>
              </li>
              <li>
                <a href="#">Lorem ipsum dolor sit amet</a>
              </li>
              <li>
                <a href="#">Aisia caisia</a>
              </li>
              <li>
                <a href="#">Murphy's law</a>
              </li>
              <li>
                <a href="#">Flimsy Lavenrock</a>
              </li>
              <li>
                <a href="#">Maven Mousie Lavender</a>
              </li>
            </ul>
          </div>
          <div className="column is-4">
            <NewsLetterFooter />
          </div>
          <div className="column is-4">
            <h2>
              <strong>Important Links</strong>
            </h2>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a>About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
