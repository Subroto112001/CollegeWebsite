import React from "react";
import Slider from "react-slick";
import RanojitSir from "../assets/RanojitSir.jpg"
const HomePage = () => {



  const TeacherItems = [
    {
      id: 1,
      TeacherName: "রনজিৎ কুমার মহন্ত",
      designation: "অধ্যক্ষ",
      Message: "তোমরা কেউ পড়ালেখা করবা না",
    },
    {
      id: 2,
      TeacherName: "রনজিৎ কুমার মহন্ত",
      designation: "অধ্যক্ষ",
      Message: "তোমরা কেউ পড়ালেখা করবা না",
    },
    {
      id: 3,
      TeacherName: "রনজিৎ কুমার মহন্ত",
      designation: "অধ্যক্ষ",
      Message: "তোমরা কেউ পড়ালেখা করবা না",
    },
    {
      id: 4,
      TeacherName: "রনজিৎ কুমার মহন্ত",
      designation: "অধ্যক্ষ",
      Message: "তোমরা কেউ পড়ালেখা করবা না",
    },
    {
      id: 5,
      TeacherName: "রনজিৎ কুমার মহন্ত",
      designation: "অধ্যক্ষ",
      Message: "বিবাহই হোক তোমাদের একমাত্র উদ্দেশ্য",
    },
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
        <ul style={{ display: "flex", gap: "8px", position: "absolute", bottom: "40px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-3 h-3 rounded-full border-2 border-black bg-gray-300 slick-dot"></div>
    ),
  };
  
  return (
    <div className="container ">
      <div className="w-[100%] flex justify-center items-center pt-[40px] sm:pt-[60px]">
        <div className="w-[80%] md:w-[80%] sm:w-[70%] bg-gray-400 p-6 sm:p-2 rounded">
          <div className="slider-container">
            <Slider {...settings}>
              {TeacherItems.map((item) => (
                <div className=" h-[400px] py-5  ">
                  <div className="w-full flex flex-col justify-center items-center sm:flex-row sm:justify-start md:flex-row md:items-start   gap-4 ">
                    <div className="w-[100px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] h-[100px] rounded-full">
                      <picture>
                        <img
                          src={RanojitSir}
                          alt={RanojitSir}
                          className="w-full h-full rounded-full border-4 border-blue-500"
                        />
                      </picture>
                    </div>
                    <div className="flex flex-col justify-center items-center sm:items-start md:items-start">
                      <h2 className="text-[16px] sm:text-[18px] md:text-[18px] lg:text-[22px] font-medium">
                        {item.TeacherName}
                      </h2>

                      <h2 className="text-[14px] sm:text-[16px] font-medium">
                        {item.designation},
                      </h2>

                      <h2 className="text-[14px] sm:text-[16px] font-medium">
                        সরকারী হুলুলুলু কলেজ
                      </h2>
                    </div>
                  </div>

                  <div
                    className="
                  flex justify-center items-center mt-[50px]"
                  >
                    <div>
                      <h3>
                        <span className="font-bold text-2xl">“</span>
                        {item.Message}
                        <span className="font-bold text-2xl">”</span>
                      </h3>
                    </div>
                  </div>
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
