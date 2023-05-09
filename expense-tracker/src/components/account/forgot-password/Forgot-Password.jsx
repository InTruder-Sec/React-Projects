import React from "react";
import Slider from "react-slick";
import { toast } from "react-toastify";
import logo from "./../../../images/logo.png";
import { useState } from "react";
import loginImg1 from "./../../../images/loginImg1.png";
import loginImg2 from "./../../../images/loginImg2.png";
import mail from "../../../images/mail.mp4";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ForgotPasswordSend } from "../../../v1/account/account";
import { useNavigate } from "react-router-dom";

function ForgotPass() {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="login--main">
      <center>
        <div className="login--background">
          <div className="login--content">
            <div className="login--head">
              <div className="login--content">
                <div className="login--logo">
                  <img className="login--logo--img" src={logo}></img>
                </div>
                <h1 className="login--head">Forgot Password?</h1>
                <div className="login--quote">
                  "Don't worry, We got your back..."
                </div>
                <center>
                  <div className="video">
                    <video
                      autoPlay
                      src={mail}
                      className="video--main"
                      loop
                    ></video>
                  </div>
                </center>
                <div className="login--form">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      ForgotPasswordSend(email).then((e) => {
                        if (e) {
                          toast.success("Recovery link sent");
                          navigate("/");
                        }
                      });
                    }}
                  >
                    <label htmlFor="email">Email</label>
                    <br />
                    <input
                      value={email}
                      className="login--input"
                      placeholder="example@company.com"
                      type="email"
                      onChange={(e) => {
                        setemail(e.target.value);
                      }}
                      required
                    ></input>
                    <br />

                    <button className="login--submit" type="submit">
                      Reset Password
                    </button>
                  </form>
                  <div className="other--options">
                    <hr />
                    Already Have an account?
                    <hr />
                  </div>
                  <div
                    className="create--account"
                    onClick={(e) => {
                      navigate("/");
                    }}
                  >
                    Login
                  </div>

                  <div className="other--options">
                    <hr />
                    Not registered yet?
                    <hr />
                  </div>
                  <div
                    className="create--account"
                    onClick={(e) => {
                      navigate("/register");
                    }}
                  >
                    Create Account
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="login--swiper">
            <Slider {...settings}>
              <div className="login--image1">
                <img className="loginImg1" src={loginImg1}></img>
              </div>
              <div className="login--image2">
                <img className="loginImg1" src={loginImg2}></img>
              </div>
            </Slider>
          </div>
        </div>
      </center>
    </div>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        width: "50px",
        height: "100px",
        right: "5px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        width: "50px",
        height: "100px",
        zIndex: "3",
        left: "5px",
      }}
      onClick={onClick}
    />
  );
}

export default ForgotPass;
