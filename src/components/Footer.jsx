import React from "react";
import { BiSearch } from "react-icons/bi";
import hospital from "./image/hospital.jpg";
import { FaNotesMedical } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { HiPhone } from "react-icons/hi";
import { FiMail } from "react-icons/fi";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

function Footer() {
  return (
    <>
      <div className="hospital-footer">
        <div className="hosp-footer-block">
          <h4>
            <FaNotesMedical />
            Mediclinic
          </h4>

          <p style={{ paddingLeft: "5px", fontSize: "12px" }}>
            lorem ut wisi wemin veniam, quis laore nostrud exterci tation ilm
            hedi corper turrre sucript laboristsi duis ,lorem ut wisi wemin
            veniam, quis laore nostrud exterci tation ilm hedi corper turrre
            sucript laboristsi duis{" "}
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: "4px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap",
                gap: "25px",
                marginTop: "3px",
                paddingLeft: "5px",
              }}
            >
              <HiLocationMarker />
              <HiPhone />
              <FiMail />
            </div>
            <div>
              <p>Street 1100 Helsinki Finland</p>
              <p>(+123) 1123 4567</p>
              <p>mediclinic@godein</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                gap: "10px",
                marginTop: "3px",
                paddingLeft: "5px",
              }}
            >
              <AiOutlineTwitter />
              <FaFacebookF />
              <AiFillLinkedin />
              <AiOutlineInstagram />
            </div>
          </div>
        </div>
        <div className="hosp-footer-block" style={{ width: "220px" }}>
          <h5>Latest News</h5>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: "4px",
            }}
          >
            <img src={hospital} alt="imageNotFound" style={{ width: "80px" }} />
            <div>
              <h6> Hero Hospital</h6>
              <p style={{ fontSize: "12px" }}>Located here</p>
            </div>
          </div>
          <br></br>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: "4px",
            }}
          >
            <img src={hospital} alt="imageNotFound" style={{ width: "90px" }} />
            <div>
              <h6> Hero Hospital</h6>
              <p style={{ fontSize: "12px" }}>Located here</p>
            </div>
          </div>
          <br></br>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: "4px",
            }}
          >
            <img src={hospital} alt="imageNotFound" style={{ width: "80px" }} />
            <div>
              <h6> Hero Hospital</h6>
              <p style={{ fontSize: "12px" }}>Located here</p>
            </div>
          </div>
        </div>
        <div className="hosp-footer-block">
          <h5>Twitter Feed</h5>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: "5px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap",
                gap: "65px",
                marginTop: "3px",
                paddingLeft: "5px",
              }}
            >
              <AiOutlineTwitter />
              <AiOutlineTwitter />
              <AiOutlineTwitter />
            </div>
            <div style={{ width: "260px" }}>
              <section>
                <p style={{ fontSize: "14px" }}>
                  <span>@jaysonmountain</span>you can open a ticket by simply
                  send us your purchase code in DM and we will check it out
                </p>
              </section>
              <section>
                <p style={{ fontSize: "14px" }}>
                  <span>@jaysonmountain</span>you can open a ticket by simply
                  send us your purchase code in DM and we will check it out
                </p>
              </section>
              <section>
                <p style={{ fontSize: "14px" }}>
                  <span>@jaysonmountain</span>you can open a ticket by simply
                  send us your purchase code in DM and we will check it out
                </p>
              </section>
            </div>
          </div>
        </div>
        <div className="hosp-footer-block">
          <h5>Contact</h5>
          <input
            type={"text"}
            placeholder="Email here"
            style={{ padding: "6px 103px", textAlign: "center" }}
          />
          <br></br>
          <br></br>
          <textarea
            name="w3review"
            placeholder="Message"
            rows="5"
            cols="48"
          ></textarea>
          <br></br>
          <button
            style={{
              backgroundColor: "#42CCCF",
              padding: "8px 24px",
              borderRadius: "12px",
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default Footer;
