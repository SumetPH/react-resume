import React from "react";

function Contact() {
  return (
    <div className="card">
      <header className="card-header has-background-black">
        <p className="card-header-title has-text-white">ติดต่อ</p>
      </header>
      <div className="card-content">
        <div className="content">
          <div className="media">
            <div className="media-content">
              <p>Phone : 0930657199</p>
            </div>
          </div>
          <div className="media">
            <div className="media-content">
              <p>Email : notsumet1@gmail.com</p>
            </div>
          </div>
          <div className="media">
            <div className="media-content">
              <p>Github : github.com/sumetph</p>
            </div>
          </div>
          <div className="media">
            <div className="media-content">
              <p>Portfolio : sumetph.tech</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
