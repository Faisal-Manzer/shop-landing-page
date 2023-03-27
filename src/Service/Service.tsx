import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container, Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Accordion from "react-bootstrap/Accordion";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import axios from "axios";

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

import syn from '../assets/syn.png';
import kimg from "../assets/kimg.png";
import dimg from "../assets/dimg.png";

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

// @ts-ignore
import Fade from 'react-reveal/Fade';
// @ts-ignore
import Bounce from 'react-reveal/Bounce';
import { Parallax } from 'react-scroll-parallax';

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
      {/* <Story /> */}
      <ClientContact />
      <RequestForm />
      <FAQS />
      <NewLetter />
      <div style={{marginTop: "2rem", marginBottom: "3rem"}}>
        <h1 className="" style={{textAlign: "center", fontWeight: "bold"}}>REVERBERATING YOUR NEEDS</h1>
        <p style={{textAlign: "center"}}>THROUGH DETERMINATION</p>
      </div>
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
        left: "2%",
        right: "2%",
        zIndex: 100,
        
      }}
      expand="lg"
    >
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img className="ml-4 pl-4" src={logo} width="170rem" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto float-right">
            <Nav.Link as={Link} to="/" className="text-white link-nav">
              HOW IT WORKS
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/department"
              className="text-white link-nav"
            >
              DEPARTMENTS
            </Nav.Link>
            <Nav.Link as={Link} to="/" className="text-white link-nav">
              PROVIDERS
            </Nav.Link>
            <Nav.Link as={Link} to="/" className="text-white link-nav">
              JOIN US
            </Nav.Link>
            <Nav.Link as={Link} to="/" className="text-white link-nav">
              GET STARTED
            </Nav.Link>
            <Nav.Link as={Link} to="/" className="text-white link-nav">
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
    <div style={{ position: "relative" }}>
      <div
        className="banner-container position-relative"
        style={{ height: "130vh", width: "100%" }}
      >
        <div className="clip-container w-100 position-relative">
          <Carousel controls={false}>
            <Carousel.Item>
              <img className="d-block coursel-img" src={l1} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block coursel-img"
                src={l2}
                alt="second slide"
              />
            </Carousel.Item>
          </Carousel>
          
          <div className="banner-title">
            <Bounce left>
              <Parallax translateY={[50, -10]}>
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
            </Parallax>
            </Bounce>
          </div>
        </div>
      </div>
      <div className="wave-container-banner">
        <div className="wave"></div>
      </div>
    </div>
  );
};

const SmallBanner = () => {
  return (
    <div className="container" style={{ marginTop: "8rem" }}>
      <div className="m-auto w-75 my-4 d-flex flex-column justify-content-center">
       <Fade bottom cascade>
       <h2 className="text-landingPrimary bg-300 text-center text-center" style={{fontWeight: "400", fontSize: "1.3rem"}}>
        We support you in locating the right solutions to all your rehab-related queries under one roof. We provide services to both adult and pediatric clients. We extend a range of services, inclusive of speech and language therapy, behavioral and psychological therapy, occupational therapy, educational consultation, physiotherapy, counselling, and audiology.
        </h2>
        </Fade>
        <Bounce left>
        <button
          className="bg-landingPrimary text-white b-700 p-3 my-3 br-1 px-4"
          style={{
            fontSize: "1.7rem",
            outline: "none",
            border: "none",
            margin: "auto",
          }}
          >
          BOOK APPOINTMENT
        </button>
        </Bounce>
      </div>
    </div>
  );
};

