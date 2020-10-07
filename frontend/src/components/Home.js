import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Header } from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faChartArea,
  faHeartbeat,
  faInfoCircle,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  Row,
  Col,
  Card,
  CardColumns,
  OverlayTrigger,
  Tooltip,
  Tab,
  Nav,
  Button,
  Media,
} from "react-bootstrap";
// import { MapComponent } from "./Map";
import { Evacuation } from "./Evacuation";
// import { Landcover } from "./Landcover";
// import { DefensibleSpace } from "./DefensibleSpace";
// import { Lectures } from "./Lectures";
// import { CV } from "./CV";

export let Projects = () => {
  return (
    <div>
      <Header></Header>
      {/* Full Page Image Header with Vertically Centered Content */}
      <Tab.Container
        id="left-tabs-example"
        defaultActiveKey="evacuation-dashboard"
      >
        <Row>
          <Col sm={2}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="gps-tracking">GPS Stats Tracking</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="evacuation-dashboard">
                  Evacuation Dashboard
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="defensible-space">
                  Defensible Space
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="landcover">Landcover Modeling</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="lidar">LiDAR tree Segmentation</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="lecture">Lecture Materials</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="gps-tracking">
                {/* <MapComponent></MapComponent> */}
                {/* <CV></CV> */}
              </Tab.Pane>
              <Tab.Pane eventKey="evacuation-dashboard">
                <Evacuation></Evacuation>
              </Tab.Pane>
              <Tab.Pane eventKey="defensible-space">
                {/* <DefensibleSpace></DefensibleSpace> */}
              </Tab.Pane>
              <Tab.Pane eventKey="landcover">
                {/* <Landcover></Landcover> */}
              </Tab.Pane>
              <Tab.Pane eventKey="lecture">
                {/* <Lectures></Lectures> */}
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};
