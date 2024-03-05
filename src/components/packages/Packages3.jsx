import { useState } from "react";

import { GiByzantinTemple } from "react-icons/gi";
import { MdFamilyRestroom } from "react-icons/md";
import { PiMountainsThin } from "react-icons/pi";

import pattern1 from "../../assets/images/background/pattern-1.png";
import australia from "../../assets/images/resources/destinations/australia.jpg";
import brazil from "../../assets/images/resources/destinations/brazil.jpg";
import canada from "../../assets/images/resources/destinations/canada.jpg";
import egypt from "../../assets/images/resources/destinations/egypt.jpg";
import italy from "../../assets/images/resources/destinations/italy.jpg";
import japan from "../../assets/images/resources/destinations/japan.jpg";
import maldives from "../../assets/images/resources/destinations/maldives.jpg";
import morocco from "../../assets/images/resources/destinations/morocco.jpg";
import oman from "../../assets/images/resources/destinations/oman.jpg";

import tIcon1 from "../../assets/images/icons/t-icon-1.png";
import tIcon2 from "../../assets/images/icons/t-icon-2.png";
import tIcon3 from "../../assets/images/icons/t-icon-3.png";
import tIcon9 from "../../assets/images/icons/t-icon-9.png";

import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import NextArrow from "../nextArrow/NextArrow";
import PrevArrow from "../prevArrow/PrevArrow";

