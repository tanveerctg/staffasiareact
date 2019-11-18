import React, { Component } from "react";
import "./Hiring.css";
import EllipseBig from "./EllipseBig.png";
import EllipseMedium from "./EllipseMedium.png";
import EllipseSmall from "./EllipseSmall.png";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { firebase } from "../../firebase";
import Loading from "../../Component/UI/Loader";
import Snackbar from "@material-ui/core/Snackbar";
import logo from "../../images/staff-asia-logo.svg";
import { withRouter } from "react-router";

const styles = {
  formControl: {
    width: "50%",
    marginBottom: "20px",

    "& .MuiFormLabel-root": {
      fontSize: "15px"
    },
    "& .MuiInputBase-root": {
      fontSize: "15px",
      fontFamily: "Segoe UI,sans-serif"
    },
    "& .MuiInput-underline::before": {
      borderBottom: "1px solid #333333"
    },
    "& .MuiInput-underline::after": {
      borderBottom: "1px solid yellowgreen",
      color: "#333333"
    },
    "& .MuiFormLabel-root.Mui-focused": {
      color: "rgba(0, 0, 0, 0.54)"
    },
    "& .MuiInput-formControl": {
      marginTop: "18px"
    },
    "& .MuiSelect-select:focus": {
      background: "transparent"
    }
  },
  button: {
    display: "block"
  },
  input: {
    display: "none"
  },
  uploadbutton: {
    marginTop: "20px"
  }
};

class Hiring extends Component {
  constructor(props) {
    super(props);
    this.name = React.createRef();
    this.email = React.createRef();
    this.url = React.createRef();
    this.interest = React.createRef();
  }
  state = {
    name: null,
    email: null,
    interest: null,
    file: null,
    fileName: null,
    url: null,
    loading: false,
    mainLoading: false,
    err: false,
    snackOpen: false
  };
  nameHandler = e => {
    let regEx = /^[a-z\s?\-?]+$/gi;
    console.log(e.target.nextElementSibling);
    if (!!e.target.value) {
      if (regEx.test(e.target.value)) {
        e.target.nextElementSibling.classList.add("on");
        e.target.nextElementSibling.lastElementChild.classList.add("on");
        e.target.nextElementSibling.classList.remove("input_wrong");
        e.target.nextElementSibling.lastElementChild.classList.add(
          "input_wrong"
        );
        console.log("ok");
        this.setState({ name: e.target.value });
      } else {
        e.target.nextElementSibling.classList.remove("on");
        e.target.nextElementSibling.lastElementChild.classList.remove("on");
        e.target.nextElementSibling.classList.add("input_wrong");
        e.target.nextElementSibling.lastElementChild.classList.add(
          "input_wrong"
        );
        this.setState({ name: null });
      }
    } else {
      e.target.nextElementSibling.style.borderColor = "black";
      e.target.nextElementSibling.classList.remove("input_wrong");
      e.target.nextElementSibling.classList.remove("on");
      e.target.nextElementSibling.lastElementChild.classList.remove("on");
      e.target.nextElementSibling.lastElementChild.classList.remove(
        "input_wrong"
      );
      this.setState({ name: null });
      console.log("nai");
    }
  };
  handleChange = e => {
    this.setState({ interest: e.target.value });
  };
  emailChangeHandler = e => {
    let regEx = /^([\w\.?\-?]+)@([a-z]+)(\.[a-z]{2,8})(\.[a-z]{2,8})?$/gi;

    if (!!e.target.value) {
      if (regEx.test(e.target.value)) {
        e.target.nextElementSibling.classList.add("on");
        e.target.nextElementSibling.lastElementChild.classList.add("on");
        e.target.nextElementSibling.classList.remove("input_wrong");
        e.target.nextElementSibling.lastElementChild.classList.add(
          "input_wrong"
        );
        console.log("ok");
        this.setState({ email: e.target.value });
      } else {
        e.target.nextElementSibling.classList.remove("on");
        e.target.nextElementSibling.lastElementChild.classList.remove("on");
        e.target.nextElementSibling.classList.add("input_wrong");
        e.target.nextElementSibling.lastElementChild.classList.add(
          "input_wrong"
        );
        this.setState({ email: null });
      }
    } else {
      e.target.nextElementSibling.style.borderColor = "black";
      e.target.nextElementSibling.classList.remove("input_wrong");
      e.target.nextElementSibling.classList.remove("on");
      e.target.nextElementSibling.lastElementChild.classList.remove("on");
      e.target.nextElementSibling.lastElementChild.classList.remove(
        "input_wrong"
      );
      this.setState({ email: null });
      console.log("nai");
    }
  };
  cvHandler = e => {
    this.setState({ file: e.target.files[0] });
    this.setState({ fileName: e.target.files[0].name });
  };