const Methods = () => {
  return (
    <div className="container position-relative" style={{ marginTop: "11rem" }}>
      <Bounce bottom>
      <h1
        className="benefits-title text-landingPrimary text-center text-center"
        style={{ fontWeight: "700", marginBottom: "3rem" }}
      >
        METHODS OF SERVICE PROVISION AT SPHECHO
      </h1>
      </Bounce>
      <Row>
        <Col sm="4">
        <Parallax  translateX={[-50, 20]}> 
          <div>
        <Bounce left>
          <img src={syn} width="340rem" className="m-img" style={{borderRadius: "2rem"}} />
          <h4 className="text-landingDarkGray text-center b-700 mt-4">
            ONLINE
          </h4>
          <p className="text-landingDarkGray text-center">
            Online refers to services provided live in real time as 2-way
            conferencing via teletherapy
          </p>
        </Bounce>
        </div>
        </Parallax>
        </Col>
        <Col sm="4">
          <Parallax translateY={[50, -20]}>
          <div>
        <Bounce bottom>
          <img src={kimg} width="340rem" className="mid-img m-img"  style={{borderRadius: "2rem"}}/>
          <h4 className="text-landingDarkGray text-center b-700 mt-4">
            HYBRID
          </h4>
          </Bounce>

          <p className="text-landingDarkGray long-text text-center">
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
          </p>
        
          </div>
          </Parallax>
        </Col>
        <Col sm="4">
          <Parallax  translateX={[50, -50]}>
        <Bounce right>
          <img src={dimg} width="340rem" className="m-img" style={{borderRadius: "2rem"}} />
          <h4 className="text-landingDarkGray text-center b-700 mt-4">
            OFFLINE
          </h4>
          <p className="text-landingDarkGray text-center">
            Offline refers to services provided to clients in-person
          </p>
          </Bounce>
          </Parallax>
        </Col>
      </Row>
      <Parallax translateY={[50, -20]}>
      <div className="mid-text m-auto w-75">
        <p className="text-landingDarkGray" style={{ textAlign: "justify", fontWeight: "400" }}>
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
        </p>
      </div>
      </Parallax>
      {/* <div className="m1c cirlceVirbrate"></div>
      <div className="m2c cirlceVirbrate2"></div>
      <div className="m3c cirlceVirbrate3"></div>
      <div className="m4c cirlceVirbrate"></div>
      <div className="m5c cirlceVirbrate2"></div> */}
    </div>
  );
};

