import React, { useState, useEffect } from "react";

import mapStyles from "../styles/mapStyles";
import { Header } from "./Header";
import {
  Container,
  Row,
  Col,
  Spinner,
  Button,
  Dropdown,
  ButtonGroup,
  Tab,
  Nav,
  Media,
  ToggleButtonGroup,
  ToggleButton,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faMountain,
  faHeartbeat,
  faGlobeAmericas,
  faLeaf,
  faSnowflake,
  faSeedling,
  faUmbrellaBeach,
  faWater,
  faCity,
  faTree,
  faArrowAltCircleRight,
  faArrowAltCircleLeft,
  faFire,
  faHouseDamage,
} from "@fortawesome/free-solid-svg-icons";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  Data,
  Polygon,
  Polyline,
  Circle,
} from "@react-google-maps/api";

import { NavLink, useParams } from "react-router-dom";
import { Chart } from "react-google-charts";

var csrf = require("csurf");
var csrfProtection = csrf({ cookie: true });
const axios = require("axios").default;
// axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
// axios.defaults.xsrfCookieName = "csrftoken";

const tableTabs = ["perimeters", "homes", "cover", "ndvi"];
const fuelTabs = ["cc", "height", "cbh", "cbd", "clc", "ladder", "fuel"];
var cover_legend = [];
var covers_lst = [];
var fuel_legend = [];
var fuels_lst = [];

const mapContainerStyle = {
  width: "100%",
  height: "20vw",
  // top: "4rem",
};
const insetmapContainerStyle = {
  width: "100%",
  height: "20vw",
  // top: "4rem",
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
  mapTypeId: "satellite",
};

const insetOptions = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: false,
};

const fireperimeterOptions = {
  clickable: false,
  draggable: false,
  editable: false,
  fillColor: "#ff6600",
  fillOpacity: 0.2,
  strokeColor: "#ff6600",
  strokeOpacity: 1,
  strokeWeight: 1,
  visible: true,
  zIndex: 1,
};

const firepointsOptions = {
  clickable: true,
  draggable: false,
  editable: false,
  fillColor: "#ffffff",
  fillOpacity: 1,
  strokeColor: "000000",
  strokeOpacity: 0,
  strokeWeight: 0,
  visible: true,
  zIndex: 2,
};

const buildingOptions = {
  clickable: true,
  draggable: false,
  editable: false,
  fillColor: "#ffffff",
  fillOpacity: 1,
  strokeColor: "#ffffff",
  strokeOpacity: 1,
  strokeWeight: 0,
  visible: true,
  zIndex: 2,
};

const covers = {
  Q5475A8: { name: "Open Water", icon: faWater },
  QFFFFFF: { name: "Perennial Ice/Snow", icon: faSnowflake },
  QE7D2D1: { name: "Developed, Open Space", icon: faCity },
  QE19E8D: { name: "Developed, Low Intensity", icon: faCity },
  QFE0000: { name: "Developed, Medium Intensity", icon: faCity },
  QB40000: { name: "Developed, High Intensity", icon: faCity },
  QD3CDC1: { name: "Barren Land", icon: faUmbrellaBeach },
  Q85C77F: { name: "Deciduous Forest", icon: faTree },
  Q38804E: { name: "Evergreen Forest", icon: faTree },
  QD4E7B0: { name: "Mixed Forest", icon: faTree },
  QAF963C: { name: "Dwarf Scrub", icon: faSeedling },
  QDDCA8F: { name: "Shrub/Scrub", icon: faSeedling },
  QFDE9AA: { name: "Grassland/Herbaceous", icon: faSeedling },
  QCACB7E: { name: "Sedge/Herbaceous", icon: faSeedling },
  QA4CC51: { name: "Lichens", icon: faSeedling },
  Q82BA9D: { name: "Moss", icon: faSeedling },
  QF9F45D: { name: "Pasture/Hay", icon: faSeedling },
  QC68D45: { name: "Cultivated Crops", icon: faSeedling },
  QC9E6F8: { name: "Woody Wetlands", icon: faTree },
  Q64B3D4: { name: "Emergence Herbaceous Wetlands", icon: faTree },
};

