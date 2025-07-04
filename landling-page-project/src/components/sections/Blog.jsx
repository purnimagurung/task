import blog1 from "../../assets/images/pexels-shkrabaanthony-5244002.jpg";
import blog2 from "../../assets/images/pexels-kindelmedia-9716229.jpg";
import blog3 from "../../assets/images/pexels-rquiros-2219024.jpg";
import SectionHeading from "../../components/common/SectionHeading";

const blogs = [
  {
    title: "Creating Streamlined Safeguarding Processes with OneRen",
    image: blog1,
  },
  {
    title:
      "What are your safeguarding responsibilities and how can you manage them?",
    image: blog2,
  },
  {
    title: "Revamping the Membership Model with Triathlon Australia",
    image: blog3,
  },
];

const Blog = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Our Blogs "
          title="WHat's New And What's Next"
          description="From small business owners to large construction firms, we’ve helped countless clients bridge the communication gap and expand their reach. Our data speaks for itself."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((blog, idx) => (
            <div key={idx} className="relative group cursor-pointer">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Card box */}
              <div className="absolute bottom-0 left-0 right-0 mx-4 mb-4 bg-white p-4 shadow-lg translate-y-6 group-hover:translate-y-0 transition-all duration-300">
                <h3 className="text-sm font-semibold text-gray-800 mb-2">
                  {blog.title}
                </h3>
                <div className="text-center">
                  <button className="text-primary text-sm font-semibold">
                    Readmore →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
