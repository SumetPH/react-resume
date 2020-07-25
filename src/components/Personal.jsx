import React from "react";

// asset
import Profile from "../asset/img/profile.jpg";

function Personal() {
  return (
    <div className="card">
      <div className="card-content">
        <div className="columns">
          <div className="column is-5">
            <div className="level">
              <div className="level-item">
                <figure className="image is-128x128">
                  <img className="is-rounded" src={Profile} alt="profile" />
                </figure>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="content">
              <h3>ประวัติส่วนตัว</h3>
              <p>
                ชื่อ-นามสกุล : สุเมธ ผงพิลา
                <br />
                ชื่อเล่น : น็อต
                <br />
                เกิด : 11 กุมภาพันธ์ 2540
                <br />
                สัญชาติ : ไทย
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Personal;
