import React from "react";
import l2 from "../../../assets/l2.jpg";
import PurchaseCard from "../Components/PurchaseCard";

const EducationalConsultation = () => {
  return (
    <>
      <div className="row py-3">
        <div className="col-sm-12 text-center my-4">
          <h2 style={{ fontWeight: "bold" }}>Educational Consultation</h2>
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
            At SPHECHO we deliver learning strategies for children with
            developmental disabilities or learning diffculties who may or may
            not be enrolled in regular schools. The department focuses primarily
            on children and adolescents with Special Needs.
          </p>
          <p>
            Our highly experienced and certified special educators create and
            implement individual educational therapy plans utilizing the various
            approaches and techniques specific to the learning goals pertaining
            to each student. Our Special education team is equipped to handle
            children and adolescent with:
          </p>

          <ul>
            <li>
              Neuro developmental disorders - autism spectrum disorders and
              intellectual disabilities
            </li>
            <li>Communication disorders</li>
            <li>Specific learning disorders</li>
          </ul>
        </div>
      </div>

      <div className="eduTherapy__info row">
        <p>We specialize in:</p>
        <div>
          <h5 style={{ fontSize: "bold" }}>
            <b>Early Literacy skill</b>
          </h5>
          <p>
            Early literacy skill is a part of cognitive development. Young
            children who develop these skills have better chances of succeeding
            later at school and carry the skills with them as they grow older.
          </p>
          <p>
            Educational Consultation is a specialized intervention for children
            with Learning disability. The educational consultation at SPHECHO
            consists of one- to- one intervention for students diagnosed with
            learning disabilities. Our educational consultants use dynamic
            intervention and use a variety of techniques. It focuses on core
            academic skills and higher ordering process to develop higher order
            processing to think and reason abstractly
          </p>
        </div>

        <div>
          <h5>
            <b>Functional Literacy Skill</b>
          </h5>
          <p>
            Our special education team develop the functional academic skills
            primely focusing Pre- requisite concepts which allow each student to
            succeed in real-life situations at home and school. The functional
            academics curriculum includes a range of areas namely:
          </p>

          <ul>
            <li>Math</li>
            <li>Reading</li>
            <li>Writing</li>
            <li>Skill oriented activities</li>
            <li>Activities of daily living</li>
            <li>Art and craft</li>
            <li>Time and money concepts</li>
          </ul>
        </div>

        <div>
          <h5>
            <b>Early intervention Program</b>
          </h5>
          <p>
            The educational consultation at SPHECHO consists of one- to- one
            intervention for students diagnosed with learning disabilities. Our
            educational consultants use dynamic intervention and use a variety
            of techniques. It focuses on core academic skills and higher
            ordering process to develop higher order processing to think and
            reason abstractly
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12 text-center my-4">
          <span style={{ fontWeight: "bold" }}>
            DO YOU WANT TO KNOW MORE ABOUT OUR PRICING?
          </span>
        </div>

        <div style={{ marginTop: "40px" }}>
          <PurchaseCard
            title="Educational Consultation Service Fees"
            numberOfCard={2}
          />
        </div>
      </div>
    </>
  );
};

export default EducationalConsultation;
