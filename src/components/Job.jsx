import React from "react";

function Job() {
  return (
    <div className="card">
      <header className="card-header has-background-black">
        <p className="card-header-title has-text-white">งานที่สนใจ</p>
      </header>
      <div className="card-content" style={{ paddingLeft: 60 }}>
        <div className="content">
          <h5>Front-end</h5>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScrip</li>
          </ul>
        </div>
        <div className="content">
          <h5>Back-end</h5>
          <ul>
            <li>Node.js</li>
            <li>PHP</li>
          </ul>
        </div>
        <div className="content">
          <h5>Framework & Library</h5>
          <ul>
            <li>React.js</li>
            <li>Vue.js</li>
            <li>Express.js</li>
            <li>Laravel</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Job;
