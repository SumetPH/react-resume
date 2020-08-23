import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

// asset
import Profile from "../asset/img/profile.png";

function Personal() {
  return (
    <div className="card">
      <div className="card-content" style={{ padding: 40 }}>
        <div className="columns">
          <div className="column is-5">
            <div className="level">
              <div className="level-item">
                <figure className="image is-128x128">
                  <LazyLoadImage
                    className="is-rounded"
                    effect="blur"
                    src={Profile}
                    alt="profile"
                  />
                </figure>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="content">
              <b style={{ fontSize: 24 }}>ประวัติส่วนตัว</b>
              <p>
                ชื่อ-นามสกุล : สุเมธ ผงพิลา
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
