import React from "react";

function Job() {
  return (
    <div className="card">
      <header className="card-header has-background-black">
        <p className="card-header-title has-text-white">งานที่สนใจ</p>
      </header>
      <div className="card-content" style={{ paddingLeft: 60 }}>
        <div className="content">
          <b>Front-end</b>
          <ul style={{ marginTop: 0 }}>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </div>
        <div className="content">
          <b>Back-end</b>
          <ul style={{ marginTop: 0 }}>
            <li>Node.js</li>
            <li>PHP</li>
          </ul>
        </div>
        <div className="content">
          <b>Framework & Library</b>
          <ul style={{ marginTop: 0 }}>
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
