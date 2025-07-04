import careerImg from "../../assets/images/pexels-shvetsa-5325104.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import SectionHeading from "../common/SectionHeading";

const CareerOffers = () => {
  return (
    <section className="py-16 px-4 md:px-10 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left image */}
        <div className="w-full">
          <img
            src={careerImg}
            alt="Career Discussion"
            className="w-full h-auto rounded-tl-[40px] md:rounded-tl-[80px] shadow-lg object-cover"
          />
        </div>

        {/* Right content */}
        <div>
          <SectionHeading
            layout="block"
            label="Career Offers"
            title="Aktuelle Auftragschancen für Sie individuell aufbereitet"
            description="Donec a eros justo. Fusce egestas tristique ultrices. 
            Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu,
             at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. "
            borderColor="border-primary"
          />

          {/* Checklist */}
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <FontAwesomeIcon
                icon={faCheckSquare}
                className="text-primary mt-1 text-lg"
              />
              <span>
                Öffentliche & Private Ausschreibungen aus über 463
                Originalquellen in nur
              </span>
            </li>
            <li className="flex items-start gap-2">
              <FontAwesomeIcon
                icon={faCheckSquare}
                className="text-primary mt-1 text-lg"
              />
              <span>Zielgenau für Ihre Interessens gefiltert</span>
            </li>
            <li className="flex items-start gap-2">
              <FontAwesomeIcon
                icon={faCheckSquare}
                className="text-primary mt-1 text-lg"
              />
              <span>
                Sofort Ihre relevanten Leistungsverzeichnisse downloaden
              </span>
            </li>
            <li className="flex items-start gap-2">
              <FontAwesomeIcon
                icon={faCheckSquare}
                className="text-primary mt-1 text-lg"
              />
              <span>
                vergebene Aufträge aus allen Branchen für Sie täglich
                recherchiert
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CareerOffers;