const fuels = {
  Q5475A8: { name: "Open Water", icon: faWater },
  QFFFFFF: { name: "Perennial Ice/Snow", icon: faSnowflake },
  QE7D2D1: { name: "Developed, Open Space", icon: faCity },
  QE19E8D: { name: "Developed, Low Intensity", icon: faCity },
  QFE0000: { name: "Developed, Medium Intensity", icon: faCity },
  QB40000: { name: "Developed, High Intensity", icon: faCity },
  QD3CDC1: { name: "Barren Land", icon: faUmbrellaBeach },
  Q85C77F: { name: "Deciduous Forest", icon: faTree },
  Q38804E: { name: "Evergreen Forest", icon: faTree },
  QD4E7B0: { name: "Mixed Forest", icon: faTree },
  QAF963C: { name: "Dwarf Scrub", icon: faSeedling },
  QDDCA8F: { name: "Shrub/Scrub", icon: faSeedling },
  QFDE9AA: { name: "Grassland/Herbaceous", icon: faSeedling },
  QCACB7E: { name: "Sedge/Herbaceous", icon: faSeedling },
  QA4CC51: { name: "Lichens", icon: faSeedling },
  Q82BA9D: { name: "Moss", icon: faSeedling },
  QF9F45D: { name: "Pasture/Hay", icon: faSeedling },
  QC68D45: { name: "Cultivated Crops", icon: faSeedling },
  QC9E6F8: { name: "Woody Wetlands", icon: faTree },
  Q64B3D4: { name: "Emergence Herbaceous Wetlands", icon: faTree },
};

var createAttributes = function (props) {
  var obj = {};
  // obj.path = [];

  obj.perimeters = {
    name: "perimeters",
    title: "Fire Area",
    icon: faFire,
    min: 0,
    max: 7,
    text: " NDVI",
    d1: "ndvi-1",
    r1: "0.50-1.00",
    d2: "ndvi-2",
    r2: "0.25-0.50",
    d3: "ndvi-3",
    r3: "0.00-0.25",
    d4: "ndvi-4",
    r4: "-1.00-0.00",
    legend: [
      { css: "ndvi-1", name: "0.50-1.00", icon: faFire },
      { css: "ndvi-2", name: "0.25-0.50", icon: faFire },
      { css: "ndvi-3", name: "0.00-0.25", icon: faFire },
      { css: "ndvi-4", name: "-1.00-0.00", icon: faFire },
    ],
    data: [
      [
        "Fire Area",
        "Time",
        { role: "style" },
        {
          sourceColumn: 0,
          role: "annotation",
          type: "string",
          calc: "stringify",
        },
      ],
    ],
    chart: "AreaChart",
  };
  obj.homes = {
    name: "homes",
    title: "Homes",
    icon: faHouseDamage,
    min: 0,
    max: 7,
    text: " BPM",
    d1: "heart-1",
    r1: ">120",
    d2: "heart-2",
    r2: "100-120",
    d3: "heart-d3",
    r3: "80-100",
    d4: "heart-4",
    r4: "<80",
    legend: [
      { css: "heart-1", name: ">120", icon: faHouseDamage },
      { css: "heart-2", name: "100-120", icon: faHouseDamage },
      { css: "heart-3", name: "80-100", icon: faHouseDamage },
      { css: "heart-4", name: "<80", icon: faHouseDamage },
    ],
    data: [
      [
        "House Damage",
        "Time",
        { role: "style" },
        {
          sourceColumn: 0,
          role: "annotation",
          type: "string",
          calc: "stringify",
        },
      ],
    ],
    chart: "LineChart",
  };

  obj.cover = {
    name: "cover",
    title: "Landcover",
    icon: faGlobeAmericas,
    min: 7,
    max: 14,
    text: "",
    legend: cover_legend,
    data: [
      [
        "Land Cover",
        "Distance",
        { role: "style" },
        {
          sourceColumn: 0,
          role: "annotation",
          type: "string",
          calc: "stringify",
        },
      ],
    ],
    chart: "AreaChart",
  };
  obj.ndvi = {
    name: "ndvi",
    title: "Plant Health",
    icon: faLeaf,
    min: 0,
    max: 7,
    text: " NDVI",
    d1: "ndvi-1",
    r1: "0.50-1.00",
    d2: "ndvi-2",
    r2: "0.25-0.50",
    d3: "ndvi-3",
    r3: "0.00-0.25",
    d4: "ndvi-4",
    r4: "-1.00-0.00",
    legend: [
      { css: "ndvi-1", name: "0.50-1.00", icon: faLeaf },
      { css: "ndvi-2", name: "0.25-0.50", icon: faLeaf },
      { css: "ndvi-3", name: "0.00-0.25", icon: faLeaf },
      { css: "ndvi-4", name: "-1.00-0.00", icon: faLeaf },
    ],
    data: [
      [
        "NDVI",
        "Distance",
        { role: "style" },
        {
          sourceColumn: 0,
          role: "annotation",
          type: "string",
          calc: "stringify",
        },
      ],
    ],
    chart: "AreaChart",
  };

  return obj;
};

