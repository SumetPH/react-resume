import React from "react";
import { Timeline, TimelineEvent } from "react-event-timeline";
import { FaGraduationCap } from "react-icons/fa";

function Education() {
  return (
    <div className="card">
      <header className="card-header has-background-black">
        <p className="card-header-title has-text-white">การศึกษา</p>
      </header>
      <div className="card-content">
        <div className="content">
          <Timeline style={{ fontSize: "1rem", fontWeight: 400 }}>
            <TimelineEvent
              title=""
              createdAt="2017 : ปวส."
              icon={<FaGraduationCap />}
              iconColor="#4a4a4a"
            >
              ประกาศนียบัตรวิชาชีพ สาขาวิชาอิเล็กทรอนิกส์
              วิทยาลัยเทคโนโลยีอุตสาหกรรมศรีสงคราม มหาวิทยาลัยนครพนม
              <br />
              GPA : 3.65
            </TimelineEvent>
            <TimelineEvent
              title=""
              createdAt="2019 : ป.ตรี"
              icon={<FaGraduationCap />}
              iconColor="#4a4a4a"
            >
              ปริญญาตรี บริหารธุรกิจบัณฑิต สาขาวิชาระบบสารสนเทศทางคอมพิวเตอร์
              มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน วิทยาเขตสกลนคร
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
