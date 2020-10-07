import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { About } from "./components/About";
// import { MapComponent } from "./components/Map";
import { Projects } from "./components/Home";
// import { Evacuation } from "./components/Evacuation";
// import { Lectures } from "./components/Lectures";

export default function App() {
  // const { id } = useParams();
  return (
    <div>
      {/* <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossorigin="anonymous"
      /> */}
      <BrowserRouter>
        <Route path="/about" exact string component={About} />
        <Route path="/" exact string component={Projects} />
        {/* <Route path="/evacuation/:id" exact string component={Evacuation} /> */}
      </BrowserRouter>
    </div>
  );
}

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
