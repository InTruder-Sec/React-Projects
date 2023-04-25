import React, { createContext, useState } from "react";
import "./login.css";
import { ToastContainer, toast } from "react-toastify";
import { LoginAccount } from "../../../v1/account/account";
import "react-toastify/dist/ReactToastify.css";
import Slider from "react-slick";
import logo from "./../../../images/logo.png";
import loginImg1 from "./../../../images/loginImg1.png";
import loginImg2 from "./../../../images/loginImg2.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

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
                <h1 className="login--head">Login</h1>
                <div className="login--quote">
                  "Saving is the gap between your ego and your income"
                </div>
                <div className="login--form">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      LoginAccount(email, password).then((e) => {
                        if (e) {
                          navigate("/dashboard");
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
                    <label htmlFor="password">Password</label>
                    <br />
                    <input
                      value={password}
                      className="login--input"
                      placeholder="********"
                      type="password"
                      required
                      onChange={(e) => setpassword(e.target.value)}
                    ></input>
                    <div className="forgot--pasword">
                      <a href="/forgot-password">Forgot Password?</a>
                    </div>
                    <button type="submit" className="login--submit">
                      Login
                    </button>
                  </form>
                  <div className="other--options">
                    <hr />
                    Other signin options
                    <hr />
                  </div>
                  <div className="o-auth--google">
                    <svg
                      width="22px"
                      height="22px"
                      viewBox="-0.5 0 48 48"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000000"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <title>Google-color</title>{" "}
                        <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                        <g
                          id="Icons"
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          {" "}
                          <g
                            id="Color-"
                            transform="translate(-401.000000, -860.000000)"
                          >
                            {" "}
                            <g
                              id="Google"
                              transform="translate(401.000000, 860.000000)"
                            >
                              {" "}
                              <path
                                d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                                id="Fill-1"
                                fill="#FBBC05"
                              >
                                {" "}
                              </path>{" "}
                              <path
                                d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                                id="Fill-2"
                                fill="#EB4335"
                              >
                                {" "}
                              </path>{" "}
                              <path
                                d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                                id="Fill-3"
                                fill="#34A853"
                              >
                                {" "}
                              </path>{" "}
                              <path
                                d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                                id="Fill-4"
                                fill="#4285F4"
                              >
                                {" "}
                              </path>{" "}
                            </g>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                    <div className="oauth--text"> Signin with google</div>
                  </div>
                  <div className="other--options">
                    <hr />
                    Not registered yet?
                    <hr />
                  </div>
                  <a href="./register">
                    <div className="create--account">Create Account</div>
                  </a>
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

export default Login;
