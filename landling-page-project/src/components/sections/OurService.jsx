import img4 from "../assets/images/thisisengineering-zl8CGxoIF_A-unsplash.jpg";
import img5 from "../assets/images/pexels-canvastudio-3277806.jpg";

const OurService = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-lg italic text-gray-500 mb-1">our Services</p>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-10">
          What do we offer you?
        </h2>

        {/*  columns:Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          <div className="flex gap-4">
            <img
              src={img4}
              alt="Worker"
              className="w-1/2 h-[500px] object-cover rounded-tl-[40px] md:rounded-tl-[80px] shadow-lg"
            />
            <img
              src={img5}
              alt="Tablet"
              className="w-1/2 h-[500px] object-cover rounded-br-[40px] md:rounded-br-[80px] shadow-lg mt-8"
            />
          </div>

          {/* Right Column: Text */}
          <div className="flex flex-col justify-start">
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              Tender research
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              A customized search profile provides you with tailored information
              about public and private tenders.
            </p>

            <h3 className="text-lg font-bold text-gray-800 mb-2">
              High level of detail
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              We search for you with unprecedented precision using all relevant
              keywords and CPV codes.
            </p>

            <h3 className="text-lg font-bold text-gray-800 mb-2">
              Enormous time savings
            </h3>
            <p className="text-gray-600 text-sm mb-6">
              You save valuable working time and leave the time-intensive filter
              and keyword input to us.
            </p>

            <button className="w-max bg-secondary text-white px-6 py-4 text-sm uppercase font-semibold hover:bg-secondary-dark transition">
              View All Services →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurService;
