import funkwerk from "../../assets/images/Funkwerk.png";
import siemens from "../../assets/images/Siemens.png";
import zeppelin from "../../assets/images/zeppelin.png";
import enbw from "../../assets/images/EnBW.png";
import Knauf from "../../assets/images/Knauf_Gips_logo.png";
import DB from "../../assets/images/Deutsche_Bahn_Logo.png";
import reif from "../../assets/images/reif_marke.jpg";
import sersa from "../../assets/images/logo-sersa.png";

const partners = [
  { name: "Siemens", logo: siemens },
  { name: "Funkwerk", logo: funkwerk },
  { name: "zeppelin", logo: zeppelin },
  { name: "EnBW", logo: enbw },
  { name: "Knauf", logo: Knauf },
  { name: "DB", logo: DB },
  { name: "reif", logo: reif },
  { name: "sersa", logo: sersa },
   { name: "Siemens", logo: siemens },
  { name: "Funkwerk", logo: funkwerk },
    { name: "Siemens", logo: siemens },
  { name: "Funkwerk", logo: funkwerk },
  { name: "zeppelin", logo: zeppelin },
  { name: "EnBW", logo: enbw },
  { name: "Knauf", logo: Knauf },
  { name: "DB", logo: DB },
  { name: "reif", logo: reif },
  { name: "sersa", logo: sersa },
   { name: "Siemens", logo: siemens },
  { name: "Funkwerk", logo: funkwerk },
];

const OurPartner = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-lg italic text-gray-500 mb-1">our Partner</p>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-10">
          Brands we work with
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div key={index} className="transition duration-300 grayscale hover:grayscale-0">
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPartner;
