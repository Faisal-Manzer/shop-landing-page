import React from "react";

// images
import "./depart.css";
import brain from "../../../assets/Brain.png";
import brainNote from "../../../assets/brainNote.png";
import chat from "../../../assets/chat.png";
import ear from "../../../assets/ear.png";
import physio from "../../../assets/Physiotherapy.png";
import scholor from "../../../assets/scholor.png";
import writing from "../../../assets/Writing.png";

const Department = () => {
  return (
    <section style={{ margin: "auto" }}>
      <div style={{ position: "relative" }}>
        <div className="section-title">
          <h2
            style={{
              textAlign: "center",
              fontWeight: "bold",
              marginTop: "50px",
              marginBottom: "3rem",
            }}
          >
            DEPARTMENTS
          </h2>
        </div>
        <div
          className="container-fluid deparment-section"
          style={{
            backgroundColor: "#ede9e8",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem 1rem",
            borderRadius: "1rem",
          }}
        >
          <div className="d-flex row flex-wrap flex-row justify-content-center align-items-center">
            <div className="d-flex flex-row justify-content-center department-row">
              <a
                className="col-sm-3 py-3 my-3"
                href="#speech"
                style={{
                  margin: "0px 10px",
                  backgroundColor: "white",
                  width: "14rem",
                  height: "9rem",
                  borderRadius: "20px",
                  boxShadow: `rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px`,
                  textDecoration: "none",
                }}
              >
                <div className="d-flex flex-wrap flex-column justify-content-center align-items-center">
                  <img src={chat} alt="" style={{ width: "4rem" }} />

                  <div className="card__info">
                    <h3
                      className="text-center my-2"
                      style={{ fontSize: "15px" }}
                    >
                      Speech Therapy
                    </h3>
                    <h5
                      className="text-center my-2"
                      style={{ fontSize: "10px", color: "grey" }}
                    >
                      Read More
                    </h5>
                  </div>
                </div>
              </a>
              <a
                href="#education"
                className="col-sm-3 py-3 my-3"
                style={{
                  margin: "0px 10px",
                  backgroundColor: "white",
                  width: "14rem",
                  height: "9rem",
                  borderRadius: "20px",
                  boxShadow: `rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px`,
                  textDecoration: "none",
                }}
              >
                <div className="d-flex flex-wrap flex-column justify-content-center align-items-center">
                  <div
                    className="icon my-2"
                    style={{ width: "80px", height: "50px" }}
                  >
                    <img src={scholor} alt="" style={{ width: "4rem" }} />
                  </div>
                  <div className="card__info">
                    <h3
                      className="text-center my-2"
                      style={{ fontSize: "15px" }}
                    >
                      Educational Therapy
                    </h3>
                    <h5
                      className="text-center my-2"
                      style={{ fontSize: "10px", color: "grey" }}
                    >
                      Read More
                    </h5>
                  </div>
                </div>
              </a>
              <a
                href="#behavioral"
                className="col-sm-3 py-3 my-3"
                style={{
                  margin: "0px 10px",
                  backgroundColor: "white",
                  width: "14rem",
                  height: "9rem",
                  borderRadius: "20px",
                  boxShadow: `rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px`,
                  textDecoration: "none",
                }}
              >
                <div className="d-flex flex-wrap flex-column justify-content-center align-items-center">
                  <div
                    className="icon my-2"
                    style={{ width: "80px", height: "45px" }}
                  >
                    <img src={brainNote} alt="" style={{ width: "3rem" }} />
                  </div>
                  <div className="card__info">
                    <h3
                      className="text-center my-2"
                      style={{ fontSize: "14px" }}
                    >
                      Behavioral & Psychology Therapy
                    </h3>
                    <h5
                      className="text-center my-2"
                      style={{ fontSize: "10px", color: "grey" }}
                    >
                      Read More
                    </h5>
                  </div>
                </div>
              </a>
              <a
                href="#accupational"
                className="col-sm-3 py-3 my-3"
                style={{
                  margin: "0px 10px",
                  backgroundColor: "white",
                  width: "14rem",
                  height: "9rem",
                  borderRadius: "20px",
                  boxShadow: `rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px`,
                  textDecoration: "none",
                }}
              >
                <div className="d-flex flex-wrap flex-column justify-content-center align-items-center">
                  <div
                    className="icon my-2"
                    style={{ width: "80px", height: "50px" }}
                  >
                    <img src={writing} alt="" style={{ width: "4rem" }} />
                  </div>
                  <div className="card__info">
                    <h3
                      className="text-center my-2"
                      style={{ fontSize: "15px" }}
                    >
                      Occupational Therapy
                    </h3>
                    <h5
                      className="text-center my-2"
                      style={{ fontSize: "10px", color: "grey" }}
                    >
                      Read More
                    </h5>
                  </div>
                </div>
              </a>
            </div>
            <a
              href="#physiotherapy"
              className="col-sm-3 py-3 my-3"
              style={{
                margin: "0px 10px",
                backgroundColor: "white",
                width: "14rem",
                height: "9rem",
                borderRadius: "20px",
                boxShadow: `rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px`,
                textDecoration: "none",
              }}
            >
              <div className="d-flex flex-wrap flex-column justify-content-center align-items-center">
                <div
                  className="icon my-2"
                  style={{ width: "80px", height: "50px" }}
                >
                  <img src={physio} alt="" style={{ width: "4rem" }} />
                </div>
                <div className="card__info">
                  <h3 className="text-center my-2" style={{ fontSize: "15px" }}>
                    Physiotherapy Therapy
                  </h3>
                  <h5
                    className="text-center my-2"
                    style={{ fontSize: "10px", color: "grey" }}
                  >
                    Read More
                  </h5>
                </div>{" "}
              </div>
            </a>
            <a
              href="#counselling"
              className="col-sm-3 py-3 my-3"
              style={{
                margin: "0px 10px",
                backgroundColor: "white",
                width: "14rem",
                height: "9rem",
                borderRadius: "20px",
                boxShadow: `rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px`,
                textDecoration: "none",
              }}
            >
              <div className="d-flex flex-wrap flex-column justify-content-center align-items-center">
                <div
                  className="icon my-2"
                  style={{ width: "80px", height: "50px" }}
                >
                  <img src={brain} alt="" style={{ width: "3rem" }} />
                </div>
                <div className="card__info">
                  <h3 className="text-center my-2" style={{ fontSize: "15px" }}>
                    Counselling Therapy
                  </h3>
                  <h5
                    className="text-center my-2"
                    style={{ fontSize: "10px", color: "grey" }}
                  >
                    Read More
                  </h5>
                </div>
              </div>
            </a>
            <a
              href="#audiology"
              className="col-sm-3 py-3 my-3"
              style={{
                margin: "0px 10px",
                backgroundColor: "white",
                width: "14rem",
                height: "9rem",
                borderRadius: "20px",
                boxShadow: `rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px`,
                textDecoration: "none",
              }}
            >
              <div className="d-flex flex-wrap flex-column justify-content-center align-items-center">
                <div
                  className="icon my-2"
                  style={{ width: "80px", height: "50px" }}
                >
                  <img src={ear} alt="" style={{ width: "2.8rem" }} />
                </div>
                <div className="card__info">
                  <h3 className="text-center my-2" style={{ fontSize: "15px" }}>
                    Audiology Therapy
                  </h3>
                  <h5
                    className="text-center my-2"
                    style={{ fontSize: "10px", color: "grey" }}
                  >
                    Read More
                  </h5>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Department;
