import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container, Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Accordion from "react-bootstrap/Accordion";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import landing from "../assets/landing.png";
import logo from "../assets/sphechoLogo.png";
import colorLogo from "../assets/colorlogo.png";

import professional from "../assets/professional.png";
import affordable from "../assets/affordable.png";
import convenient from "../assets/convenient.png";
import effective from "../assets/effective.png";

// sell
import assessment from "../assets/assessment.png";
import match from "../assets/match.png";
import start from "../assets/start.png";
//
import works from "../assets/works.png";
//
import synchornous from "../assets/synchornous.png";
import hybrid from "../assets/hybrid.png";
import asynchronous from "../assets/asynchronous.png";

//landing pages
import l1 from "../assets/l1.jpg";
import l2 from "../assets/l2.jpg";

//
import apple from "../assets/apple.png";
import fb from "../assets/fb.png";
import ig from "../assets/ig.png";
import ins from "../assets/in.png";
import playstore from "../assets/playstore.png";
import tw from "../assets/tw.png";
import yt from "../assets/yt.png";
import "./service.scss";

const Service = () => {
  return (
    <div style={{ position: "relative" }}>
      <NavBar />
      <Banner />
      <SmallBanner />
      <Methods />
      <TopCategories />
      <Detail />
      <Sell />
      <Story />
      <RequestForm />
      <NewLetter />
      <Footer />
    </div>
  );
};

