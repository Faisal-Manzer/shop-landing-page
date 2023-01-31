import React from "react";
import l2 from "../../../assets/l2.jpg";
import PurchaseCard from "../Components/PurchaseCard";

const OccupationalTherapy = () => {
  return (
    <>
      <div className="row py-3">
        <div className="col-sm-12 text-center my-4">
          <h2 style={{ fontWeight: "bold" }}>Counselling</h2>
        </div>
        <div
          className="speechTherapy__img col-sm-6 p-3"
          style={{ height: "320px" }}
        >
          <img
            src={l2}
            alt="speech-therapy"
            style={{ width: "100%", height: "100%", borderRadius: "20px" }}
          />
        </div>
        <div
          className="speechTherapy__info col-sm-6 p-3 d-flex"
          style={{ fontSize: "14px", fontWeight: "500" }}
        >
          <div className="my-auto">
            <p>
              Counselling can assist a child or an adult in case of behavioral
              problems or to cope with diffcult circumstances. Our in-house
              psychologist is very experienced and can recommend the best
              intervention approach suitable for each individual child. The
              duration of counselling varies depending on the severity of the
              diff- culties faced.
            </p>

            <p>
              Our platform offers a fun and joyful environment and is very child
              friendly.
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm-10">
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
                Counselling Services
              </span>
              <ul className="mt-4">
                <li>Adult counselling</li>
                <li>Child counselling</li>
                <li>Couples therapy</li>
                <li>Family therapy</li>
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
                Counselling is available for individuals presenting
              </span>
              <ul className="mt-4">
                <li>Anxiety disorders</li>
                <li>Mood disorders</li>
                <li>Phobias</li>
                <li>Eating disorders</li>
                <li>School refusal</li>
                <li>Self esteem concerns</li>
                <li>Grief</li>
                <li>Obsessive Compulsive Disorder (OCD)</li>
                <li>Enuresis</li>
                <li>Anger management</li>
                <li>Adjustment issues</li>
                <li>Social skills concerns</li>
                <li>Communication & parenting issues</li>
              </ul>
            </div>
          </div>
          <div className="col-sm-1"></div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12 text-center my-4">
          <span style={{ fontWeight: "bold" }}>
            DO YOU WANT TO KNOW MORE ABOUT OUR PRICING?
          </span>
        </div>

        <div style={{ marginTop: "40px" }}>
          <PurchaseCard title="Counselling Services" numberOfCard={2} />
        </div>
      </div>
    </>
  );
};

export default OccupationalTherapy;
