import SectionHeading from "../common/SectionHeading";

const ImpactSection = () => {
  return (
    <section className="bg-primary text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Our Impact"
          title="The impact we have made in our community"
          description="From small business owners to large construction firms, we’ve helped countless clients..."
          borderColor="border-primary-dark"
          textColor="text-gray-300"
        />
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <p className="text-4xl font-bold text-secondary-dark">800+</p>
          <p className="text-sm text-gray-300 mt-1">Clients</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-secondary-dark">90%</p>
          <p className="text-sm text-gray-300 mt-1">Success Rate</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-secondary-dark">12+</p>
          <p className="text-sm text-gray-300 mt-1">Years Experience</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-secondary-dark">50+</p>
          <p className="text-sm text-gray-300 mt-1">Team Members</p>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
