import React from "react";
import "./LandingPage.css";
import letsplay from "../images/logo.png";

const LandingPage = () => {
  return (
    <>
      <section class="home-banner">
        <div class="banner-bg">
          <video
            playsinline="playsinline"
            autoplay="autoplay"
            muted="muted"
            loop="loop"
          >
            <source
                src="https://joy.videvo.net/videvo_files/video/free/2012-10/large_watermarked/hd0146-H264%2075_preview.mp4"
              type="video/mp4"
            ></source>
          </video>
          <div class="container-fluid h-100">
            <div class="row h-100 d-flex align-items-center">
              <div class="col-md-6 d-md-none">
                {/* <div class="banner-img-wrap">
                  <img
                    src="https://www.playspots.in/wp-content/themes/playspots/assets/images/phone2.png"
                    class="img-fluid left-img"
                    alt=""
                  />
                  <img
                    src="https://www.playspots.in/wp-content/themes/playspots/assets/images/phone1.png"
                    class="img-fluid right-img"
                    alt=""
                  />
                </div> */}
              </div>
              <div class="col-md-12">
                <div class="banner-caption-wrap">
                  <h1 class="tlt">
                    <br />
                    <br />
                  </h1>
                  {/* <img class="logo" src={letsplay}></img> */}

                  <h1 class="tlt">
                    Hurry
                    <br />
                    Up!!
                    <br />
                    Lets Play Guyzzz
                  </h1>
                  <h2>IS JUST A TAP AWAY</h2>
                  <div class="banner-btns">
                    {/* <a href="/home" class="btn green-btn">
                      To Book Venue
                    </a> */}

                    {/* <a href="/#" class="btn trans-btn">
                      To Get Listed
                    </a> */}
                  </div>
                </div>
              </div>

              {/* <div class="col-md-6 d-none d-md-block">
                <div class="banner-img-wrap">
                  <img
                    src="https://pngimg.com/uploads/cricket/cricket_PNG126.png"
                    // src="https://www.playspots.in/wp-content/themes/playspots/assets/images/phone2.png"
                    class="img-fluid left-img"
                    alt=""
                  />
                  <img
                    src="http://pngimg.com/uploads/football_player/small/football_player_PNG4.png"
                    //  src="http://pngimg.com/uploads/cricket/cricket_PNG105.png"

                    // src="https://www.playspots.in/wp-content/themes/playspots/assets/images/phone1.png"
                    class="img-fluid right-img"
                    alt=""
                  />
                </div> 
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* ***************** */}

      <section class="app-features-section">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-4">
              <div class="feature-wrap wow animated fadeIn slow">
                <img
                  src="https://www.playspots.in/wp-content/uploads/2020/02/search.png"
                  class="img-fluid wow animated bounceIn slower"
                  alt="Playspots"
                />
                <h4 class="wow animated fadeInUp slow">Search</h4>
                <div class="content">
                  <p>
                    Are you looking to play after work, organize your Sunday
                    Five's football match? Explore the largest network of sports
                    facilities whole over the India
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="feature-wrap wow animated fadeIn slow">
                <img
                  src="https://www.playspots.in/wp-content/uploads/2020/02/book.png"
                  class="img-fluid wow animated bounceIn slower"
                  alt="Playspots"
                />
                <h4 class="wow animated fadeInUp slow">Book</h4>
                <div class="content">
                  <p>
                    Once you’ve found the perfect ground, court or gym, Connect
                    with the venue through the Book Now Button to make online
                    booking & secure easier payment
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="feature-wrap wow animated fadeIn slow">
                <img
                  src="https://www.playspots.in/wp-content/uploads/2020/02/play.png"
                  class="img-fluid wow animated bounceIn slower"
                  alt="Playspots"
                />
                <h4 class="wow animated fadeInUp slow">Play</h4>
                <div class="content">
                  <p>
                    You’re the hero, you’ve found a stunning turf or court,
                    booked with ease and now its time to play. The scene is set
                    for your epic match.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
