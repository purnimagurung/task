import SectionHeading from "../common/SectionHeading";
import img1 from "../../assets/images/evgeniy-surzhan-lVWozBOVY2M-unsplash.jpg";
import img2 from "../../assets/images/fas-khan-WJyuzi6EUTs-unsplash.jpg";
import img3 from "../../assets/images/hoang-kim-hung-LQEHpcS8oJI-unsplash.jpg";
import img4 from "../../assets/images/sidney-pearce-WRgKwttuP7A-unsplash.jpg";
import img5 from "../../assets/images/pexels-ivan-drazic-20457695-30005142.jpg";
import img6 from "../../assets/images/maria-lupan-XeRqsvi9qBc-unsplash.jpg";
import img7 from "../../assets/images/pexels-rquiros-2219024.jpg";
import img8 from "../../assets/images/pexels-divinetechygirl-1181715.jpg";
import img9 from "../../assets/images/thisisengineering-zl8CGxoIF_A-unsplash.jpg";
import img10 from "../../assets/images/pexels-tima-miroshnichenko-6474202.jpg";

const portals = [
  { title: "Bauportal", image: img1 },
  { title: "Manufacturers", image: img2 },
  { title: "Fahrzeuge", image: img3 },
  { title: "Manufacturers & Retailers", image: img4 },
  { title: "Strassenbau", image: img5 },
  { title: "Bauportal", image: img6 },
  { title: "Retailers", image: img7 },
  { title: "Manufacturers & Retailers", image: img8 },
  { title: "Manufacturers & Retailers", image: img9 },
  { title: "Strassenbau", image: img10 },
];

const PortalsSection = () => {
  return (
    <section className="py-16 px-4 md:px-10 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Our Portals"
          title="24 Years of Specialized Solutions"
          description="From small business owners to large construction firms, we’ve helped countless clients bridge the communication gap and expand their reach. Our data speaks for itself."
        />

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-8">
          {portals.map((portal, index) => (
            <a
              key={index}
              href={portal.link || "#"}
              className="group relative w-full h-44 md:h-60 overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                loading="lazy"
                src={portal.image}
                alt={portal.title}
                className="object-cover w-full h-full transform group-hover:scale-110 transition duration-300 ease-in-out"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <span className="text-white text-base font-semibold text-center px-2">
                  {portal.title}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortalsSection;
