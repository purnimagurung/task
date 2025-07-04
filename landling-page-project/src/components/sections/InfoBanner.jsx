import partnerBg from "../../assets/images/pexels-tima-miroshnichenko-6615234.jpg";

const InfoBanner = () => {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover h-[250px] md:h-[350px] flex items-center justify-center"
      style={{ backgroundImage: `url(${partnerBg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-0" />

      {/* Content with background color */}
      <div className="relative z-10 p-6 rounded text-center shadow-lg max-w-xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Inlocon – the strong partner for your success
        </h2>
        <button className="bg-secondary hover:bg-secondary-dark text-white font-semibold px-8 py-5 text-sm uppercase shadow-md w-full md:w-auto transition text-center">
           Free Consultation →
        </button>
      </div>
    </section>
  );
};

export default InfoBanner;
