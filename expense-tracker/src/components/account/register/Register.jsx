import React, { useState } from "react";
import Slider from "react-slick";
import "react-toastify/dist/ReactToastify.css";
import logo from "./../../../images/logo.png";
import loginImg1 from "./../../../images/loginImg1.png";
import loginImg2 from "./../../../images/loginImg2.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createAcc } from "../../../v1/account/account";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [username, setusername] = useState("");
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
                  <img className="login--logo--img" alt="logo" src={logo}></img>
                </div>
                <h1 className="login--head">Sign Up</h1>
                <div className="login--quote">
                  "We are glad to have you onboard"
                </div>
                <div className="login--form">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      createAcc(email, username, password).then((e) => {
                        if (e) {
                          navigate("/");
                          setpassword("");
                          setemail("");
                          setusername("");
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
                      required
                      onChange={(e) => setemail(e.target.value)}
                    ></input>
                    <br />
                    <label htmlFor="username">Username</label>
                    <br />
                    <input
                      className="login--input"
                      value={username}
                      placeholder="Superstar"
                      type="name"
                      required
                      onChange={(e) => setusername(e.target.value)}
                    ></input>
                    <label htmlFor="password">Password</label>
                    <br />
                    <input
                      className="login--input"
                      placeholder="********"
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setpassword(e.target.value)}
                    ></input>

                    <button type="submit" className="login--submit">
                      Create Account
                    </button>
                  </form>
                  <div className="other--options">
                    <hr />
                    Already Have an account?
                    <hr />
                  </div>
                  <a href="/">
                    <div className="create--account">Login</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="login--swiper">
            <Slider {...settings}>
              <div className="login--image1">
                <img className="loginImg1" alt="slider" src={loginImg1}></img>
              </div>
              <div className="login--image2">
                <img className="loginImg1" alt="slider" src={loginImg2}></img>
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

export default Register;
