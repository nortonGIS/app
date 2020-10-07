import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export let CV = () => {
  return (
    <div>
      <Container style={{ backgroundColor: "#ffffff" }}>
        <Row className="justify-content-md-center">
          <Col md={8}>
            <span className="title">EDUCATION</span>
            <p>
              <span className="year">
                <i>University of California, Berkeley</i>
              </span>
              <span className="year">
                <b>2020 </b> &nbsp;&nbsp;M.L.A in Landscape Architecture +
                Environmental Planning
              </span>
              <ul className="special">
                <li>
                  Graduate-level Research in Disaster Management, Planning, and
                  Information Management
                </li>
                <li className="detail">
                  “Computing Defensibility: How Defensible Space Modeling
                  Exposes Wind-Driven Wildfire Risks in the Wildland-Urban
                  Interface”
                </li>
              </ul>
            </p>
            <p>
              <span className="year">
                <b>2017 </b> &nbsp;&nbsp;B.A. in Sustainable Environmental
                Design, Minor in GIS
                <ul className="special">
                  <li>
                    Graduate-level GIS, Remote Sensing, Statistics, and Computer
                    Science
                  </li>
                </ul>
              </span>
            </p>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md={8}>
            <span className="title">SKILLS</span>
            <p>
              <span className="skill">
                <b>Python Programming: </b>5+ years of automating geospatial
                analyses, automating ETL, and developing libraries.
              </span>
              <ul>
                <li className="detail">
                  Proficiency with libraries including: ArcPy, GDAL, Matplotlib,
                  NumPy, Psycopg2, Rasterio, LAStools
                </li>
              </ul>
            </p>
            <p>
              <span className="skill">
                <b>GIS: </b>6+ years of geospatial simulation and risk analysis
                using geostatistical, suitability, and data fusion methods.
              </span>
              <ul>
                <li className="detail">
                  Proficiency with libraries & database tools including: ArcGIS,
                  GDAL, PostGIS, Postgresql; Cartography tools: ArcGIS, Adobe,
                  Google Maps
                </li>
              </ul>
            </p>
            <p>
              <span className="skill">
                <b>Remote Sensing: </b>3+ years of progressive use of machine
                learning, image processing, and accuracy assessment in research.
              </span>
              <ul>
                <li className="detail">
                  Proficiency with programs & libraries such as: Google Earth
                  Engine, ENVI, Rasterio, LAStools;
                </li>
                <li className="detail">
                  Datasets include: NAIP, USGS 3DEP, Landsat, Planet, MODIS
                </li>
              </ul>
            </p>
            <p>
              <span className="skill">
                <b>Full-Stack Web Development: </b>1+ years creating custom
                dashboards and APIs for alerts, decision analysis, and
                reporting.
              </span>
              <ul>
                <li className="detail">
                  Proficiency with libraries and cloud-based resources: ReactJS,
                  Django, PostgreSQL, Kubernetes, Docker, Google Cloud, AWS
                </li>
              </ul>
            </p>
            <p>
              <span className="skill">
                <b>Public Speaking: </b>2+ years of instructing courses in
                graduate-level Remote Sensing, GIS, and Environmental Science.
              </span>
            </p>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md={8}>
            <span className="title">PROFESSIONAL EXPERIENCE</span>
            <p>
              <span className="skill">
                <b>Lecturer</b>
                <i>, University of California, Berkeley</i>
                <a>May - Aug. 2020</a>
              </span>
              <ul className="experience">
                <li>
                  Instructor of Record for the course: Environmental Science for
                  Sustainable Development (LA12).
                </li>
                <li>
                  Lectured on the principles of natural environmental processes
                  and relationships of interdependent human systems.
                </li>
                <li>
                  Adapted course material for online learning by emphasizing
                  data collection, interpretationa and analysis as a key method
                  in environmental science.
                </li>
                <li>
                  Explored traditional and novel environmental analysis
                  techniques for evaluating and interpreting data on sustainable
                  development, air quality, urban forestry benefits, urban
                  hydrology, and water quality.
                </li>
              </ul>
            </p>
            <p>
              <span className="skill">
                <b>Fire Modeling Consultant</b>
                <i>, Norton Geodesign</i>
                <a>Oct. 2018 - Mar. 2019</a>
              </span>
              <ul className="experience">
                <li>
                  Developed a wildfire evacuation decision support system and
                  dashboard for the Moraga-Orinda Fire District covering 19,000
                  homes across the fire district’s 36 mi<sup>2</sup>.
                </li>
                <li>
                  Integrated distributed fire sensor network data streams and
                  live weather data to update dashboard states and initiate fire
                  behavior simulations used in analyzing risk and evacuation
                  metrics.
                </li>
                <li>
                  Created custom, raster-based land cover and fuel complex
                  models, simulated fires under Red Flag weather scenarios,
                  analyzed fire risk ROIs, and helped develop a strategic
                  wildfire risk reduction plan.
                </li>
              </ul>
            </p>
            <p>
              <span className="skill">
                <b>Graduate Student Instructor</b>
                <i>, University of California, Berkeley</i>
                <a>Aug. 2018 - May 2020</a>
              </span>
              <ul className="experience">
                <li>
                  Taught 350 students in Applied Remote Sensing (LA 289) and
                  Geographic Information Systems (GEO 188)
                </li>
                <li>Awarded 2020 Outstanding Graduate Student Instructor</li>
              </ul>
            </p>
            <p>
              <span className="skill">
                <b>Research Assistant</b>
                <i>, Center for Catastrophic Risk Management</i>
                <a>May 2017 - 2018</a>
              </span>
              <ul className="experience">
                <li>
                  Contributed research on high resolution wildfire behavior to
                  California’s Fourth Climate Change Assessment:
                  <br />
                  <span className="detail">
                    “Assessing Extreme Weather-related Vulnerability and
                    Identifying Resilience Options for California's
                    Interdependent Transportation Fuel Sector: A Report for
                    California's Fourth Climate Change Assessment”. California
                    Energy Commission, 2018.
                  </span>
                </li>
                <li>
                  Automated pipeline for modeling fuel loads and simulating
                  wildfires at a fine-scale resolution for 200 mi<sup>2</sup> of
                  ROIs.
                </li>
                <li>
                  Analyzed wildfire exposure of critical infrastructures (e.g.
                  roads, rail, pipelines, etc) according to different climate
                  change models, presented results to key infrastructure
                  stakeholders, researchers, and policymakers.
                </li>
                <li>
                  <a href="https://www.energy.ca.gov/sites/default/files/2019-11/Energy_CCCA4-CEC-2018-012_ADA.pdf">
                    Download (25.5 MB) Technical Report published in
                    California's Fourth Climate Change Assessment
                  </a>
                </li>
              </ul>
            </p>
            <p>
              <span className="skill">
                <b>Remote Sensing Science Consultant</b>
                <i>, NASA Ames Research Center</i>
                <a>Sept. 2017 - Dec. 2018</a>
              </span>
              <ul className="experience">
                <li>
                  Developed python scripts that segment trees from airborne
                  LiDAR and analyze canopy and fuel load characteristics.
                </li>
                <li>
                  Identified ROIs with increased fire risks in Lassen National
                  Forest and developed a fuel reduction management plan with the
                  Burney-Hat Creek Community Forest and Watershed Group.
                </li>
                <li>
                  <a
                    href="https://develop.larc.nasa.gov/2017/fall/LassenDisastersII.html"
                    target="external"
                  >
                    Visit Lassen Volcanic National Park Disasters II project
                    summary page
                  </a>
                </li>
                <li>
                  <a href="https://develop.larc.nasa.gov/2017/fall/posters/2017Fall_ARC_LassenVolcanicNPDisastersII.pdf">
                    Download (2.16 MB) project poster
                  </a>
                </li>
              </ul>
            </p>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <p>Last updated: 2020-09-13</p>
        </Row>
      </Container>
      {/* </Jumbotron> */}
    </div>
  );
};
