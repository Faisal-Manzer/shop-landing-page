import React from "react";
import "./department.scss";

//landing pages
// import l1 from "../assets/l1.jpg";
import l2 from "../assets/l2.jpg";
import Departments from "./Components/Department";
import EducationalConsultation from "./Components/EducationalConsultation";
import OccupationalTherapy from "./Components/OccupationalTherapy";
import Physiotherapy from "./Components/Physiotherapy";
import Counselling from "./Components/Counselling";
import Audiology from "./Components/Audiology";
import BehavioralTherapy from "./Components/BehavioralTherapy";

const Department = () => {
  React.useEffect(() => {
    const { pathname } = window.location;
    const currentSection = pathname.split("/")[2];
    const a = document.createElement("a");
    if (currentSection === "speech") {
      a.href = "#speech";
    } else if (currentSection === "education") {
      a.href = "#education";
    } else if (currentSection === "accupational") {
      a.href = "#accupational";
    } else if (currentSection === "behavioral") {
      a.href = "#behavioral";
    } else if (currentSection === "physiotherapy") {
      a.href = "#physiotherapy";
    } else if (currentSection === "counselling") {
      a.href = "#counselling";
    } else if (currentSection === "audiology") {
      a.href = "#audiology";
    }
    a.click();
  }, []);

  return (
    <div className="container">
      <Departments />
      <div id="speech">
        <SpeechTherapy />
      </div>
      <div id="education">
        <EducationalConsultation />
      </div>
      <div id="accupational">
        <OccupationalTherapy />
      </div>
      <div id="behavioral">
        <BehavioralTherapy />
      </div>
      <div id="physiotherapy">
        <Physiotherapy />
      </div>
      <div id="counselling">
        <Counselling />
      </div>
      <div id="audiology">
        <Audiology />
      </div>
    </div>
  );
};

const SpeechTherapy = () => {
  return (
    <div className="row py-3">
      <div className="col-sm-12 text-center my-4">
        <h2 style={{ fontWeight: "bold" }}>Speech Therapy</h2>
      </div>
      <div className="speechTherapy__img col-sm-6 p-3">
        <img
          src={l2}
          alt="speech-therapy"
          style={{ width: "100%", height: "100%", borderRadius: "20px" }}
        />
      </div>

      <div
        className="speechTherapy__info col-sm-6 p-3"
        style={{ fontSize: "14px", fontWeight: "500" }}
      >
        <p>
          An allied health practitioner with training in providing speech
          therapy services to both pediatric and adult populations is recognized
          as a speech-language pathologist (SLP) at SPHECHO. Their offerings
          include evaluation and treatment of communication and swallowing
          diffculties brought on by inherited and acquired medical illnesses.
        </p>
        <p>
          Adult swallowing and/or communication diffculties frequently result
          from chronic diseases including Parkinson's disease, dementia, and
          motor neuron diseases as well as acute ones like stroke and traumatic
          brain injury. On the other hand, feeding, swallowing, and/or
          communication issues in children frequently result from underlying
          medical disorders (i.e., present from birth). These include Cerebral
          Palsy and Autism Spectrum Disorder (ASD).
        </p>
        <p>
          To provide comprehensive treatment and management of the individual's
          functional impairments, we at SPHECHO believe in a collaborative
          approach with pertinent experts (such as occupational therapists,
          educators, etc.) and the individual's family.
        </p>
      </div>

      <div className="col-sm-12 text-center my-4">
        <span style={{ fontWeight: "bold" }}>
          SPHECHO teletherapy services specializes in the following areas:
        </span>
      </div>

      <div className="col-sm-12">
        <div
          className="row"
          style={{
            backgroundColor: "lightgrey",
            border: "1px solid grey",
            borderRadius: "20px",
            padding: "40px",
          }}
        >
          <div className="col-sm-6">
            <span
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                marginLeft: "10px",
              }}
            >
              Adult
            </span>
            <ul className="mt-4">
              <li>Swallowing disorders</li>
              <li>Speech delay/disorders</li>
              <li>Language delay/disorders</li>
              <li>Voice disorders</li>
              <li>Fluency disorders</li>
            </ul>
          </div>
          <div className="col-sm-6">
            <span
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                marginLeft: "10px",
              }}
            >
              Pediatric
            </span>
            <ul className="mt-4">
              <li>Speech delay/disorder</li>
              <li>Language delay/disorder</li>
              <li>Developmental language disorder</li>
              <li>Feeding, eating, drinking, swallowing disorders</li>
              <li>Fussy eaters</li>
              <li>Social or pragmatic language disorder/impairment</li>
              <li>Oro-motor diffculties</li>
              <li>Fluency</li>
              <li>Apraxia of speech</li>
              <li>Voice disorders</li>
              <li>Hearing impairment</li>
              <li>Social skills training</li>
              <li>Autism Spectrum Disorder (ASD)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col-sm-12 text-center my-4">
        <span style={{ fontWeight: "bold" }}>
          DO YOU WANT TO KNOW MORE ABOUT OUR PRICING?
        </span>
      </div>

      <div style={{ marginTop: "40px" }}>
        <TherapyFees title="Pediatric Speech Language Therapy Fees" />
      </div>
      <div style={{ marginTop: "40px" }}>
        <TherapyFees title="Adult Speech Language Therapy Fees" />
      </div>
    </div>
  );
};

