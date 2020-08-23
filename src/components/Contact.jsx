import React from "react";

function Contact() {
  return (
    <div className="card">
      <header className="card-header has-background-black">
        <p className="card-header-title has-text-white">ติดต่อ</p>
      </header>
      <div className="card-content">
        <div className="content">
          <div className="media" style={{ marginBottom: 0 }}>
            <div className="media-content">
              <p>Phone : 0930657199</p>
            </div>
          </div>
          <div className="media" style={{ marginBottom: 0 }}>
            <div className="media-content">
              <p>Email : notsumet1@gmail.com</p>
            </div>
          </div>
          <div className="media" style={{ marginBottom: 0 }}>
            <div className="media-content">
              <p>
                Github :{" "}
                <a
                  href="https://github.com/sumetph"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/sumetph
                </a>
              </p>
            </div>
          </div>
          <div className="media" style={{ marginBottom: 0 }}>
            <div className="media-content">
              <p>
                Portfolio :{" "}
                <a
                  href="https://sumetph.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  sumetph.tech
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
