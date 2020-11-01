import React, { useContext } from "react";
import { AppContext } from "../App";

function Award() {
  const { lang } = useContext(AppContext);

  return (
    <div className="card">
      <header className="card-header has-background-black">
        <p className="card-header-title has-text-white">
          {lang === "eng" ? <span>Award</span> : <span>รางวัล</span>}
        </p>
      </header>
      <div className="card-content">
        <div className="content">
          <ul>
            <li>
              {lang === "eng" ? (
                <a
                  href="http://fit.rmuti.ac.th/2019/%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%A8%E0%B8%B6%E0%B8%81%E0%B8%A9%E0%B8%B2%E0%B8%AA%E0%B8%B2%E0%B8%82%E0%B8%B2%E0%B8%A7%E0%B8%B4%E0%B8%8A%E0%B8%B2%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B8%AA%E0%B8%B2/"
                  target="_bank"
                >
                  The ASEAN Undergraduate Conference in Computing 2019 ( AUCC
                  2019 )
                  <br />
                  Project : Document Delivery System for Appointment of Academic
                  PositionCase Study of Rajamangala University of Technology
                  Isan Sakonnakhon Campus
                </a>
              ) : (
                <a
                  href="http://fit.rmuti.ac.th/2019/%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%A8%E0%B8%B6%E0%B8%81%E0%B8%A9%E0%B8%B2%E0%B8%AA%E0%B8%B2%E0%B8%82%E0%B8%B2%E0%B8%A7%E0%B8%B4%E0%B8%8A%E0%B8%B2%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B8%AA%E0%B8%B2/"
                  target="_bank"
                >
                  การ​ประชุมวิชาการระดับ​ปริญญาตรี​ด้านคอมพิวเตอร์​ภูมิภาค​อาเซียน​
                  ครั้ง​ที่​ 7​ ( The ASEAN Undergraduate Conference in
                  Computing 2019 )
                  <br />
                  ชื่อผลงาน : ระบบส่งเอกสารเพื่อขอกำหนดแต่งตั้งตำแหน่งทางวิชาการ
                  กรณีศึกษา มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน วิทยาเขตสกลนคร
                </a>
              )}
            </li>
          </ul>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Award;
