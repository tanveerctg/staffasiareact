import React, { Component } from "react";
import correct from "../../images/correct.png";
import wrong from "../../images/wrong.png";
import Loading from "../UI/Loader";
import { firebase, database } from "../../firebase";
import Snackbar from "@material-ui/core/Snackbar";

export default class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.textarea = React.createRef();
    this.name = React.createRef();
    this.email = React.createRef();
    this.subject = React.createRef();
  }
  state = {
    name: false,
    email: false,
    subject: false,
    message: false,
    loading: false,
    err: false,
    snackOpen: false
  };

  nameChangeHandler = e => {
    let regEx = /^[a-z\s?\-?]+$/gi;

    if (!!e.target.value) {
      if (regEx.test(e.target.value)) {
        let getValue = e.target.value;
        e.target.classList.remove("red");
        e.target.classList.add("green");
        e.target.classList.remove("invalid");
        e.target.classList.add("valid");
        this.setState({ name: e.target.value });
      } else {
        e.target.classList.add("red");
        e.target.classList.remove("green");
        e.target.classList.add("invalid");
        e.target.classList.remove("valid");
        this.setState({ name: false });
      }
    } else {
      e.target.classList.remove("green");
      e.target.classList.add("red");
      e.target.classList.remove("invalid");
      e.target.classList.remove("valid");
      this.setState({ name: false });
    }
  };
  emailChangeHandler = e => {
    let regEx = /^([\w\.?\-?]+)@([a-z]+)(\.[a-z]{2,8})(\.[a-z]{2,8})?$/gi;

    if (!!e.target.value) {
      if (regEx.test(e.target.value)) {
        let getValue = e.target.value;
        e.target.classList.remove("red");
        e.target.classList.add("green");
        e.target.classList.remove("invalid");
        e.target.classList.add("valid");
        this.setState({ email: e.target.value });
      } else {
        e.target.classList.add("red");
        e.target.classList.remove("green");
        e.target.classList.add("invalid");
        e.target.classList.remove("valid");
        this.setState({ email: false });
      }
    } else {
      e.target.classList.remove("green");
      e.target.classList.add("red");
      e.target.classList.remove("invalid");
      e.target.classList.remove("valid");
      this.setState({ email: false });
    }
  };
  subjectChangeHandler = e => {
    let regEx = /^[\w\W\_\-?]+$/gi;

    if (!!e.target.value) {
      if (regEx.test(e.target.value)) {
        e.target.classList.remove("red");
        e.target.classList.add("green");
        e.target.classList.remove("invalid");
        e.target.classList.add("valid");
        this.setState({ subject: e.target.value });
      } else {
        e.target.classList.add("red");
        e.target.classList.remove("green");
        e.target.classList.add("invalid");
        e.target.classList.remove("valid");
        this.setState({ subject: false });
      }
    } else {
      e.target.classList.remove("green");
      e.target.classList.add("red");
      e.target.classList.remove("invalid");
      e.target.classList.remove("valid");
      this.setState({ subject: false });
    }
  };
  msgChangeHandler = e => {
    let regEx = /^[\w\W\s]+$/gi;

    if (!!e.target.value) {
      if (regEx.test(e.target.value)) {
        e.target.classList.remove("red");
        e.target.classList.add("green");
        e.target.classList.remove("invalid");
        e.target.classList.add("valid");
        this.setState({ message: e.target.value });
      } else {
        e.target.classList.add("red");
        e.target.classList.remove("green");
        e.target.classList.add("invalid");
        e.target.classList.remove("valid");
        this.setState({ message: false });
      }
    } else {
      e.target.classList.remove("green");
      e.target.classList.add("red");
      e.target.classList.remove("invalid");
      e.target.classList.remove("valid");
      this.setState({ message: false });
    }
  };
  submitHandler = () => {
    const { name, email, subject, message, loading } = this.state;

    const data = { name, email, subject, message };
    if (name && email && subject && message) {
      console.log("all ok");
      this.setState({ loading: true });

      database
        .ref("messages")
        .push(data)
        .then(res => {
          this.textarea.current.value = null;
          this.name.current.value = null;
          this.email.current.value = null;
          this.subject.current.value = null;

          this.textarea.current.classList.remove("valid");
          this.name.current.classList.remove("valid");
          this.email.current.classList.remove("valid");
          this.subject.current.classList.remove("valid");

          this.setState({ loading: false });
          this.setState({ snackOpen: true }, () => {
            setTimeout(() => {
              this.setState({ snackOpen: false });
            }, 3000);
          });

          console.log("done");
        });
    } else {
      this.setState({ err: true });
      setTimeout(() => {
        this.setState({ err: false });
      }, 2000);
      console.log("not correct");
    }
  };
  render() {
    const { name, email, subject, message, loading, err } = this.state;
    console.log(name, email, subject, message);
    return (
      <div className="row__1134">
        <div className="contactWrapper">
          <div className="contactUsFirstPart">
            <h1 className="contactUsFirstPart__title">
              Don't Hesitate Us To Contact Us For Any Information
            </h1>
            <p className="contactUsFirstPart__location">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              expedita dicta optio molestiae, impedit tempora?
            </p>
            <p className="contactUsFirstPart__contact">
              +8801310370313/+8801733717022
            </p>
          </div>
          <div className="contactUsForm">
            <div>
              <input
                className="input input_testing name"
                placeholder="Your Name"
                onChange={this.nameChangeHandler}
                ref={this.name}
              />
              <label for="" className="label">
                Your Name
              </label>
              <img src={correct} className="right" />
              <img src={wrong} className="wrong" />
            </div>
            <div>
              <input
                className="input input_testing email"
                placeholder="Your Email"
                onChange={this.emailChangeHandler}
                ref={this.email}
              />
              <label for="" className="label">
                Your Email
              </label>
              <img src={correct} className="right" />
              <img src={wrong} className="wrong" />
            </div>
            <div>
              <input
                className="input input_testing"
                placeholder="Subject"
                onChange={this.subjectChangeHandler}
                ref={this.subject}
              />
              <label for="" className="label">
                Subject
              </label>
              <img src={correct} className="right" />
              <img src={wrong} className="wrong" />
            </div>
            <div>
              <textarea
                className="input input_testing"
                placeholder="Your Message"
                row="20"
                onChange={this.msgChangeHandler}
                ref={this.textarea}
              ></textarea>
              <label for="" className="label">
                Your Message
              </label>
              <img src={correct} className="right" />
              <img src={wrong} className="wrong" />
            </div>
            {loading ? (
              <Loading />
            ) : (
              <button
                className="headerTextContainer__button contact_btn"
                onClick={this.submitHandler}
              >
                Send Message
              </button>
            )}
            {err ? (
              <div className="error_msg" style={{ color: "#D8000C" }}>
                Please Fill in All Fields
              </div>
            ) : null}
          </div>
          <Snackbar
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center"
            }}
            open={this.state.snackOpen}
            ContentProps={{
              "aria-describedby": "message-id"
            }}
            message={<span id="message-id">Message Sent</span>}
          />
        </div>
      </div>
    );
  }
}
