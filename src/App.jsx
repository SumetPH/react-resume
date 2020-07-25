import React from "react";

// components
import Header from "./components/Header";
import Personal from "./components/Personal";
import Contact from "./components/Contact";
import Job from "./components/Job";
import Education from "./components/Education";
import Qualification from "./components/Qualification";
import Tool from "./components/Tool";
import Website from "./components/Website";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div className="section">
        <div className="container">
          <div className="columns">
            <div className="column has-text-centered">
              <Header />
            </div>
          </div>
          <div className="columns is-centered">
            <div className="column is-6">
              <Personal />
            </div>
          </div>
          <div className="columns is-centered">
            <div className="column is-5">
              <div className="column">
                <Contact />
              </div>
              <div className="column">
                <Job />
              </div>
            </div>
            <div className="column is-5">
              <div className="column">
                <Education />
              </div>
              <div className="column">
                <Qualification />
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <Tool />
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <Website />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
