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
    prevFileName: null,
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
    console.log("eeeee", e.target.files[0]);
    let file = e.target.files[0];
    if (!!this.state.prevFileName) {
      //first e prevfile remove korte hbe
      const promise = new Promise(resolve => {
        this.setState({ loading: true });
        console.log("remove kora lagbe");
        resolve(
          firebase
            .storage()
            .ref(`CV/${this.state.prevFileName}`)
            .delete()
            .then(() => {
              this.setState({ url: null });
            })
        );
      });
      //set file in the state
      promise
        .then(() => {
          console.log("removed");
          this.setState({
            file: file,
            prevFileName: file.name,
            fileName: file.name
          });
        })
        .then(() => {
          const uploadTask = firebase
            .storage()
            .ref(`CV/${this.state.fileName}`)
            .put(this.state.file);
          uploadTask.on(
            "state_changed",
            snapshot => {},
            e => {
              console.log(e);
            },
            () => {
              firebase
                .storage()
                .ref(`CV/${this.state.fileName}`)
                .getDownloadURL()
                .then(name => {
                  this.setState({ url: name });
                  this.setState({ loading: false });
                });
            }
          );
        });

      //file k prevfile hishebe set krte hbe
      //upload file
    } else {
      console.log("firs bar");

      const promise = new Promise(resolve => {
        this.setState({ loading: true });
        resolve(
          this.setState({
            file: e.target.files[0],
            prevFileName: e.target.files[0].name,
            fileName: e.target.files[0].name
          })
        );
      });
      promise.then(() => {
        const uploadTask = firebase
          .storage()
          .ref(`CV/${this.state.fileName}`)
          .put(this.state.file);
        uploadTask.on(
          "state_changed",
          snapshot => {
            // this.setState({ loading: true });
            // var progress =
            //   (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            // console.log(progress);
          },
          e => {
            console.log(e);
          },
          () => {
            firebase
              .storage()
              .ref(`CV/${this.state.fileName}`)
              .getDownloadURL()
              .then(name => {
                this.setState({ url: name });
                this.setState({ loading: false });
              });
          }
        );
      });
    }

    // console.log(e.target.files[0].name.slice(0, 15).concat("..."));
  };
  submitForm = () => {
    const { name, email, url, mainLoading, interest } = this.state;

    const data = { name, email, url, interest };
    if (name && email && url) {
      console.log("all ok");
      this.setState({ mainLoading: true });

      firebase
        .database()
        .ref("ALL_CVS")
        .push(data)
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

          console.log("done");
        });
    } else {
      console.log("name", this.name);
      this.setState({ err: true });
      setTimeout(() => {
        this.setState({ err: false });
      }, 2000);
      console.log("not correct");
    }
  };
  render() {
    console.log(this.state);
    const { classes } = this.props;
    const { mainLoading, err } = this.state;
    return (
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
              <input type="text" onChange={this.nameHandler} ref={this.name} />
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
          message={<span id="message-id">Message Sent</span>}
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
    );
  }
}
export default withStyles(styles)(Hiring);
