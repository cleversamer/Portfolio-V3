import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

const AboutCard = () => {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I'm <span className="purple">Samer </span>
            from <span className="purple"> Palestine, Gaza.</span>
            <br />
            <br />
            I'm a <span className="purple">Senior Backend Engineer</span>,
            creative coder, and self-proclaimed engineer specializing in{" "}
            <span className="purple"> Backend Development</span>. I make it my
            mission to translate clients' ideas into fully working and highly
            scalable and maintainable server-side applications that run blazing
            fast.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>

            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>

            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>

          <footer className="blockquote-footer">@cleversamer</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export default AboutCard;
