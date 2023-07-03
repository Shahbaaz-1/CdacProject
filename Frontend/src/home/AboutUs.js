import React from "react";


import "./AboutUs.css";
import Amith from "../images/Amith.jpg"; 
import Jaywardhan from "../images/Jaywardhan.JPG";
import Saqlain from "../images/Saqlain.jpg";
import Mrunal from"../images/Mrunal.jpg";
import Shahbaaz from "../images/Shahbaaz.jpg";

const AboutUs = () => {
  return (
    <>
      <div class="container1 aboutus">
        <div class="row">
          <div class="col-md-12">
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-ride="carousel"
            >
              <ol class="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
              </ol>

              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="single-box">
                        <div className="img-area">
                          <img src={Amith} alt="Amith" />
                        </div>
                        <div className="img-text">
                          <h2>Amith</h2>
                          <p>
                            Hi I'm Amith . I'm currently pursuing
                            Diploma in Know-It, and my role in the project
                            is backend developer.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="single-box">
                        <div className="img-area">
                         <img src={Shahbaaz} alt="Shahbaaz" /> 
                        </div>
                        <div className="img-text">
                          <h2>Shahbaaz</h2>
                          <p>
                            Hi I'm Shahbaaz Shaikh. I'm currently pursuing
                            Diploma in Know-It,Pune, and my role in the project
                            is backend developer.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="single-box">
                        <div className="img-area">
                          <img src={Jaywardhan} alt="Jaywardhan" />
                        </div>
                        <div className="img-text">
                          <h2>Jaywardhan</h2>
                          <p>
                            Hi I'm Jaywardhan . I'm currently pursuing Diploma in Know-It
                            , and my role in the project is frontend
                            developer.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="single-box">
                        <div className="img-area">
                          <img src={Mrunal} alt="Mrunal" />
                        </div>
                        <div className="img-text">
                          <h2>Mrunal</h2>
                          <p>
                            Hi I'm Mrunal Patil. I'm currently pursuing
                            Diploma in Know-it,Pune, and my role in the project
                            is frontend developer.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="single-box">
                        <div className="img-area">
                          <img src={Saqlain} alt="Saqlain" />
                        </div>
                        <div className="img-text">
                          <h2>Saqlain</h2>
                          <p>
                            Hi I'm Saqlain . I'm currently pursuing Diploma
                            in Know-it , and my role in the project is
                            frontend developer.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
