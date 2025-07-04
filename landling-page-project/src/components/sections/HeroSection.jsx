import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import img2 from "../../assets/images/thisisengineering-BU8lpW2Bn30-unsplash.jpg";
import img3 from "../../assets/images/pexels-pixabay-257736.jpg"; 
import Button from "../ui/Button";

const heroSlides = [
  {
    heading: (
      <>
        Public tenders, contracts, <br />
        and business contacts. <br />
        All from a single source!
      </>
    ),
    description:
      "We are a consulting and training firm dedicated to helping construction pros communicate more effectively to drive sales and bridge the English-Spanish language gap.",
    quote: "Highly recommend to any construction business.",
    image: img2,
  },
  {
    heading: (
      <>
        Empower your team with <br />
        industry-leading training. <br />
        Results guaranteed!
      </>
    ),
    description:
      "Our proven programs help your staff master communication, sales, and bilingual skills tailored for the construction sector.",
    quote: "We saw a 40% sales increase after their workshops.",
    image: img3,
  },
];

const HeroSection = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            {/* Single hero slide */}
            <div className="relative max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
              {/* Text */}
              <div className="order-1 lg:order-none">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight text-center lg:text-left">
                  {slide.heading}
                </h1>
                <p className="mt-6 text-gray-600 text-base max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
                  {slide.description}
                </p>
                <p className="mt-6 text-xl text-gray-600 font-semibold text-center lg:text-left">
                  "{slide.quote}"
                </p>
              </div>

              {/* Speaker image */}
              <div className="relative flex justify-center lg:justify-end order-2 lg:order-none">
                <div className="w-72 sm:w-80 md:w-[320px] lg:w-[360px] relative h-[450px]">
                  <img
                    src={slide.image}
                    alt="Hero Slide"
                    className="w-full h-full object-cover rounded-tl-[60px] md:rounded-tl-[100px] shadow-xl"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Buttons (outside Swiper to stay fixed below slides) */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 px-6 pb-12">
        <Button to="/free-consultation" variant="secondary" size="lg">
          Free Consultation →
        </Button>
        <Button to="/jobs" variant="secondary" size="lg">
          Job Opportunities →
        </Button>
        <Button to="/partners" variant="secondary" size="lg">
          Become a Partner →
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
