import React, { Component } from 'react';
import correct from "../../images/correct.png";
import wrong from "../../images/wrong.png";

export default class ContactUs extends Component {

    state={
        name:false,
        email:false,
        subject:false,
        message:false
      
    }

    nameChangeHandler=(e)=>{
        let regEx = /^[a-z\s?\-?]+$/gi;
        
        if (!!e.target.value) {
            if (regEx.test(e.target.value)) {
              let getValue = e.target.value;
              e.target.classList.remove("red");
              e.target.classList.add("green");
              e.target.classList.remove("invalid");
              e.target.classList.add("valid");
              this.setState({name:true})
            } else {
              e.target.classList.add("red");
              e.target.classList.remove("green");
              e.target.classList.add("invalid");
              e.target.classList.remove("valid");
              this.setState({name:false}) 
            }
          } else {
            e.target.classList.remove("green");
            e.target.classList.add("red");
            e.target.classList.remove("invalid");
            e.target.classList.remove("valid");
            this.setState({name:false})
        }

    }
    emailChangeHandler=(e)=>{
        let regEx = /^([\w\.?\-?]+)@([a-z]+)(\.[a-z]{2,8})(\.[a-z]{2,8})?$/gi;

        if (!!e.target.value) {
          if (regEx.test(e.target.value)) {
            let getValue = e.target.value;
            e.target.classList.remove("red");
            e.target.classList.add("green");
            e.target.classList.remove("invalid");
            e.target.classList.add("valid");
            this.setState({email:true})
          } else {
            e.target.classList.add("red");
            e.target.classList.remove("green");
            e.target.classList.add("invalid");
            e.target.classList.remove("valid");
            this.setState({email:false})
          }
        } else {
          e.target.classList.remove("green");
          e.target.classList.add("red");
          e.target.classList.remove("invalid");
          e.target.classList.remove("valid");
          this.setState({email:false})
        }
    }
    subjectChangeHandler=(e)=>{
        let regEx = /^[\w\W\_\-?]+$/gi;
        
        if (!!e.target.value) {
            if (regEx.test(e.target.value)) {
              e.target.classList.remove("red");
              e.target.classList.add("green");
              e.target.classList.remove("invalid");
              e.target.classList.add("valid");
              this.setState({subject:true})
            } else {
              e.target.classList.add("red");
              e.target.classList.remove("green");
              e.target.classList.add("invalid");
              e.target.classList.remove("valid");
              this.setState({subject:false})
            }
          } else {
            e.target.classList.remove("green");
            e.target.classList.add("red");
            e.target.classList.remove("invalid");
            e.target.classList.remove("valid");
            this.setState({subject:false})
          }
        
    }
    msgChangeHandler=(e)=>{
        let regEx = /^[\w\W\s]+$/gi;
        
        if (!!e.target.value) {
            if (regEx.test(e.target.value)) {
              e.target.classList.remove("red");
              e.target.classList.add("green");
              e.target.classList.remove("invalid");
              e.target.classList.add("valid");
              this.setState({message:true})
            } else {
              e.target.classList.add("red");
              e.target.classList.remove("green");
              e.target.classList.add("invalid");
              e.target.classList.remove("valid");
              this.setState({message:false})
            }
          } else {
            e.target.classList.remove("green");
            e.target.classList.add("red");
            e.target.classList.remove("invalid");
            e.target.classList.remove("valid");
            this.setState({message:false})
          }
    }
    render() {
        const {name,email,subject,message}=this.state;
        console.log(name,email,subject,message)

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
                  />
                  <label for="" className="label">
                    Your Name
                  </label>   
                 <img src={correct} className="right"/>
                 <img src={wrong} className="wrong"/>
                </div>
                <div>
                  <input
                    className="input input_testing email"
                    placeholder="Your Email"
                    onChange={this.emailChangeHandler}
                  />
                  <label for="" className="label">
                    Your Email
                  </label>
                  <img src={correct} className="right" />
                  <img src={wrong} className="wrong" />
                </div>
                <div>
                  <input className="input input_testing" placeholder="Subject" onChange={this.subjectChangeHandler}/>
                  <label for="" className="label">
                    Subject
                  </label>
                  <img src={correct} className="right"/>
                  <img src={wrong} className="wrong"/>
                </div>
                <div>
                  <textarea
                    className="input input_testing"
                    placeholder="Your Message"
                    row="20"
                    onChange={this.msgChangeHandler}
                  ></textarea>
                  <label for="" className="label">
                    Your Message
                  </label>
                  <img src={correct} className="right"/>
                 <img src={wrong} className="wrong"/>
                </div>
                <button className="headerTextContainer__button contact_btn">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        )
    }
}
