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
      Message: "তোমরা কেউ পড়ালেখা করবা না",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="container ">
      <div className="w-[100%] flex justify-center items-center pt-[80px] sm:pt-[40px]">
        <div className="w-[60%] md:w-[70%] sm:w-[80%] bg-gray-400 p-6 sm:p-2 rounded">
          <div className="slider-container">
            <Slider {...settings}>
              {TeacherItems.map((item) => (
                <div className=" h-[400px] ">
                  <div className="flex items-center gap-4 ">
                    <div className="w-[100px] sm:w-[80px] sm:h-[80px] h-[100px] rounded-full">
                      <picture>
                        <img
                          src={RanojitSir}
                          alt={RanojitSir}
                          className="w-full h-full rounded-full border-4 border-blue-500"
                        />
                      </picture>
                    </div>
                    <div className="flex flex-col">
                      <h2 className="text-[20px] sm:text-[12px] font-medium">
                      {item.TeacherName}
                      </h2>

                      <h2 className="text-[14px] font-medium">{item.designation},</h2>

                      <h2 className="text-[14px] font-medium">
                        সরকারী হুলুলুলু কলেজ
                      </h2>
                    </div>
                  </div>

                  <div
                    className="
                  flex justify-center items-center mt-[50px]"
                  >
                    <div className="">
                      <h3>"{item.Message}"</h3>
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