const TopCategories = () => {
  const hubImgs = [professional, affordable, convenient, effective];

  return (
    <div style={{marginTop: "5rem", marginBottom: "5rem", paddingTop: "1rem", paddingBottom: "1rem"}}>
      <div
        className="m-auto"
        style={{ background: "white",  zIndex: 19, padding: "5rem 0rem" }}
      >
        <Row className="container m-auto py-2" style={{ width: "80%" }}>
          {hubImgs.map((h) => (
            <Col key={h} sm="3">
              <Link to="">
                <Bounce right>
                <img src={h} style={{ width: "15rem", objectFit: "contain" }} />
                </Bounce>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
     
    </div>
  );
};

const ClientContact =() => {
  return <div>
    <div className="container">
    <Row>
    <Col sm="4">
      <div style={{minHeight: "4rem", width: "4rem", borderTopRightRadius: "2rem", padding: "0rem", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", background: "#dcdbd9"}}>
        <h1 style={{paddingBottom: "1rem"}}>Clients</h1>
        <p>Yes! I want to connect with a certified 
        Provider who combines SKILL and 
        CLIENT CARE in every session
        </p>
        <button style={{padding: ".5rem 1rem", color: "white", background: "black", border: "none", borderRadius: ".5rem",}}>CONTACT US</button>
      </div>
    </Col>
    <Col sm="4">
      <div style={{minHeight: "4rem", width: "4rem", borderTopRightRadius: "2rem", padding: "0rem", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
        <h1 style={{paddingBottom: "1rem"}}>Providers</h1>
        <p>Yes! I am a licensed and certified 
Provider looking to onboard 
Sphecho SERVICE
        </p>
        <button style={{padding: ".5rem 1rem", color: "white", background: "black", border: "none", borderRadius: ".5rem"}}>JOIN OUR NETWORK</button>
      </div>
    </Col>
    <Col sm="4">
      <div style={{minHeight: "4rem", width: "4rem", borderTopRightRadius: "2rem", padding: "0rem", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
        <h1 style={{paddingBottom: "1rem"}}>Schools</h1>
        <p>Yes! I want ACCESS to quality service 
Providers who will help our 
STUDENTS succeed
        </p>
        <button style={{padding: ".5rem 1rem", color: "white", background: "black", border: "none", borderRadius: ".5rem"}}>CONTACT US</button>
      </div>
    </Col>
    </Row>
    </div>
  </div>
}


const Sell = () => {
  const sellimgs = [assessment, match, start];
  return (
    <div className="container " style={{marginTop: "-11rem"}}>
      <div className="w-75 m-auto">
          <Bounce cascade bottom>
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
          </Bounce>
      </div>
    </div>
  );
};

const RequestForm = () => {
  const [pname, setPname] = React.useState("");
  const [contact, setContact] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [disbaled, setDisabled] = React.useState(false);

  const [sucessMessage, setSuccessMessage] = React.useState("");

  const clearFields = () => {
    setPname("");
    setContact("");
    setMessage("");
    setSubject("");
  };

  const clearMmessage = () => {
    setTimeout(() => {
      setSuccessMessage("");
    }, 7000);
  };

  const handleSubmit = () => {
    setDisabled(true);
    axios
      .post("https://qish.metahos.com/leads/add", {
        callType: "contact-us",
        contact,
        subject,
        message,
        pname,
        source: "service",
      })
      .then(() => {
        setDisabled(false);
        clearFields();
        setSuccessMessage("Your request successfully submitted.");
        clearMmessage();
      })
      .catch((err: any) => {
        setSuccessMessage("Network Error: Please try again later");
        clearMmessage();
        setDisabled(false);
        console.log(err);
      });
  };

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
          {sucessMessage ? (
            <h6 className="text-white" style={{ fontWeight: "bold" }}>
              {sucessMessage}
            </h6>
          ) : (
            <h6>.</h6>
          )}
          <div className="input-container">
            <Row>
              <Col sm="6" className="p-3">
                <Bounce bottom>
                <input
                  className="input px-2"
                  placeholder="Name"
                  name="pname"
                  value={pname}
                  onChange={(e) => setPname(e.target.value)}
                />
                </Bounce>
              </Col>

              <Col sm={6} className="p-3">
              <Bounce bottom>
                <input
                  className="input"
                  placeholder="Contact"
                  name="contact"
                  type="tel"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
                </Bounce>
              </Col>
            </Row>
            <Row>
              <Col sm={6} className="p-3">
              <Bounce bottom>
                <input
                  className="input px-2"
                  placeholder="Subject"
                  name="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
                </Bounce>
              </Col>
            </Row>
            <Row>
              <Col className="p-2">
                <h5 className="text-white">Your Message</h5>
                <Bounce bottom>
                <textarea
                  className="input px-4"
                  style={{ height: "6rem" }}
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                </Bounce>
              </Col>
            </Row>
            <Bounce bottom>
            <Button
              disabled={disbaled}
              className="bg-white text-black br-3"
              onClick={handleSubmit}
            >
              Submit
            </Button>
            </Bounce>
          </div>
          <h6 className="text-white mt-1">
            This site is protected by SPHECHO privacy policy and its terms and
            conditions.
          </h6>
        </div>
      </div>
    </div>
  );
};

const Detail = () => {
  return (
    <section className="" style={{background: "#70309e", borderTopRightRadius: "14rem", borderBottomLeftRadius: "10rem", paddingBottom: "5rem"}}> 
    <div
      className="container position-relative"
      style={{ marginTop: "-6rem", marginBottom: "5rem", maxWidth: "1400px" }}
    >
      <Row>
        <Col sm="6">
          <Fade left>
          <Parallax translateY={[20, -20]}>
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
          </Parallax>
          </Fade>
        </Col>
        <Col
          sm="6"
          style={{ fontSize: "1.1rem" }}
          className="d-flex justify-content-center align-items-center b-500 p-4"
        >
          <div className="position-relative">
            <Fade bottom>
            <div>
            <h2 className="benefits-title  bg-600 text-center text-center" style={{color: "white"}}>
              HOW IT WORKS
            </h2>
            <p className="" style={{ textAlign: "justify", color: "white", fontFamily: "inter" }}>
              We know how difficult it can be to get a face-to-face therapy
              appointment these days. How expensive it can be. How impossible it
              can feel to squeeze in a visit in your already hectic schedule.
              How unsupported you can feel between sessions. And how you just
              seem to forget all the things your provider told you since that
              last session.
            </p>
            <p className="px-3" style={{ textAlign: "justify", color: 'white' }}>
              No more. This consultation on your terms.
            </p>
            </div>
            </Fade>
            {/* <div className="circle cirlceVirbrate"></div>
            <div className="circle1 cirlceVirbrate2"></div>
            <div className="circle2 cirlceVirbrate3"></div>
            <div className="circle3 cirlceVirbrate"></div> */}
          </div>
        </Col>
      </Row>
    </div>
    </section>
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
      <Bounce right>
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
      </Bounce>
    </div>
  );
};
const NewLetter = () => {
  return (
    <Bounce left>
    <div className="mb-5 pb-4 container" style={{background: "#f1f0ee", padding: "3rem 2rem", borderRadius: "3rem", margin: 'auto', zoom: "70%"}}>
      <div className="container mb-4">
        <div className="m-auto w-75">
          <h2
            className=" text-center mb-4 b-700"
            style={{color: "#662d91"}}
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
              <Button  style={{background: "#662d91", color: "white"}} className="newsLetter-btn">Subscribe</Button>
            </Col>
          </Row>
          <h6 className="text-center" style={{ color: "gray" }}>
            By subscribing, you consent to us sharing updates with you.
          </h6>
        </div>
      </div>
    </div>
    </Bounce>
  );
};

const Footer = () => {
  const speechLinks = [
    {
      title: "Speech Therapy",
      href: "/department/speech",
    },
    {
      title: "Educational Consultation",
      href: "/department/education",
    },
    {
      title: "Occupational Therapy",
      href: "/department/accupational",
    },
    {
      title: "Behavioral & Psychological",
      href: "/department/behavioral",
    },
    {
      title: "Physiotherapy",
      href: "/department/physiotherapy",
    },
    {
      title: "Counselling",
      href: "/department/counselling",
    },
    {
      title: "Audiology",
      href: "/department/audiology",
    },
  ];

  const usefullLinks = [
    {
      title: "PROVIDERS",
      link: "",
    },
    {
      title: "SPHECHO LEARN",
      link: "http://sphecholms.metahos.com",
    },
    {
      title: "SPHECHO SHOP",
      link: "http://sphecho-shop.metahos.com",
    },
    {
      title: "SPHECHO SCHOLAR",
      link: "",
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
                    <a key={link.title} className="link b-400" href={link.href}>
                      {link.title}
                    </a>
                  ))}
                </Col>
                <Col sm="3">
                  <h5 className="b-700 mb-2 link-header">USEFUL LINKS</h5>
                  {usefullLinks.map((l) => (
                    <a key={l.title} className="link b-400" href={l.link}>
                      {l.title}
                    </a>
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


const FAQS = () => {
  const faqs = [
    {
      id: 1,
      header: "How does SPHECHO tele practice work? What can i expect?",
      content:
        "The SPHECHO certification program is intended to assess the knowledge, talents, and skills needed to carry out a certain job, and, upon passing a certification exam, to serve as a testament to an individual's level of professional competence.",
    },
    {
      id: 2,
      header: "Why Tele practice?",
      content:
        "Our credentials are governed and approved by our professional board that frequently reviews all policies and procedures of SPHECHO. The board is composed of a variety of specialists and experts, including clinical experts, therapists, special education professionals etc.",
    },
    {
      id: 3,
      header: "What can i get therapy?",
      content: `Recognition for voluntarily meeting standards beyond professional and regional licensing requirements
      Enhancement of reputation and credibility`,
    },
    {
      id: 4,
      header: "Do i have to be an adult to get teletherapy services?",
      content:
        "SPHECHO does not guarantee employment or specific job roles, however many professionals can utilize SPHECHO credentials on their professional resume to assist them in standing out among other applicants. All SPHECHO providers are certified.",
    },
    {
      id: 5,
      header:
        "How often can i see my therapist",
      content:
        "You will have to complete the coursework and final exam within 30 days.",
    },
   
  ];

  return (
    <div
      className="container m-auto text-center"
      style={{ marginBottom: "6rem", paddingBottom: "5rem", zoom: "80%" }}
    >
      <div className="w-75 m-auto ">
        <h1 className="text-landingPrimary my-4 b-600">
          FREQUENTLY ASKED QUESTIONS
        </h1>
        <p style={{ fontSize: "1.2rem", marginBottom: "6rem" }}>
          Please click on a topic below to view common questions. Once you have
          chosen your topic simply click any question to reveal the answer.
          Can’t find an answer to your question? Contact us today
        </p>
        <Accordion defaultActiveKey="0">
          <Bounce cascade bottom>
          {faqs.map((faq) => (
            <Accordion.Item
              key={faq.id}
              eventKey={`${faq.id}`}
              className="accordion-item"
            >
              <Accordion.Header className="accordin-h">
                <p className="accordin-title">{faq.header}</p>
              </Accordion.Header>
              <Accordion.Body
                className="accordin-content"
                style={{ fontSize: "1.2rem" }}
              >
                {faq.content}
              </Accordion.Body>
            </Accordion.Item>
          ))}
          </Bounce>
        </Accordion>
      </div>
    </div>
  );
};

export default Service;
