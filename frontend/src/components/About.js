import React from "react";
import { Header } from "./Header";
import { Container, Row, Col, ResponsiveEmbed } from "react-bootstrap";
import { CV } from "./CV";

export let About = () => {
  return (
    <div>
      <Header></Header>

      <Container>
        <Row>
          <Col md={6}>
            <ResponsiveEmbed aspectRatio="4by3">
              <embed
                type="image/svg+xml"
                src="/VancouverIsland_2019-07-06.jpg"
                roundedCircle
              />
            </ResponsiveEmbed>
          </Col>
          <Col md={6}>
            <h2 className="font-weight-light">Welcome</h2>
            <p>Hi my name is Peter.</p>
            <p>
              If you've come this far, you may as well look around. Check out
              some of my projects or my Github.
            </p>
            <p>
              This site uses a ReactJS frontend and Django backend supported in
              Google Cloud.
            </p>
          </Col>
        </Row>
      </Container>
      {/* </Jumbotron> */}
      <CV></CV>
    </div>
  );
};
