import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiUbuntu,
  SiVirtualbox,
  SiPycharm,
  SiIntellijidea,
  SiGooglechrome,
  SiChatbot,
} from "react-icons/si";

const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiUbuntu />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPycharm />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiVirtualbox />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiGooglechrome />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiChatbot />
      </Col>
    </Row>
  );
};

export default Toolstack;
