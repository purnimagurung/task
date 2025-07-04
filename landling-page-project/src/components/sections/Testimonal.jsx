import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import userImg1 from "../../assets/images/man.jpg";

const testimonials = [
  {
    name: "Paul Tim",
    role: "British Dragon Boat Racing Association",
    text: `Maecenas dignissim justo eget nulla rutrum molestie... Morbi laoreet elit at ligula.
    Maecenas dignissim justo eget nulla rutrum molestie... Morbi laoreet elit at ligula.
    Maecenas dignissim justo eget nulla rutrum molestie... Morbi laoreet elit at ligula.
    Maecenas dignissim justo eget nulla rutrum molestie... Morbi laoreet elit at ligula.`,
    image: userImg1,
  },
  {
    name: "Sarah Lee",
    role: "Mountain Sports Federation",
    text: `Sed quis sapien at lorem gravida tincidunt. Ut sit amet magna tincidunt.`,
    image: userImg1,
  },
];

const TestimonialSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <p className="italic text-gray-500 text-lg mb-1">Testimonials</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">What Clients Are Saying</h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{
            clickable: true,
            el: ".custom-dots",
            bulletClass: "dot",
            bulletActiveClass: "dot-active",
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          spaceBetween={40}
          slidesPerView={1}
          className="pb-8"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col md:flex-row items-center gap-10">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-2/5 h-1/4 rounded-tl-[40px] md:rounded-tl-[80px] object-cover shadow-md"
                />
                <div>
                  <h4 className="text-primary text-2xl font-semibold mb-2">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500 mb-4">{testimonial.role}</p>
                  <p className="text-gray-700 text-sm mb-3">{testimonial.text}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Dot pagination below */}
        <div className="custom-dots flex justify-center gap-3 mt-6" />
      </div>

      {/* Dot styling */}
      <style>
        {`
          .dot {
            width: 40px;
            height: 4px;
            background-color: #0060A9;
            transition: background-color 0.3s;
          }

          .dot-active {
            background-color: #97BE0D;
          }
        `}
      </style>
    </section>
  );
};

export default TestimonialSection;
