import React, { useContext } from "react";
import { AppContext } from "../App";
import { Timeline, TimelineEvent } from "react-event-timeline";
import { FaGraduationCap } from "react-icons/fa";

function Education() {
  const { lang } = useContext(AppContext);

  return (
    <div className="card">
      <header className="card-header has-background-black">
        <p className="card-header-title has-text-white">
          {lang === "eng" ? <span>Education</span> : <span>การศึกษา</span>}
        </p>
      </header>
      <div className="card-content">
        <div className="content">
          <Timeline style={{ fontSize: "1rem", fontWeight: 400 }}>
            <TimelineEvent
              title=""
              createdAt="2017"
              icon={<FaGraduationCap />}
              iconColor="#4a4a4a"
            >
              {lang === "eng" ? (
                <span>
                  Diploma in Electronic Srisongkram Industrial Technology,
                  Nakhonphanom University
                </span>
              ) : (
                <span>
                  ประกาศนียบัตรวิชาชีพ ชั้นสูง สาขาวิชาอิเล็กทรอนิกส์
                  วิทยาลัยเทคโนโลยีอุตสาหกรรมศรีสงคราม มหาวิทยาลัยนครพนม
                </span>
              )}
              <br />
              GPA : 3.65
            </TimelineEvent>
            <TimelineEvent
              title=""
              createdAt="2019"
              icon={<FaGraduationCap />}
              iconColor="#4a4a4a"
            >
              {lang === "eng" ? (
                <span>
                  Bachelor of Business Administration Program in Computer
                  Information System Rajamangala University of Technology Isan
                  Sakon Nakhon Campus
                </span>
              ) : (
                <span>
                  ปริญญาตรี บริหารธุรกิจบัณฑิต
                  สาขาวิชาระบบสารสนเทศทางคอมพิวเตอร์
                  มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน วิทยาเขตสกลนคร
                </span>
              )}
              <br />
              GPA : 3.69
            </TimelineEvent>
          </Timeline>
        </div>
      </div>
    </div>
  );
}

export default Education;
