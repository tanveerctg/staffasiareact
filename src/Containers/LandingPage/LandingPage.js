import React, { Component } from "react";
import logo from "../../images/staff-asia-logo.svg";
import illustration from "../../images/illustration.png";
import who_we_are from "../../images/ho-we-ar.png";
import e_learning from "../../images/e-larning.png";
import vision from "../../images/our-vision.png";
import people from "../../images/peple-com.png";
import onlineCourse from "../../images/course-provid.png";
import outSourcing from "../../images/outsourcing.png";
import research from "../../images/research.png";
import ScrollOut from "scroll-out";
import "./LandingPage.css";
import { Spring, config } from "react-spring/renderprops";
import { Link } from "react-router-dom";
import ContactUs from "../../Component/ContactUs/ContactUs";
import Typed from "react-typed";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  componentDidMount() {
    function debounce(func, wait, immediate) {
      var timeout;
      return function() {
        var context = this,
          args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }

    function scrollListener(e) {
      if (window.scrollY > 100) {
        myFunction();
      } else {
        console.log("false");
        nav.style.background = "transparent";
        nav.style.top = "5px";
        nav.style.padding = "0px";
        header.style.marginTop = "52px";
        nav.style.position = "inherit";
      }
    }
    ScrollOut({ once: true });
    window.addEventListener("scroll", debounce(scrollListener, 20));
    const header = document.querySelector(".header");
    const nav = document.querySelector(".nav");
    let nav1134 = document.querySelector(".nav__1134");
    const logo = document.querySelector(".logo");

    function myFunction() {
      header.style.marginTop = "0";
      nav.style.position = "sticky";
      nav.style.top = "0";
      nav.style.left = "0";
      nav.style.padding = "5px";
      nav.style.zIndex = "200";
      nav.style.justifyContent = "spaceEvenly";
      nav.style.background = "rgba(254, 254, 254, .8)";
    }
  }
  render() {
    return (
      <React.Fragment>
        <nav className="nav">
          <div className="nav__1134">
            <div className="logoContainer">
              <img src={logo} className="logo" />
            </div>
            <div className="navItemsContainer">
              <div
                className="navItem"
                ref={this.myRef}
                onClick={this.clickHandler}
              >
                <a
                  href="#home"
                  style={{ textDecoration: "none", color: "#000000" }}
                >
                  Home
                </a>
              </div>
              <div className="navItem">
                <a
                  href="#about"
                  style={{ textDecoration: "none", color: "#000000" }}
                >
                  About us
                </a>
              </div>
              <div className="navItem">What we do</div>
              <div className="navItem">
                <a
                  href="#jobPost"
                  style={{ textDecoration: "none", color: "#000000" }}
                >
                  Job posts
                </a>
              </div>
              <div className="navItem">
                {" "}
                <a
                  href="#contact"
                  style={{ textDecoration: "none", color: "#000000" }}
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>

        <header className="header" id="home">
          <div className="row__1134">
            <div className="headerMainPart">
              <div className="headerTextContainer">
                <Spring
                  from={{ opacity: 0, transform: "translateX(-10px)" }}
                  to={{ opacity: 1, transform: "translateX(0px)" }}
                  config={config.wobbly}
                >
                  {props => (
                    <div style={props}>
                      <h1 className="headerTextContainer__mainText a">
                        One Of the leading digital service provider
                      </h1>
                    </div>
                  )}
                </Spring>
                <Spring
                  from={{ opacity: 0, transform: "translateX(25px)" }}
                  to={{ opacity: 1, transform: "translatex(0px)" }}
                  config={config.wobbly}
                >
                  {props => (
                    <div style={props} className="headerTextContainer__para b">
                      <Typed
                        strings={[
                          "We working with top largest online education portal in UK ",
                          "One Of the leading digital service provider"
                        ]}
                        typeSpeed={100}
                        backSpeed={100}
                        loop
                      />
                    </div>
                  )}
                </Spring>
                <Spring
                  from={{ opacity: 0 }}
                  to={{ opacity: 1 }}
                  config={{ delay: 200, tension: 210 }}
                >
                  {props => (
                    <div style={props}>
                      <button className="headerTextContainer__button c">
                        Learn More
                      </button>
                    </div>
                  )}
                </Spring>
              </div>
              <div className="imgContainer">
                <img src={illustration} className="img" />
              </div>
            </div>
          </div>
        </header>
        <div className="space200"></div>
        <section className="sloganContainer">
          <h1 className="sloganContainer__name">Staff Asia</h1>
          <p className="sloganContainer__slogan">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            explicabo, facilis pariatur quisquam inventore nostrum minus? Autem
            quaerat doloribus nulla.
          </p>
        </section>

        <div className="space200"></div>

        <section className="thirdSectionContainer">
          <div className="row__1134">
            <div className="cardWrapper">
              <div className="card whoWeAre card1">
                <div className="card__imgContainer">
                  <img src={who_we_are} />
                </div>
                <div className="card__title">
                  <h2>Who We Are</h2>
                </div>
                <div className="card__para">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam, eum!
                  </p>
                </div>
              </div>
              <div className="card ourMission card2">
                <div className="card__imgContainer">
                  <img src={e_learning} />
                </div>
                <div className="card__title">
                  <h2>Our Mission</h2>
                </div>
                <div className="card__para">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam, eum!
                  </p>
                </div>
              </div>
              <div className="card ourVision card3">
                <div className="card__imgContainer">
                  <img src={vision} />
                </div>
                <div className="card__title">
                  <h2>Our Vision</h2>
                </div>
                <div className="card__para">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam, eum!
                  </p>
                </div>
              </div>
            </div>
            <div className="space150"></div>
            <div className="headerMainPart">
              <div className="headerTextContainer">
                <h1
                  className="headerTextContainer__mainText morethanone"
                  data-splitting
                  data-scroll
                >
                  More Than 1M+ People Are Happy With Us
                </h1>
                <p className="headerTextContainer__para">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
                  asperiores tempore harum totam ut voluptas rerum temporibus
                  cupiditate magni exercitationem!
                </p>
                <div className="founderContainer">
                  <img src={people} className="founderPic" />
                  <div className="founderDes">
                    <h3>Wajih</h3>
                    <p>Founder</p>
                  </div>
                </div>
              </div>
              <div className="imgContainer">
                <img src={illustration} className="img" />
              </div>
            </div>

            <div className="space200" id="about"></div>

            <section className="sloganContainer slogan__third">
              <h1 className="sloganContainer__name">What We Do</h1>
              <p className="sloganContainer__slogan">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                illum mollitia harum incidunt ullam hic?
              </p>
            </section>

            <div className="space75"></div>

            <section className="whatWeDoWrapper">
              <div className="whatWeDo__innerDiv onlineCourse" data-scroll>
                <div className="whatWeDoImg">
                  <img src={onlineCourse} />
                </div>
                <h3 className="ourService">Online Course Provider</h3>
                <p className="ourService__para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  porro, quod consequatur non totam doloremque.
                </p>
              </div>
              <div className="whatWeDo__innerDiv elearning" data-scroll>
                <div className="whatWeDoImg">
                  <img src={e_learning} />
                </div>
                <h3 className="ourService">E-Learning</h3>
                <p className="ourService__para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  porro, quod consequatur non totam doloremque.
                </p>
              </div>
              <div className="whatWeDo__innerDiv outSourcing" data-scroll>
                <div className="whatWeDoImg">
                  <img src={outSourcing} />
                </div>
                <h3 className="ourService">Outsourcing</h3>
                <p className="ourService__para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  porro, quod consequatur non totam doloremque.
                </p>
              </div>
              <div className="whatWeDo__innerDiv businessResearch" data-scroll>
                <div className="whatWeDoImg">
                  <img src={research} />
                </div>
                <h3 className="ourService">Business Research</h3>
                <p className="ourService__para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  porro, quod consequatur non totam doloremque.
                </p>
              </div>
            </section>

            <div className="space200" id="jobPost"></div>

            <section className="sloganContainer">
              <h1 className="sloganContainer__name">Join The Staff Asia</h1>
              <p className="sloganContainer__slogan">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                explicabo, facilis pariatur quisquam inventore nostrum minus?
                Autem quaerat doloribus nulla.
              </p>
              <Link to="/hiring">
                <button className="headerTextContainer__button joinus__button">
                  View Open Positions
                </button>
              </Link>
            </section>
          </div>
        </section>
        <div className="height__200"></div>
        <div className="space75" id="contact"></div>

        <ContactUs />

        <div className="space100"></div>
        <footer>
          <p className="footerText">
            Copyright &#x24B8; 2019.All Rights Reserved. Staff Asia
          </p>
        </footer>
      </React.Fragment>
    );
  }
}
export default LandingPage;