const Packages3 = () => {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    autoplay: true,
    adaptiveHeight: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    pauseOnFocus: true,
    pauseOnHover: true,
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    initialSlide: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  const [packageItems, setPackageItems] = useState([
    {
      id: 1,
      banner: italy,
      icon: tIcon9,
      largeIcon: <MdFamilyRestroom />,
      name: "Italy",
      details: " Romantic Venice, The City of Canals and Love",
      duration: "5 Days 6 Nights",
      user: 2,
      review: "1260 Reviews",
      rating: "4.8",
      price: "$199",
    },
    {
      id: 2,
      banner: italy,
      icon: tIcon9,
      largeIcon: <MdFamilyRestroom />,
      name: "Italy",
      details: " Romantic Venice, The City of Canals and Love",
      duration: "5 Days 6 Nights",
      user: 2,
      review: "1260 Reviews",
      rating: "4.8",
      price: "$199",
    },
    {
      id: 3,
      banner: italy,
      icon: tIcon9,
      largeIcon: <MdFamilyRestroom />,
      name: "Italy",
      details: " Romantic Venice, The City of Canals and Love",
      duration: "5 Days 6 Nights",
      user: 2,
      review: "1260 Reviews",
      rating: "4.8",
      price: "$199",
    },
    {
      id: 4,
      banner: italy,
      icon: tIcon9,
      largeIcon: <MdFamilyRestroom />,
      name: "Italy",
      details: " Romantic Venice, The City of Canals and Love",
      duration: "5 Days 6 Nights",
      user: 2,
      review: "1260 Reviews",
      rating: "4.8",
      price: "$199",
    },
  ]);

  return (
    <>
      {/* <!--Packages Section--> */}
      <div className="packages-section">
        <div
          className="bg-layer"
          style={{ backgroundImage: `url(${pattern1})` }}
        ></div>
        <div className="auto-container">
          <div className="title-box">
            <div className="subtitle">Packages</div>
            <h2>
              <span>Tour Packages</span>
            </h2>
            <div className="tour-list-button">
              <Link to="/tourlist" className="theme-btn btn-style-one">
                <span>All Tour Packages</span>
              </Link>
            </div>
          </div>
          <div className="carousel-box">
            {/* <div className="packages-carousel"> */}
            <Slider {...settings}>
              {/* <!--Block--> */}
              {packageItems.map((packageItem) => (
                <div key={packageItem.id}>
                  <div className="package-block ">
                    <div className="inner-box">
                      <div className="image-box">
                        <div className="image">
                          <a href="#">
                            <img src={packageItem.banner} alt="Italy" />
                          </a>
                        </div>
                      </div>
                      <div className="lower-box">
                        <div className="p-icon">
                          <img src={packageItem.icon} alt="" />
                          <span className="icon ">{packageItem.largeIcon}</span>
                        </div>
                        <div className="location">{packageItem.name}</div>
                        <h5>
                          <a href="">{packageItem.details}</a>
                        </h5>
                        <div className="info clearfix">
                          <div className="duration">
                            <i className="fa-solid fa-clock"></i>{" "}
                            {packageItem.duration}
                          </div>
                          <div className="persons">
                            <i className="fa-solid fa-user"></i>{" "}
                            {packageItem.user}
                          </div>
                        </div>
                        <div className="bottom-box clearfix">
                          <div className="rating">
                            <a href="#" className="theme-btn">
                              <i className="fa-solid fa-star"></i>
                              <strong>{packageItem.rating}</strong> &ensp;
                              <span className="count">
                                {packageItem.review}
                              </span>
                            </a>
                          </div>
                          <p className="price">
                            Start from &ensp;
                            <span className="amount">{packageItem.price}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* <!-- .package-block --> */}

              {/* <!--Block--> */}
              <div className="package-block">
                <div className="inner-box">
                  <div className="image-box">
                    <div className="image">
                      <a href="#">
                        <img src={brazil} alt="Brazil" />
                      </a>
                    </div>
                  </div>
                  <div className="lower-box">
                    <div className="p-icon">
                      <img src={tIcon2} alt="" />
                      <span className="icon ">
                        <PiMountainsThin />
                      </span>
                    </div>
                    <div className="location">Brazil</div>
                    <h5>
                      <a href="#">
                        Lush Amazon Rainforest Waiting to Be Explored
                      </a>
                    </h5>
                    <div className="info clearfix">
                      <div className="duration">
                        <i className="fa-solid fa-clock"></i> 7 Days 8 Nights
                      </div>
                      <div className="persons">
                        <i className="fa-solid fa-user"></i> 6
                      </div>
                    </div>
                    <div className="bottom-box clearfix">
                      <div className="rating">
                        <a href="#" className="theme-btn">
                          <i className="fa-solid fa-star"></i>
                          <strong>4.9</strong> &ensp;
                          <span className="count">510 Reviews</span>
                        </a>
                      </div>
                      <p className="price">
                        Start from &ensp;<span className="amount">$599</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- .package-block --> */}

              {/* <!--Block--> */}
              <div className="package-block">
                <div className="inner-box">
                  <div className="image-box">
                    <div className="image">
                      <a href="#">
                        <img src={egypt} alt="Egypt" />
                      </a>
                    </div>
                  </div>
                  <div className="lower-box">
                    <div className="p-icon">
                      <img src={tIcon3} alt="" />
                      <span className="icon ">
                        <PiMountainsThin />
                      </span>
                    </div>
                    <div className="location">Egypt</div>
                    <h5>
                      <a href="#">
                        Unraveling Ancient Wonders, Exploring Egypt
                      </a>
                    </h5>
                    <div className="info clearfix">
                      <div className="duration">
                        <i className="fa-solid fa-clock"></i> 3 Days 4 Nights
                      </div>
                      <div className="persons">
                        <i className="fa-solid fa-user"></i> 8
                      </div>
                    </div>
                    <div className="bottom-box clearfix">
                      <div className="rating">
                        <a href="#" className="theme-btn">
                          <i className="fa-solid fa-star"></i>
                          <strong>4.4</strong> &ensp;
                          <span className="count">2190 Reviews</span>
                        </a>
                      </div>
                      <p className="price">
                        Start from &ensp;<span className="amount">$399</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- .package-block --> */}

              {/* <!--Block--> */}
              <div className="package-block">
                <div className="inner-box">
                  <div className="image-box">
                    <div className="image">
                      <a href="#">
                        <img src={canada} alt="Canada" />
                      </a>
                    </div>
                  </div>
                  <div className="lower-box">
                    <div className="p-icon">
                      <img src={tIcon1} alt="" />
                      <span className="icon ">
                        <PiMountainsThin />
                      </span>
                    </div>
                    <div className="location">Canada</div>
                    <h5>
                      <a href="#">
                        Adventure in the Canadian Rockies, Majesty Unleashed
                      </a>
                    </h5>
                    <div className="info clearfix">
                      <div className="duration">
                        <i className="fa-solid fa-clock"></i> 5 Days 6 Nights
                      </div>
                      <div className="persons">
                        <i className="fa-solid fa-user"></i> 12
                      </div>
                    </div>
                    <div className="bottom-box clearfix">
                      <div className="rating">
                        <a href="#" className="theme-btn">
                          <i className="fa-solid fa-star"></i>
                          <strong>4.8</strong> &ensp;
                          <span className="count">4210 Reviews</span>
                        </a>
                      </div>
                      <p className="price">
                        Start from &ensp;<span className="amount">$329</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- .package-block --> */}

              {/* <!--Block--> */}
              <div className="package-block">
                <div className="inner-box">
                  <div className="image-box">
                    <div className="image">
                      <a href="#">
                        <img src={maldives} alt="Maldives" />
                      </a>
                    </div>
                  </div>
                  <div className="lower-box">
                    <div className="p-icon">
                      <img src={tIcon2} alt="" />
                      <span className="icon flaticon-family">
                        <MdFamilyRestroom />
                      </span>
                    </div>
                    <div className="location">Maldives</div>
                    <h5>
                      <a href="#">
                        Unveiling the Serenity of Maldivian Islands
                      </a>
                    </h5>
                    <div className="info clearfix">
                      <div className="duration">
                        <i className="fa-solid fa-clock"></i> 5 Days 6 Nights
                      </div>
                      <div className="persons">
                        <i className="fa-solid fa-user"></i> 2
                      </div>
                    </div>
                    <div className="bottom-box clearfix">
                      <div className="rating">
                        <a href="#" className="theme-btn">
                          <i className="fa-solid fa-star"></i>
                          <strong>4.9</strong> &ensp;
                          <span className="count">5330 Reviews</span>
                        </a>
                      </div>
                      <p className="price">
                        Start from &ensp;<span className="amount">$699</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- .package-block --> */}

              {/* <!--Block--> */}
              <div className="package-block">
                <div className="inner-box">
                  <div className="image-box">
                    <div className="image">
                      <a href="tour-single.html">
                        <img src={morocco} alt="Morocco" />
                      </a>
                    </div>
                  </div>
                  <div className="lower-box">
                    <div className="p-icon">
                      <img src={tIcon3} alt="" />
                      <span className="icon">
                        <GiByzantinTemple />
                      </span>
                    </div>
                    <div className="location">Morocco</div>
                    <h5>
                      <a href="tour-single.html">
                        Marrakech, A Tapestry of Colors and Culture
                      </a>
                    </h5>
                    <div className="info clearfix">
                      <div className="duration">
                        <i className="fa-solid fa-clock"></i> 5 Days 6 Nights
                      </div>
                      <div className="persons">
                        <i className="fa-solid fa-user"></i> 4
                      </div>
                    </div>
                    <div className="bottom-box clearfix">
                      <div className="rating">
                        <a href="#" className="theme-btn">
                          <i className="fa-solid fa-star"></i>
                          <strong>4.7</strong> &ensp;
                          <span className="count">3610 Reviews</span>
                        </a>
                      </div>
                      <p className="price">
                        Start from &ensp;<span className="amount">$359</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- .package-block --> */}

              {/* <!--Block--> */}
              <div className="package-block">
                <div className="inner-box">
                  <div className="image-box">
                    <div className="image">
                      <a href="tour-single.html">
                        <img src={australia} alt="Australia" />
                      </a>
                    </div>
                  </div>
                  <div className="lower-box">
                    <div className="p-icon">
                      <img src={tIcon1} alt="" />
                      <span className="icon flaticon-adventure">
                        <PiMountainsThin />
                      </span>
                    </div>
                    <div className="location">Australia</div>
                    <h5>
                      <a href="tour-single.html">
                        Enchanting Great Barrier Reef, Aquatic Wonderland
                      </a>
                    </h5>
                    <div className="info clearfix">
                      <div className="duration">
                        <i className="fa-solid fa-clock"></i> 5 Days 6 Nights
                      </div>
                      <div className="persons">
                        <i className="fa-solid fa-user"></i> 12
                      </div>
                    </div>
                    <div className="bottom-box clearfix">
                      <div className="rating">
                        <a href="#" className="theme-btn">
                          <i className="fa-solid fa-star"></i>
                          <strong>4.5</strong> &ensp;
                          <span className="count">7278 Reviews</span>
                        </a>
                      </div>
                      <p className="price">
                        Start from &ensp;<span className="amount">$199</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- .package-block --> */}

              {/* <!--Block--> */}
              <div className="package-block">
                <div className="inner-box">
                  <div className="image-box">
                    <div className="image">
                      <a href="tour-single.html">
                        <img src={japan} alt="Japan" />
                      </a>
                    </div>
                  </div>
                  <div className="lower-box">
                    <div className="p-icon">
                      <img src={tIcon2} alt="" />
                      <span className="icon flaticon-chinese-temple-1">
                        <GiByzantinTemple />
                      </span>
                    </div>
                    <div className="location">Japan</div>
                    <h5>
                      <a href="tour-single.html">
                        Captivating Tokyo, Serenity and Tradition Unite
                      </a>
                    </h5>
                    <div className="info clearfix">
                      <div className="duration">
                        <i className="fa-solid fa-clock"></i> 7 Days 8 Nights
                      </div>
                      <div className="persons">
                        <i className="fa-solid fa-user"></i> 14
                      </div>
                    </div>
                    <div className="bottom-box clearfix">
                      <div className="rating">
                        <a href="#" className="theme-btn">
                          <i className="fa-solid fa-star"></i>
                          <strong>4.8</strong> &ensp;
                          <span className="count">3890 Reviews</span>
                        </a>
                      </div>
                      <p className="price">
                        Start from &ensp;<span className="amount">$799</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- .package-block --> */}

              {/* <!--Block--> */}
              <div className="package-block">
                <div className="inner-box">
                  <div className="image-box">
                    <div className="image">
                      <a href="tour-single.html">
                        <img src={oman} alt="Oman" />
                      </a>
                    </div>
                  </div>
                  <div className="lower-box">
                    <div className="p-icon">
                      <img src={tIcon3} alt="" />
                      <span className="icon flaticon-adventure">
                        <PiMountainsThin />
                      </span>
                    </div>
                    <div className="location">Oman</div>
                    <h5>
                      <a href="tour-single.html">
                        Ancient Heritage and Desert Adventures
                      </a>
                    </h5>
                    <div className="info clearfix">
                      <div className="duration">
                        <i className="fa-solid fa-clock"></i> 5 Days 6 Nights
                      </div>
                      <div className="persons">
                        <i className="fa-solid fa-user"></i> 6
                      </div>
                    </div>
                    <div className="bottom-box clearfix">
                      <div className="rating">
                        <a href="#" className="theme-btn">
                          <i className="fa-solid fa-star"></i>
                          <strong>4.8</strong> &ensp;
                          <span className="count">4189 Reviews</span>
                        </a>
                      </div>
                      <p className="price">
                        Start from &ensp;<span className="amount">$599</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- .package-block --> */}
            </Slider>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Packages3;