export let Evacuation = () => {
  var attributes = createAttributes();

  const [FireElements, setFireElements] = useState({
    details: null,
    times: [],
    perimeters: null,
    parcels: null,
    buildings: null,
  });
  const [TOA, setTOA] = useState(null);
  console.log("hi");
  useEffect(() => {
    axios({
      method: "GET",
      url: "http://127.0.0.1:8000/fires/1",
    }).then((res) => {
      console.log("hi");
      setFireElements({
        details: res.data.fires,
        times: res.data.times,
        perimeters: JSON.parse(
          res.data.fireperimeters.slice(0, 29) +
            res.data.fireperimeters.slice(92, res.data.fireperimeters.length)
        ),
        parcels: JSON.parse(
          res.data.parcels.slice(0, 29) +
            res.data.parcels.slice(92, res.data.parcels.length)
        ),
        buildings: JSON.parse(
          res.data.buildings.slice(0, 29) +
            res.data.buildings.slice(92, res.data.buildings.length)
        ),
      });
    });
  }, []);

  function extractAttributes(props) {
    props.map((point) => {
      if (fireTimes.indexOf(point.time) === -1) {
        fireTimes.push(point.time);
        fireperimeter[point.time] = [
          {
            lat: point.lat,
            lng: point.lng,
            color: point.color,
            cc: point.cc,
            height: point.height,
            cbh: point.cbh,
            cbd: point.cbd,
            clc: point.clc,
            ladder: point.ladder,
            fuel: point.fuel,
          },
        ];
      } else {
        fireperimeter[point.time].push({
          lat: point.lat,
          lng: point.lng,
          color: point.color,
          cc: point.cc,
          height: point.height,
          cbh: point.cbh,
          cbd: point.cbd,
          clc: point.clc,
          ladder: point.ladder,
          fuel: point.fuel,
        });
      }
      attributes.ndvi.data.push([
        point.distance,
        parseFloat(point.ndvi),
        "#" + point.color.slice(1, 7),
        null,
      ]);
      attributes.cover.data.push([
        point.distance,
        parseFloat(point.elevation),
        "#" + point.color.slice(8, 14),
        null,
      ]);

      var cover_css = point.color.slice(7, 14);
      var _cover = covers[cover_css];
      var cover_index = covers_lst.indexOf(cover_css);
      if (cover_index === -1) {
        covers_lst.push(cover_css);
        cover_legend.push({
          css: cover_css,
          name: _cover.name,
          icon: _cover.icon,
        });
      }

      var fuel_css = point.color.slice(7, 14);
      var _fuel = fuels[fuel_css];
      var fuel_index = fuels_lst.indexOf(fuel_css);
      if (fuel_index === -1) {
        fuels_lst.push(fuel_css);
        fuel_legend.push({
          css: fuel_css,
          name: _fuel.name,
          icon: _fuel.icon,
        });
      }
    });
  }

  const fireTimes = [];
  const fireperimeter = {};
  const [selectedPoints, setPoints] = useState([]);
  // extractAttributes(Firepoints, fireperimeter, attributes);

  const [center, setCenter] = useState({
    lat: 34.0618854328175,
    lng: -118.767322888081,
  });

  const [seconds, setSeconds] = useState(0);
  const [selectedTime, setTime] = useState([]);
  const [selected, setSelected] = useState();
  const [isActive, setIsActive] = useState(false);

  const [colorScheme, setColorScheme] = useState(attributes.perimeters);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
      if (seconds === FireElements.times.length - 1) {
        setSeconds(0);
      }
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const onDataLoad = React.useCallback((props) => {
    if (
      typeof insetmapRef.current !== "undefined" &&
      typeof mapRef.current !== "undefined" &&
      FireElements.perimeters !== null &&
      FireElements.builings !== null
    ) {
      mapRef.current.data.forEach(function (feature) {
        mapRef.current.data.remove(feature);
      });
      insetmapRef.current.data.forEach(function (feature) {
        insetmapRef.current.data.remove(feature);
      });

      insetmapRef.current.data.addGeoJson(
        FireElements.perimeters.features[seconds]
      );
      insetmapRef.current.data.setStyle(fireperimeterOptions);

      mapRef.current.data.addGeoJson(FireElements.perimeters.features[seconds]);
      mapRef.current.data.setStyle(fireperimeterOptions);
    }
  });
  function getTOA() {
    if (TOA !== null) {
      if (TOA === 0) {
        return "FIRELINE NOT APPROACHING";
      }

      let f = new Date(FireElements.times[seconds]);
      let s = new Date(TOA);
      let d = s - f;
      let days = Math.floor(d / (24 * 60 * 60 * 1000));
      let daysms = d % (24 * 60 * 60 * 1000);
      let hours = Math.floor(daysms / (60 * 60 * 1000));
      if (hours < 1) {
        return "FIRELINE HAS PASSED";
      } else {
        return "FIRELINE ARRIVES IN: " + days + " days, " + hours + "hrs";
      }
    }
  }

  const insetmapRef = React.useRef();
  const onInsetMapLoad = React.useCallback((map) => {
    insetmapRef.current = map;
  });
  const Parcel_dict = {};
  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
    var buildings_lyr = new window.google.maps.Data({ map: map });
    buildings_lyr.addGeoJson(FireElements.buildings);
    buildings_lyr.setStyle(buildingOptions);
    // buildings_lyr.addListener("mouseover", function (event) {
    //   setSelected({lat:event.latLng.lat(), lng:event.latLng.lng(), ain:event.feature.j.ain});
    // });

    {
      FireElements.parcels.features.map((parcel) => {
        Parcel_dict[parcel.properties.ain] = parcel;
      });
    }
  });
  if (loadError) return "Error loading maps";
  if (!isLoaded)
    return (
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <Spinner animation="border" />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    );

  return (
    <div>
      {FireElements.buildings !== null ? (
        <div>
          <Row>
            <Col sm={3}>
              <div className="locationDate">DATE</div>
              <div className="locationTitle">NAME</div>
              <div>Activity</div>
              <div>{FireElements.times[seconds].slice(0, 10)}</div>
              <div>{FireElements.times[seconds].slice(11, 16)}</div>

              <Dropdown as={ButtonGroup}>
                <Button variant="success" onClick={toggle}>
                  {isActive ? "Pause" : "Start"}
                </Button>
                <Button variant="success" onClick={reset}>
                  Reset
                </Button>

                <Dropdown.Toggle
                  split
                  variant="success"
                  id="dropdown-split-basic"
                />

                <Dropdown.Menu>
                  {FireElements.times.map((time) => (
                    // <Dropdown.Item onClick={() => setTime(time)}>{time}</Dropdown.Item>
                    <Dropdown.Item
                      onClick={() =>
                        setSeconds(FireElements.times.indexOf(time))
                      }
                    >
                      {time.slice(0, 10) + " " + time.slice(11, 16)}
                      {/* {time} */}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col sm={2}>
              {/* <ToggleButtonGroup type="checkbox" onChange={(value) => setColorScheme(attributes[value])}> */}
              <ToggleButtonGroup
                size="sm"
                type="radio"
                name="options"
                onChange={(value) => setColorScheme(attributes[value])}
              >
                {tableTabs.map((tab) => {
                  let item = attributes[tab];
                  return (
                    <ToggleButton variant="light" value={item.name}>
                      <FontAwesomeIcon icon={item.icon} />
                      <br />
                      {item.title}
                    </ToggleButton>
                  );
                })}
              </ToggleButtonGroup>
            </Col>
          </Row>
          <Row>
            <Col sm={2}>
              <GoogleMap
                mapContainerStyle={insetmapContainerStyle}
                zoom={10}
                center={center}
                options={insetOptions}
                onLoad={onInsetMapLoad}
                // onIdle={()=> (setCenter(mapRef.current.center))}
              >
                <Data onLoad={onDataLoad(seconds)}></Data>
                <Marker
                  key={0}
                  position={center}
                  icon={{
                    url: "/marker.png",
                    scaledSize: new window.google.maps.Size(30, 30),
                  }}
                />
              </GoogleMap>

              <Button
                variant="link"
                className="locationDirection"
                // onClick={() => updateMap(-1, attributes)}
              >
                <FontAwesomeIcon icon={faArrowAltCircleLeft} size="2x" />
              </Button>

              <Button
                variant="link"
                className="locationDirection"
                // onClick={() => updateMap(1, attributes)}
              >
                <FontAwesomeIcon icon={faArrowAltCircleRight} size="2x" />
              </Button>
            </Col>
            <Col>
              {/* {selected.ain} */}
              {TOA !== null ? getTOA() : null}

              <div className="mapContainer">
                <GoogleMap
                  mapContainerStyle={mapContainerStyle}
                  zoom={12}
                  center={center}
                  options={options}
                  onLoad={onMapLoad}
                  onClick={(e) => {
                    let url =
                      "http://127.0.0.1:8000/fires/1/toa" +
                      (e.latLng.lng() + " " + e.latLng.lat()).toString();
                    axios({
                      method: "GET",
                      url: url,
                    }).then((res) => {
                      setTOA(res.data.intersect);
                      setSelected({
                        lat: e.latLng.lat(),
                        lng: e.latLng.lng(),
                        ain: "0",
                      });
                    });
                  }}
                  onIdle={() => setCenter(mapRef.current.center)}
                >
                  {typeof selected != "undefined" ? (
                    <Marker
                      key={0}
                      position={{
                        lat: selected.lat,
                        lng: selected.lng,
                      }}
                      icon={{
                        url: "/marker.png",
                        scaledSize: new window.google.maps.Size(30, 30),
                      }}
                      options={{
                        draggable: false,
                      }}
                    />
                  ) : null}

                  <Data onLoad={onDataLoad(seconds)}></Data>
                </GoogleMap>
              </div>
            </Col>
          </Row>
        </div>
      ) : (
        <Container>
          <Row>
            <Col></Col>
            <Col>
              <Spinner animation="border" />
            </Col>
            <Col></Col>
          </Row>
        </Container>
      )}
    </div>
  );
};
