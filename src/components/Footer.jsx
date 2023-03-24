import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedinIn } from "react-icons/fa";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>
            Designed and Developed by{" "}
            <a
              href="https://twitter.com/cleversamerr"
              className="purple"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              @cleversamerr
            </a>
          </h3>
        </Col>

        <Col md="4" className="footer-copywright">
          <h3>Copyright © {new Date().getFullYear()} cleversamer</h3>
        </Col>

        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/cleversamerr"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://twitter.com/cleversamerr"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://linkedin.com/in/cleversamerr"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.instagram.com/cleversamer_"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://wa.me/972597367603"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineWhatsApp />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
