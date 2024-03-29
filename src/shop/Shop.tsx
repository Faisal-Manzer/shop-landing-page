import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container, Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Accordion from "react-bootstrap/Accordion";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import career from "../assets/career.png";
// import discover from "../assets/discover.png";
// import enhance from "../assets/enhance.png";
// import improve from "../assets/improve.png";
// import noImage from "../assets/no-img.png";
import landing from "../assets/landing.png";
import s1 from "../assets/s1.jpg";
import s2 from "../assets/s2.jpg";
import logo from "../assets/sphechoLogo.png";
import colorLogo from "../assets/colorlogo.png";
import cshop from "../assets/cshop.png";

import wave from "../assets/wave.png";
// store
import therapy from "../assets/therapy.png";
import play from "../assets/play.png";
import hearing from "../assets/hearing.png";
import kit from "../assets/kit.png";
// resoure hub
import educational from "../assets/educational.png";
import organised from "../assets/organised.png";
import worksheet from "../assets/worksheets.png";
import bundles from "../assets/bundles.png";
// sell
import support from "../assets/support.png";
import growth from "../assets/growth.png";
import transparent from "../assets/transparency.png";

import apple from "../assets/apple.png";
import fb from "../assets/fb.png";
import ig from "../assets/ig.png";
import ins from "../assets/in.png";
import playstore from "../assets/playstore.png";
import tw from "../assets/tw.png";
import yt from "../assets/yt.png";
import "./shop.scss";

const Shop = () => {
  return (
    <div style={{ position: "relative" }}>
      <NavBar />
      <Banner />
      <StoreContainer />
      <ResourceHub />
      {/* <TitleContainer /> */}
      <TopCategories />
      {/* <Board />
      <Committe />
      <InternalCommitee /> */}
      {/* <FAQS /> */}
      <Sell />
      <Detail />
      <RequestForm />
      <NewLetter />
      <Footer />
    </div>
  );
};

