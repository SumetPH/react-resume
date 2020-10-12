import React, { useContext } from "react";
import { AppContext } from "../App";

function Qualification() {
  const { lang } = useContext(AppContext);
  return (
    <div className="card">
      <header className="card-header has-background-black">
        <p className="card-header-title has-text-white">
          {lang === "eng" ? (
            <span>Qualifications</span>
          ) : (
            <span>คุณสมบัติ</span>
          )}
        </p>
      </header>
      <div className="card-content">
        <div className="content">
          <ul style={{ marginTop: 0 }}>
            {lang === "eng" ? (
              <>
                <li>Create Web Application with HTML CSS JS PHP</li>
                <li>Create Front-end with React.js Vue.js</li>
                <li>Create Back-end with Node.js Laravel</li>
                <li>Create REST API with Express.js</li>
                <li>Use Git Insomnia</li>
              </>
            ) : (
              <>
                <li>พัฒนา Web Application ด้วย HTML CSS JS PHP</li>
                <li>พัฒนา Front-end ด้วย React.js Vue.js</li>
                <li>พัฒนา Back-end ด้วย Node.js Laravel</li>
                <li>พัฒนา REST API ด้วย Express.js</li>
                <li>ใช้งาน Git Insomnia</li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Qualification;