  submitForm = () => {
    const {
      name,
      email,
      url,
      mainLoading,
      interest,
      file,
      fileName
    } = this.state;

    if (file && name && email) {
      const promise = new Promise(resolve => {
        this.setState({ mainLoading: true });

        const uploadTask = firebase
          .storage()
          .ref(`CV/${fileName}`)
          .put(file);
        uploadTask.on(
          "state_changed",
          snapshot => {},
          e => {
            console.log(e);
          },
          () => {
            firebase
              .storage()
              .ref(`CV/${fileName}`)
              .getDownloadURL()
              .then(name => {
                resolve(this.setState({ url: name }));
              });
          }
        );
      });
      promise.then(() => {
        console.log("url", this.state.url);
        const data = { name, email, interest };
        console.log("data", data);
        firebase
          .database()
          .ref("ALL_CVS")
          .push({ ...data, url: this.state.url })
          .then(res => {
            this.name.current.value = null;
            this.email.current.value = null;
            this.interest.current.value = null;
            this.url.current.value = null;
            this.setState({ mainLoading: false });
            this.setState({ snackOpen: true }, () => {
              setTimeout(() => {
                this.setState({ snackOpen: false });
              }, 3000);
            });
          });
      });
    } else {
      this.setState({ err: true });
      setTimeout(() => {
        this.setState({ err: false });
      }, 2000);
    }
  };
  render() {
    console.log(this.props.location.pathname == "/hiring" ? true : false);
    const { classes } = this.props;
    const { mainLoading, err } = this.state;
    const { pathname } = this.props.location;
    return (
      <React.Fragment>
        <nav className="nav">
          <div className="nav__1134">
            <div
              className="logoContainer"
              style={{
                position: pathname && "absolute",
                left: pathname && "50%",
                transform: pathname && "translateX(-50%)",
                padding: pathname && "10px 0"
              }}
            >
              <img src={logo} className="logo" />
            </div>
            <div className="navItemsContainer">
              {!this.props.location.pathname == "/hiring" && (
                <div
                  className="navItem"
                  ref={this.myRef}
                  onClick={this.clickHandler}
                >
                  Home
                </div>
              )}
              {!this.props.location.pathname == "/hiring" && (
                <div className="navItem">About us</div>
              )}
              {!this.props.location.pathname == "/hiring" && (
                <div className="navItem">What we do</div>
              )}
              {!this.props.location.pathname == "/hiring" && (
                <div className="navItem">Job posts</div>
              )}
              {!this.props.location.pathname == "/hiring" && (
                <div className="navItem">Contact</div>
              )}
            </div>
          </div>
        </nav>
        <div className="row__1100">
          <div className="firstSec">
            <h1 className="title">Open Positions</h1>
            <div className="allPositions">
              <button className="positionName">WP Developer</button>
              <button className="positionName">Front-end Developer</button>
              <button className="positionName">Course Design</button>
              <button className="positionName">WP Developer</button>
              <button className="positionName">WP Developer</button>
              <button className="positionName">WP Developer</button>
              <button className="positionName">WP Developer</button>
            </div>
          </div>
          <div className="secondSec">
            <h1 className="title apply_job">Apply For This Job</h1>
            <form className="form">
              <div className="inputField">
                <input
                  type="text"
                  onChange={this.nameHandler}
                  ref={this.name}
                />
                <label>
                  <span>Name</span>
                </label>
              </div>
              <div className="inputField" onChange={this.emailChangeHandler}>
                <input type="text" ref={this.email} />
                <label>
                  <span>Email</span>
                </label>
              </div>
              <FormControl
                className={this.props.classes.formControl}
                ref={this.interest}
              >
                <InputLabel id="demo-simple-select-label">
                  Select Interested Fields
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  onChange={this.handleChange}
                >
                  <MenuItem value={"Front-end"} style={{ fontSize: "15px" }}>
                    Front-End
                  </MenuItem>
                  <MenuItem value={"Back-end"}>Back-End</MenuItem>
                  <MenuItem value={"Designer"}>Designer</MenuItem>
                </Select>
              </FormControl>
              <div className={classes.uploadbutton}>
                <input
                  className={classes.input}
                  id="outlined-button-file"
                  multiple
                  type="file"
                  onChange={this.cvHandler}
                  ref={this.url}
                />
                <label htmlFor="outlined-button-file">
                  {this.state.loading ? (
                    <Loading />
                  ) : (
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={<CloudUploadIcon />}
                      component="span"
                      size="small"
                    >
                      Upload CV
                    </Button>
                  )}
                </label>
                <span style={{ marginLeft: "10px" }}>
                  {this.state.fileName &&
                    !this.state.loading &&
                    this.state.fileName.slice(0, 15).concat("...")}
                </span>
              </div>
              {mainLoading ? (
                <Loading />
              ) : (
                <a class="btn btn-3" onClick={this.submitForm}>
                  Submit
                </a>
              )}
              {
                <div
                  className="error_msg"
                  style={{
                    color: "#D8000C",
                    opacity: err ? 1 : 0,
                    pointerEvents: "none",
                    fontFamily: "Segoe UI",
                    marginTop: "20px",
                    fontWeight: "600"
                  }}
                >
                  Please Fill in All Fields
                </div>
              }
            </form>
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
            message={<span id="message-id">CV Sent</span>}
          />
          <div className="eclipseBig">
            <img src={EllipseBig} style={{ height: "100%" }} />
          </div>
          <div className="eclipseMedium">
            <img src={EllipseMedium} style={{ height: "100%" }} />
          </div>
          <div className="eclipseSmall">
            <img src={EllipseSmall} style={{ height: "100%" }} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default withRouter(withStyles(styles)(Hiring));
