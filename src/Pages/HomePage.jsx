import React from "react";
import Slider from "react-slick";
import RanojitSir from "../assets/RanojitSir.jpg"
import Sarc1 from "../assets/Sarc.jpg"
import Sarc2 from "../assets/Sarc2.jpg"
import Sarc3 from "../assets/Sarc3.jpg"
import Sarc4 from "../assets/Sarc4.jpg";
const HomePage = () => {



  const TeacherItems = [
    {
      id: 1,
      photos: Sarc1,
    },
    {
      id: 2,
      photos: Sarc2,
    },
    {
      id: 3,
      photos: Sarc3,
    },
    {
      id: 4,
      photos: Sarc4,
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots) => (
      <div
        style={{ display: "flex", justifyContent: "center",  position : "relative"}}
      >
        <ul style={{ display: "flex", gap: "8px", position: "absolute", bottom: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-3 h-3 rounded-full border-2 border-black bg-gray-300 slick-dot"></div>
    ),
  };
  
  return (
    <div className="container ">
      <div className=" flex justify-center items-center pt-[40px] sm:pt-[60px]">
        <div className="w-[90%] md:w-[80%] sm:w-[70%]  rounded">
          <div className="slider-container">
            <Slider {...settings}>
              {TeacherItems.map((item) => (
                <div key={item.id} className="flex justify-center items-center">
                  <picture className="flex justify-center">
                    <img
                      src={item.photos}
                      alt={item.photos}
                      className="mx-auto max-w-full h-auto"
                    />
                  </picture>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