const TherapyFees = ({ title }: any) => {
  return (
    <div>
      <div className="row therapyFees" style={{ borderRadius: "40px" }}>
        <div
          className="text-center py-3"
          style={{
            borderRadius: "40px 40px 0px 0px",
            backgroundColor: "#52195e",
            fontWeight: "bold",
          }}
        >
          <span className="text-white">{title}</span>
        </div>

        <div style={{ padding: "20px 40px" }}>
          <div className="row my-5">
            <div className="col-sm-4">
              <FeesCard
                cardTitle="30 - mins
First Consultation"
                cardPrice="0"
              />
            </div>
            <div className="col-sm-4">
              <FeesCard
                cardTitle="45-60 mins
Therapy Session
(A-La-Cart)"
                cardPrice="20"
              />
            </div>
            <div className="col-sm-4">
              <FeesCard
                cardTitle="45-60 mins
Therapy Session
(A-La-Cart)"
                cardPrice="20"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeesCard = ({ cardTitle, cardPrice }: any) => {
  return (
    <div className="feesCard">
      <div className="feesCard__header">
        <i className="bi bi-clock" style={{ fontSize: "35px" }}></i>
        <span style={{ fontSize: "18px" }}>{cardTitle}</span>
      </div>

      <div className="feesCard__section">
        <div className="feesCard__middle">
          <h4 style={{ fontWeight: "bold" }}>From</h4>
          <h1>
            <span style={{ fontSize: "20px", fontWeight: "bold" }}>$</span>
            <span style={{ fontSize: "90px", fontWeight: "bold" }}>
              {cardPrice}
            </span>
          </h1>
          <h4 style={{ fontWeight: "bold" }}>/session</h4>
        </div>

        <div className="feesCard__footer">
          <a
            href="https://qish.metahos.com/clientLogin"
            className="feesCard__getStartedBtn"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};
const MoreFeesCard = () => {
  return (
    <div className="feesCard">
      <div className="feesCard__header">
        <i className="bi bi-clock" style={{ fontSize: "35px" }}></i>
        <span style={{ fontSize: "18px" }}>More Therapy Sessions</span>
      </div>

      <div className="feesCard__section">
        <div className="feesCard__middle">
          <h4 style={{ fontWeight: "bold" }}>View our packages below</h4>
          <h1>
            <span style={{ fontSize: "20px", fontWeight: "bold" }}></span>
            <span style={{ fontSize: "90px", fontWeight: "bold" }}></span>
          </h1>
          <h4 style={{ fontWeight: "bold" }}></h4>
        </div>

        <div className="feesCard__footer">
          <a
            href="https://qish.metahos.com/clientLogin"
            className="feesCard__getStartedBtn"
          ></a>
        </div>
      </div>
    </div>
  );
};

export default Department;
