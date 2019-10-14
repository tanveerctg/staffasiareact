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

import "./LandingPage.css";
import { Spring, config } from "react-spring/renderprops";
import { Link } from "react-router-dom";
import ContactUs from '../../Component/ContactUs/ContactUs';

export default class LandingPage extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="header">
          <div className="row__1134">
            <nav className="nav">
              <div className="logoContainer">
                <img src={logo} className="logo" />
              </div>
              <div className="navItemsContainer">
                <div className="navItem">Home</div>
                <div className="navItem">About us</div>
                <div className="navItem">What we do</div>
                <div className="navItem">Job posts</div>
                <div className="navItem">Contact</div>
              </div>
            </nav>

            <div className="headerMainPart">
              <div className="headerTextContainer">
                <Spring
                  from={{ opacity: 0, transform: "translateX(-25px)" }}
                  to={{ opacity: 1, transform: "translateX(0px)" }}
                  config={config.molasses}
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
                    <div style={props}>
                      <p className="headerTextContainer__para b">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Esse asperiores tempore harum totam ut voluptas
                        rerum temporibus cupiditate magni exercitationem!
                      </p>
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

            <div className="space200"></div>

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

            <div className="space200"></div>
            
            <section className="sloganContainer">
              <h1 className="sloganContainer__name">Join The Staff Asia</h1>
              <p className="sloganContainer__slogan">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                explicabo, facilis pariatur quisquam inventore nostrum minus?
                Autem quaerat doloribus nulla.
              </p>
              < Link to="/hiring">
                <button className="headerTextContainer__button joinus__button">
                  View Open Positions
                </button>
              </Link>
            </section>
          </div>
        </section>
        <div className="height__200"></div>
        <div className="space75"></div>

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
