import React from "react";
import ".././styles/speciality.css";
import DoctorNurseCards from "./doctorNurseCards";
import SpecialityCard from "./specialityCards";
const Speciality = () => {
  return (
    <>
      <div className="specialityHeader">
        <p className="speciality">specliality</p>
        <p className="view"> view all</p>
      </div>{" "}
      <div className="containerCard">
        <SpecialityCard />
        <SpecialityCard />
        <SpecialityCard />
        <SpecialityCard />
      </div>
      <div className="three">
        <div className="one">
          <p className="top">Top Doctors</p>
          <div className="docnuContainer">
            <DoctorNurseCards
              name="Dr.Kex Markessy"
              field="Cardiologist"
              image="https://www.kauveryhospital.com/doctorimage/recent/salem/Dr_P_V_Dhanapal.jpg"
            />
            <DoctorNurseCards
              name="Dr.Jean Paul Ngoga"
              field="Dermatologist"
              image="https://familydoctor.org/wp-content/uploads/2018/02/41808433_l.jpg"
            />
            <DoctorNurseCards
              name="Dr.Teta Precious"
              field="Immunologist"
              image="https://www.doctorcare.ca/wp-content/uploads/2021/05/header-homepage-cropped.png"
            />
            <DoctorNurseCards
              name="Dr.Linda Lesley"
              field="Generalist"
              image="https://i.pinimg.com/736x/1f/64/72/1f64724836e7eb60f24100ca9cad8bad.jpg"
            />
          </div>
        </div>
        <div className="two">
          <p className="top">Top Nurses</p>
          <div className="docnuContainer">
            <DoctorNurseCards
              name="nurse Mugisha Kevine"
              field="Home nursing"
              image="https://newhealthtimes.s3.amazonaws.com/uploads/article_images/Nursing%20student1619408015.jpg"
            />
            <DoctorNurseCards
              name="nurse Nsenga Queen"
              field="Home Physiotherapy"
              image="https://careers.highmarkhealth.org/media/zi5j1buu/nursing_2023_small.jpeg?center=0.39619293982608,0.6370263783875626&mode=crop&width=720&height=540&mode=crop&quality=90"
            />
            <DoctorNurseCards
              name="nurse Musime Richard"
              field="In-Home care giver"
              image="https://online-learning-college.com/wp-content/uploads/2022/05/How-to-Become-a-Nurse-.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Speciality;