const NavBar = () => {
  return (
    <Navbar
      className="nav-bar-container-fluid"
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
          <img src={logo} width="170rem" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div className="search-container">
          <input className="search-input" type="search" placeholder="search" />
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <a href="https://qishcommerce.metahos.com" className="text-white b-700 link-nav mt-2" style={{textDecoration:'none'}} target="_blank">
            STORE
            </a>
            <Nav.Link as={Link} to="/" className="text-white b-700 link-nav">
              RESOURCE HUB
            </Nav.Link>
            <Nav.Link as={Link} to="/" className="text-white b-700 link-nav">
              SELL
            </Nav.Link>
            <Nav.Link as={Link} to="/" className="text-white b-700 link-nav">
              SUPPORT
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="login"
              className="text-white b-700 link-nav"
            >
              LOGIN/REGISTER
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const Banner = () => {
  return (
    <div className="position-relative">
      <div
        className="banner-container position-relative"
        style={{ height: "130vh", width: "100%" }}
      >
        {/* <svg
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
        </svg> */}

        <div className="clip-container w-100 position-relative">
          <Carousel controls={false}>
            <Carousel.Item>
              <img className="d-block coursel-img" src={s1} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block coursel-img"
                src={s2}
                alt="second slide"
              />
            </Carousel.Item>
          </Carousel>
          <div className="banner-title">
            <h1 className="container">
              YOU CAN ALWAYS
              <i>
                <b style={{ fontSize: "3rem" }}> FIND</b>
              </i>{" "}
              <br></br>
              SOMETHING YOU
              <i>
                <b style={{ fontSize: "3rem" }}> WANT</b>
              </i>
            </h1>
          </div>
        </div>
      </div>
      <img
        className="wave"
        src={wave}
        style={{ width: "100%", position: "absolute", bottom: "0" }}
      />
    </div>
  );
};

const TitleContainer = () => {
  return (
    <div className="title-content">
      <p>
        The SPHECHO curriculum and cerification program is for professionals who
        are responsible for the support and/or services provided to people of
        determination. The program's objective is to offer a comprehensive,
        multidisciplinary training program and specialized credential to
        professionals in order to supplement their existing knowledge, make sure
        they are up to date on best practices and research, and ensure they
        incorporate new knowledge into professional practice.
      </p>
    </div>
  );
};

const StoreContainer = () => {
  const store = [
    {
      name: "THERAPY MATERIALS",
      img: therapy,
    },
    {
      name: `PLAY & DEVELOPMENT`,
      img: play,
    },
    {
      name: `HEARING AIDS & ACCESSSORIES`,
      img: hearing,
    },
    {
      name: `STARTER KIT`,
      img: kit,
    },
  ];

  return (
    <div className="container w-75 text-center">
      <h2 className="benefits-title bg-600 text-center">STORE</h2>
      <Row>
        {store.map((s) => (
          <Col key={s.name} sm="3" className="mb-4">
            <img className="shop-img" src={s.img} />
            <p className="m-auto b-600 w-50 mt-3">{s.name}</p>
          </Col>
        ))}
      </Row>
    </div>
  );
};

const ResourceHub = () => {
  const hubImgs = [educational, organised, worksheet, bundles];
  return (
    <div className="container w-75 text-center" style={{ marginTop: "7rem" }}>
      <h2 className="benefits-title bg-600 text-center">RESOURCE HUB</h2>
      <Row>
        {hubImgs.map((h) => (
          <Col key={h} sm="3">
            <Link to="">
              <img src={h} style={{ width: "15rem" }} />
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

const TopCategories = () => {
  const categories = [
    {
      title: "SHOP BY DEPARTMENT",
      items: [
        "SHOP BY DEPARTMENT",
        "SHOP BY DEPARTMENT",
        "OCCUPATIONAL THERAPY",
        "BEHAVIORAL & PSYCHOLOGICAL",
        "PHYSIOTHERAPY",
        "COUNCELLING",
        "---",
        "COUNCELLING",
        "---",
      ],
    },
    {
      title: "POPULAR WITH PROVIDERS",
      items: [
        "ORAL MOTOR TOOL",
        "SPEECH KIT",
        "BOARD GAMES",
        "PUZZLES",
        "PEPPAPIG BUBBLES",
        "FLUENCY KIT",
        "---",
        "FINGER PUPPETS",
        "---",
      ],
    },
    {
      title: "TOP SELLERS",
      items: [
        "FINGER PUPPETS",
        "PUZZLES",
        "PEPPAPIG BUBBLES",
        "SPEECH KIT",
        "FLUENCY KIT",
        "ORAL MOTOR TOOL",
        "---",
        "BOARD GAMES",
        "---",
      ],
    },
  ];
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#F1F0EE"
          d="M0,96L80,112C160,128,320,160,480,149.3C640,139,800,85,960,74.7C1120,64,1280,96,1360,112L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <div className="m-auto" style={{ background: "#F1F0EE", zIndex: 19 }}>
        <h2 className="benefits-title bg-600 text-center mb-4">
          TOP CATEGORIES
        </h2>
        <Row className="m-auto p-3" style={{ maxWidth: "1150px" }}>
          {categories.map((c) => (
            <Col key={c.title} sm="4" className="px-3 pb-3">
              <div
                className="br-3 bg-white shadow"
                style={{ overflow: "hidden" }}
              >
                <h5 className="text-center p-3 text-white bg-landingPrimary">
                  {c.title}
                </h5>
                <div className="d-flex flex-wrap p-2 py-4 my-4">
                  {c.items.map((item) =>
                    item !== "---" ? (
                      <Link to="/" style={{ textDecoration: "none" }}>
                        <div
                          style={{
                            borderRadius: "7rem",
                            backgroundColor: "gray",
                            width: "5.5rem",
                            height: "5.5rem",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: "1",
                            margin: ".5rem",
                            marginBottom: "1em",
                          }}
                        >
                          <p
                            className="text-center text-white"
                            style={{
                              fontSize: ".55rem",
                              width: "70%",
                              marginTop: "1em",
                            }}
                          >
                            {item}
                          </p>
                        </div>
                      </Link>
                    ) : (
                      <div style={{ width: "5.5rem", margin: ".5em" }}></div>
                    )
                  )}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
      <svg
        style={{ marginTop: "-1.5rem", zIndex: "-400" }}
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
  const sellimgs = [support, growth, transparent];
  return (
    <div className="container">
      <h2 className="benefits-title bg-600 text-center">SELL ON SPHECHO</h2>
      <div className="w-75 m-auto">
        <Row>
          {sellimgs.map((image, idx) => (
            <>
              <Col key={idx} sm="4">
                <div className="d-flex text-center justify-content-end align-items-center">
                  {idx === 0 ? <></> : <h1 style={{ color: "gray" }}>{"▸"}</h1>}
                  <img src={image} width="300rem" height="350rem" />
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
                <input
                  className="input px-2"
                  placeholder="Name"
                  name="pname"
                  value={pname}
                  onChange={(e) => setPname(e.target.value)}
                />
              </Col>

              <Col sm={6} className="p-3">
                <input
                  className="input"
                  placeholder="Contact"
                  name="contact"
                  type="tel"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
              </Col>
            </Row>
            <Row>
              <Col sm={6} className="p-3">
                <input
                  className="input px-2"
                  placeholder="Subject"
                  name="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </Col>
            </Row>
            <Row>
              <Col className="p-2">
                <h5 className="text-white">Your Message</h5>
                <textarea
                  className="input px-4"
                  style={{ height: "6rem" }}
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Col>
            </Row>
            <Button
              disabled={disbaled}
              className="bg-white text-black br-3"
              onClick={handleSubmit}
            >
              Submit
            </Button>
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
    <div
      className="container position-relative"
      style={{ marginTop: "6rem", marginBottom: "5rem" }}
    >
      <Row>
        <Col sm="6">
          <img
            src={cshop}
            width="650px"
            height="650px"
            style={{
              borderRadius: "40rem",
              objectFit: "cover",
              marginLeft: "-10rem",
              marginBottom: "2rem",
            }}
          />
        </Col>
        <Col
          sm="6"
          style={{ fontSize: "1.1rem" }}
          className="d-flex justify-content-center align-items-center b-500 p-2"
        >
          <div className="position-relative">
            <p>
              SPHECHO Shop is a growing platform for selling online. Be it a
              manufacturer, vendor or supplier, simply sell your products online
              on SPHECHO and become a top e-commerce player with minimum
              investment. Through a team of experts offering exclusive at{" "}
              <a className="text-danger" href="#">
                support@sphecho.com
              </a>
              , SPHECHO focuses on empowering sellers across the globe.
            </p>
            <p>
              Selling on SPHECHO is effortless. All you need is to{" "}
              <a className="text-danger" href="/login">
                register
              </a>
              , and the assigned account manager will get in touch with you.
            </p>
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

const NewLetter = () => {
  return (
    <div className="mb-5 pb-4">
      <div className="container mb-4">
        <div className="m-auto w-75">
          <h2 className=" text-center" style={{ color: "rgb(163, 160, 160)" }}>
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
            <p className="text-center" style={{ color: "rgb(163, 160, 160)" }}>
              By subscribing, you consent to us sharing updates with you.
            </p>
          </Row>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  const speechLinks = [
    {
      title: "Your Account",
    },
    {
      title: "Your Orders",
    },
    {
      title: "Shipping & Delivery",
    },
    {
      title: "Return & Refund",
    },
    {
      title: "Help",
    },
  ];

  const usefullLinks = [
    {
      title: "Providers",
      link: '',
    },
    {
      title: "Sphecho Service",
      link: 'http://sphecho-services.metahos.com',
    },
    {
      title: "Sphecho Learn",
      link: 'http://sphecholms.metahos.com',
    },
    {
      title: "Sphecho Scholar",
      link: '',
    },
  ];

  const aboutUs = [
    {
      title: "Resources",
    },
    {
      title: "Selling Guide",
    },
    {
      title: "Products In Demand",
    },
    {
      title: "Faqs",
    },
  ];

  return (
    <footer>
      <div className="">
        <Row>
          <Col sm="3" className="p-4">
            <div className="d-flex flex-column align-items-center">
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
                <Col sm="3" className="p-2">
                  <p className="b-700 mb-2 link-header">USEFUL LINKS</p>
                  {usefullLinks.map((l) => (
                    <a key={l.title} className="link b-400" href={l.link}>
                      {l.title}
                    </a>
                  ))}
                </Col>
                <Col sm="3">
                  <p className="b-700 mb-2 link-header">LET US HELP YOU</p>
                  {speechLinks.map((link) => (
                    <Link key={link.title} className="link b-400" to="/">
                      {link.title}
                    </Link>
                  ))}
                </Col>
                <Col sm="3">
                  <p className="b-700 mb-2 link-header">BECOME A SELLER</p>
                  {aboutUs.map((l) => (
                                        <a key={l.title} className="link b-400" href="https://qishcommerce.metahos.com">
                                        {l.title}
                                      </a>
                  ))}
                  <br />
                  <Link className="link b-400" to="/">
                    -SERVICES
                  </Link>
                  <Link className="link b-400" to="/">
                    ACCOUNT MANAGEMENT
                  </Link>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Shop;