const NavBar = () => {
  return (
    <Navbar
      className="nav-bar-container"
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        zIndex: 100,
      }}
      bg="light"
      expand="lg"
    >
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img className="ml-4 pl-4" src={logo} width="170rem" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto float-right">
            <Nav.Link as={Link} to="/" className="text-white b-700 link-nav">
              HOW IT WORKS
            </Nav.Link>
            <Nav.Link as={Link} to="/department" className="text-white b-700 link-nav">
              DEPARTMENTS
            </Nav.Link>
            <Nav.Link as={Link} to="/" className="text-white b-700 link-nav">
              PROVIDERS
            </Nav.Link>
            <Nav.Link as={Link} to="/" className="text-white b-700 link-nav">
              JOIN US
            </Nav.Link>
            <Nav.Link as={Link} to="/" className="text-white b-700 link-nav">
              GET STARTED
            </Nav.Link>
            <Nav.Link as={Link} to="/" className="text-white b-700 link-nav">
              LOGIN
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const Banner = () => {
  return (
    <div
      className="banner-container position-relative"
      style={{ height: "130vh", width: "100%" }}
    >
      <svg
        id="svgPath"
        viewBox="0 0 1438 693"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="clipPath" clipPathUnits="objectBoundingBox">
            <path
              transform="scale(0.001390820584, 0.00144300144)"
              d="M153 598C56.6 601.2 56.5 630 0.5 660V0.5H1437.5V566C1413.05 580.421 1210.85 695.396 1066.5 692C913.885 688.409 817.872 566 758 566C641.5 566 550.202 680 465.5 680C341.5 680 273.5 594 153 598Z"
              stroke="black"
            />
          </clipPath>
        </defs>
      </svg>

      <div className="clip-container w-100 position-relative">
        <Carousel controls={false}>
          <Carousel.Item>
            <img className="d-block coursel-img" src={l1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block coursel-img" src={l2} alt="second slide" />
          </Carousel.Item>
        </Carousel>
        <div className="banner-title">
          <h1 className="container">
            THE BEST WAY TO GET THINGS
            <i>
              <b style={{ fontSize: "3rem" }}> DONE</b>
            </i>{" "}
            <br></br>
            IS TO SIMPLY
            <i>
              <b style={{ fontSize: "3rem" }}> BEGIN</b>
            </i>
          </h1>
        </div>
      </div>
    </div>
  );
};

const SmallBanner = () => {
  return (
    <div className="container" style={{ marginTop: "8rem" }}>
      <div className="m-auto w-75 my-4 d-flex flex-column justify-content-center">
        <h2 className="benefits-title text-landingPrimary bg-300 text-center text-center">
          Convenient and affordable therapy with SPHECHO anytime, anywhere
        </h2>
        <button
          className="bg-landingPrimary text-white b-700 p-3 my-3 br-4 px-4"
          style={{
            fontSize: "1.7rem",
            outline: "none",
            border: "none",
            margin: "auto",
          }}
        >
          BOOK APPOINTMENT
        </button>
      </div>
    </div>
  );
};

const Methods = () => {
  return (
    <div className="container position-relative" style={{ marginTop: "11rem" }}>
      <h1
        className="benefits-title text-landingPrimary text-center text-center"
        style={{ fontWeight: "700" }}
      >
        METHODS OF SERVICE PROVISION AT SPHECHO
      </h1>
      <Row>
        <Col sm="4">
          <img src={synchornous} width="340rem" className="m-img" />
          <h4 className="text-landingDarkGray text-center b-700 mt-4">
            ONLINE
          </h4>
          <h5 className="text-landingDarkGray text-center">
            Online refers to services provided live in real time as 2-way
            conferencing via teletherapy
          </h5>
        </Col>
        <Col sm="4">
          <img src={hybrid} width="340rem" className="mid-img m-img" />
          <h4 className="text-landingDarkGray text-center b-700 mt-4">
            HYBRID
          </h4>
          <h5 className="text-landingDarkGray long-text text-center">
            Hybrid refers to a combination of synchronous and asynchronous
            approaches as needed. This service consists of alternating inperson
            and teletherapy sessions i.e., based on individual client scenario
            new client appointments are virtual, and/or initial follow up could
            be in-person. New client appointments otien place heavy emphasis on
            detailed history. This can be completed via teletherapy which, by
            design, is more conversation focused. Follow-up appointments can be
            initially scheduled as in-person visits, given that many of these
            appointments require problem-focused physical assessments and
            diagnostic work. Subsequent visits can be teletherapy if this seems
            appropriate to the client and the provider
          </h5>
        </Col>
        <Col sm="4">
          <img src={asynchronous} width="340rem" className="m-img" />
          <h4 className="text-landingDarkGray text-center b-700 mt-4">
            OFFLINE
          </h4>
          <h5 className="text-landingDarkGray text-center">
            Offline refers to services provided to clients in-person
          </h5>
        </Col>
      </Row>
      <div className="mid-text m-auto w-75">
        <h5 className="text-landingDarkGray" style={{ textAlign: "justify" }}>
          Hybrid refers to a combination of synchronous and asynchronous
          approaches as needed. This service consists of alternating inperson
          and teletherapy sessions i.e., based on individual client scenario new
          client appointments are virtual, and/or initial follow up could be
          in-person. New client appointments otien place heavy emphasis on
          detailed history. This can be completed via teletherapy which, by
          design, is more conversation focused. Follow-up appointments can be
          initially scheduled as in-person visits, given that many of these
          appointments require problem-focused physical assessments and
          diagnostic work. Subsequent visits can be teletherapy if this seems
          appropriate to the client and the provider
        </h5>
      </div>
      <div className="m1c cirlceVirbrate"></div>
      <div className="m2c cirlceVirbrate2"></div>
      <div className="m3c cirlceVirbrate3"></div>
      <div className="m4c cirlceVirbrate"></div>
      <div className="m5c cirlceVirbrate2"></div>
    </div>
  );
};

const TopCategories = () => {
  const hubImgs = [professional, affordable, convenient, effective];

  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#F1F0EE"
          d="M0,96L80,112C160,128,320,160,480,149.3C640,139,800,85,960,74.7C1120,64,1280,96,1360,112L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <div
        className="m-auto"
        style={{ background: "#F1F0EE", marginTop: "-10%", zIndex: 19 }}
      >
        <Row className="container m-auto py-2" style={{ width: "80%" }}>
          {hubImgs.map((h) => (
            <Col key={h} sm="3">
              <Link to="">
                <img src={h} style={{ height: "25rem", width: "20rem" }} />
              </Link>
            </Col>
          ))}
        </Row>
      </div>
      <svg
        style={{ marginTop: "-1rem", zIndex: "-400" }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#F1F0EE"
          d="M0,96L80,122.7C160,149,320,203,480,192C640,181,800,107,960,96C1120,85,1280,139,1360,165.3L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
};

const Sell = () => {
  const sellimgs = [assessment, match, start];
  return (
    <div className="container ">
      <div className="w-75 m-auto">
        <Row>
          {sellimgs.map((image, idx) => (
            <>
              <Col key={idx} sm="4">
                <div className="d-flex text-center justify-content-end align-items-center">
                  {idx === 0 ? (
                    <></>
                  ) : (
                    <h1 className="px-4 ml-4" style={{ color: "gray" }}>
                      {"▸"}
                    </h1>
                  )}
                  <img src={image} width="250rem" />
                </div>
              </Col>
            </>
          ))}
        </Row>
      </div>
    </div>
  );
};

const RequestForm = () => {
  return (
    <div className="bg-image" style={{ margin: "8rem 0rem" }}>
      <div className="container p-2">
        <div className="m-auto text-center py-4 my-4" style={{ zIndex: 10 }}>
          <h2 className="text-white mb-3 b-700">CONTACT US</h2>
          <h5 className="b-500 text-white">
            Have any questions? We’d like to hear from you.
          </h5>
          <h5 className="text-white">
            Please fill out the form below and we will do our best to respond
            within 1 business day
          </h5>
          <div className="input-container">
            <Row>
              <Col sm="6" className="p-3">
                <input className="input px-2" placeholder="Name" />
              </Col>

              <Col sm={6} className="p-3">
                <input className="input" placeholder="Email address" />
              </Col>
            </Row>
            <Row>
              <Col sm={6} className="p-3">
                <input className="input px-2" placeholder="Subject" />
              </Col>
            </Row>
            <Row>
              <Col className="p-2">
                <h5 className="text-white">Your Message</h5>
                <textarea className="input px-4" style={{ height: "6rem" }} />
              </Col>
            </Row>
            <Button className="bg-white text-black br-3">Submit</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Detail = () => {
  return (
    <div
      className="container position-relative"
      style={{ marginTop: "6rem", marginBottom: "5rem", maxWidth: "1400px" }}
    >
      <Row>
        <Col sm="6">
          <img
            className="works-img"
            src={works}
            width="930px"
            style={{
              objectFit: "cover",
              marginLeft: "-15rem",
              marginBottom: "2rem",
            }}
          />
        </Col>
        <Col
          sm="6"
          style={{ fontSize: "1.1rem" }}
          className="d-flex justify-content-center align-items-center b-500 p-4"
        >
          <div className="position-relative">
            <h2 className="benefits-title text-landingPrimary bg-600 text-center text-center">
              HOW IT WORKS
            </h2>
            <h5 className="b-400 px-3" style={{ textAlign: "justify" }}>
              We know how difficult it can be to get a face-to-face therapy
              appointment these days. How expensive it can be. How impossible it
              can feel to squeeze in a visit in your already hectic schedule.
              How unsupported you can feel between sessions. And how you just
              seem to forget all the things your provider told you since that
              last session.
            </h5>
            <h5 className="b-400 px-3" style={{ textAlign: "justify" }}>
              No more. This consultation on your terms.
            </h5>
            <div className="circle cirlceVirbrate"></div>
            <div className="circle1 cirlceVirbrate2"></div>
            <div className="circle2 cirlceVirbrate3"></div>
            <div className="circle3 cirlceVirbrate"></div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

const Story = () => {
  const slide = [
    {
      message: `Michelle listens and provides excellent guidance through life’s situations`,
      by: "Written by S.A. For Michelle Wilkison (MA, LPC-S)",
    },
    {
      message: `Lorem ipusm the data and shows here`,
      by: "Written by S.A. For Michelle Wilkison (MA, LPC-S)",
    },
  ];

  return (
    <div className="container m-auto" style={{ paddingTop: "8rem" }}>
      <h2 className="benefits-title text-landingPrimary bg-300 text-center text-center">
        SUCCESS STORIES
      </h2>
      <div style={{ marginBottom: "7rem" }}>
        <Carousel variant="dark" prevIcon={<></>} nextIcon={<></>}>
          {slide.map((item) => (
            <Carousel.Item>
              <div
                className="br-4"
                style={{
                  minHeight: "26rem",
                  width: "100%",
                  background: "#F6ECFF",
                  padding: "6rem",
                }}
              >
                <blockquote>{item.message}</blockquote>
                <h5
                  className="py-2 text-landingPrimary text-center m-auto b-500 story-by"
                  style={{ fontSize: "1.5rem", width: "45%" }}
                >
                  {item.by}
                </h5>
                <button className="px-4 py-2 mt-2 br-5 more-story-btn">
                  More Success Stories
                </button>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
const NewLetter = () => {
  return (
    <div className="mb-5 pb-4">
      <div className="container mb-4">
        <div className="m-auto w-75">
          <h2
            className=" text-center mb-4 b-700"
            style={{ color: "rgb(163, 160, 160)" }}
          >
            SUBSCRIBE TO OUR NEWSLETTER
          </h2>
          <Row>
            <Col sm="9" className="p-2">
              <input
                className="newLetter-input"
                placeholder="Enter your Email Address"
              ></input>
            </Col>
            <Col sm="3" className="p-2 m-auto">
              <Button className="newsLetter-btn">Subscribe</Button>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  const speechLinks = [
    {
      title: "SPEECH THERAPY",
    },
    {
      title: "EDUCATIONAL CONSULTATION",
    },
    {
      title: "OCCUPATIONAL THERAPY",
    },
    {
      title: "BEHAVIORAL & PSYCHOLOGICAL",
    },
    {
      title: "PHYSIOTHERAPY",
    },
    {
      title: "COUNSELLING",
    },
    {
      title: "AUDIOLOGY",
    },
  ];

  const usefullLinks = [
    {
      title: "PROVIDERS",
    },
    {
      title: "SPHECHO LEARN",
    },
    {
      title: "SPHECHO SHOP",
    },
    {
      title: "SPHECHO SCHOLAR",
    },
  ];

  const aboutUs = [
    {
      title: "BLOG",
    },
    {
      title: "PRIVACY POLICY",
    },
    {
      title: "TERMS & CONDITIONS",
    },
    {
      title: "FAQs",
    },
  ];

  return (
    <footer>
      <div className="">
        <Row>
          <Col sm="3" className="p-4">
            <div className="d-flex flex-column align-items-center ">
              <img src={colorLogo} width="126rem" />
              <div className="d-flex mt-2">
                <img
                  src={fb}
                  width="35rem"
                  style={{ margin: ".5rem", cursor: "pointer" }}
                />
                <img
                  src={ig}
                  width="35rem"
                  style={{ margin: ".5rem", cursor: "pointer" }}
                />
                <img
                  src={ins}
                  width="35rem"
                  style={{ margin: ".5rem", cursor: "pointer" }}
                />
                <img
                  src={tw}
                  width="35rem"
                  style={{ margin: ".5rem", cursor: "pointer" }}
                />
                <img
                  src={yt}
                  width="35rem"
                  style={{ margin: ".5rem", cursor: "pointer" }}
                />
              </div>
              <img
                src={playstore}
                width="150rem"
                style={{ display: "block", marginTop: "1rem" }}
              />
              <img
                src={apple}
                width="150rem"
                style={{ display: "block", marginTop: "1rem" }}
              />
            </div>
          </Col>
          <Col sm="9">
            <div className="navlinks-container-footer p-3">
              <Row>
                <Col sm="2"></Col>
                <Col sm="4" className="p-2">
                  <h5 className="b-700 mb-2 link-header">DEPARTMENTS</h5>
                  {speechLinks.map((link) => (
                    <Link key={link.title} className="link b-400" to="/">
                      {link.title}
                    </Link>
                  ))}
                </Col>
                <Col sm="3">
                  <h5 className="b-700 mb-2 link-header">USEFUL LINKS</h5>
                  {usefullLinks.map((link) => (
                    <Link key={link.title} className="link b-400" to="/">
                      {link.title}
                    </Link>
                  ))}
                </Col>
                <Col sm="3">
                  <h5 className="b-700 mb-2 link-header">ABOUT US</h5>
                  {aboutUs.map((link) => (
                    <Link key={link.title} className="link b-400" to="/">
                      {link.title}
                    </Link>
                  ))}
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Service;
