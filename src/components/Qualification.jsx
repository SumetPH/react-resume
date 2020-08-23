import React from "react";

function Qualification() {
  return (
    <div className="card">
      <header className="card-header has-background-black">
        <p className="card-header-title has-text-white">คุณสมบัติ</p>
      </header>
      <div className="card-content">
        <div className="content">
          <ul style={{ marginTop: 0 }}>
            <li>พัฒนา Web Application ด้วย HTML CSS JS PHP</li>
            <li>พัฒนา Front-end ด้วย React.js Vue.js</li>
            <li>พัฒนา Back-end ด้วย Node.js Laravel</li>
            <li>พัฒนา REST API ด้วย Express.js</li>
            <li>ใช้งาน Git Insomnia Photoshop</li>
            <li>แก้ปัญหาด้วยตัวเอง</li>
            <li>เรียนรู้ด้วยตัวเอง</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Qualification;
