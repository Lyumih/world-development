import Head from "next/head";
import Story from "../components/Story/Story";
import World from "../components/World/World";
import ConsoleForm from "../components/ConsoleForm/ConsoleForm";
import Settings from "../components/Settings/Settings";
import { Container, Row, Col } from "react-bootstrap";

export default function Home() {
  return (
    <div>
      <Container fluid>
        <h1>World Development</h1>
        <hr/>
        <ConsoleForm />
        <hr/>
        <Row>
          <Col>
            <Story />
          </Col>
          <Col>
            <World />
          </Col>
          <Col>
            <Settings />
          </Col>
        </Row>

      </Container>
    </div>
  );
}
