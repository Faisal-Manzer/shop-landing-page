import React from "react";

import "./PurchaseCard.scss";

const PurchaseCard = ({ title, numberOfCard }: any) => {
  return (
    <div>
      <div
        className="row therapyFees"
        style={{ borderRadius: "40px", backgroundColor: "#e0d3e3" }}
      >
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
            className="feesCard__getStartedBtn"
            href="https://qish.metahos.com/clientLogin"
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
          <button className="feesCard__getStartedBtn"></button>
        </div>
      </div>
    </div>
  );
};

export default PurchaseCard;
