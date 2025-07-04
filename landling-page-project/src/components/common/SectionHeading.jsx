const SectionHeading = ({
  label,
  title,
  description,
  layout = "horizontal", // "horizontal" or "block"
  borderColor = "border-primary",
  textColor = "text-gray-600",
}) => {
  if (layout === "block") {
    return (
      <div className="mb-6">
        {label && <p className="italic text-lg text-gray-500 mb-1">{label}</p>}
        <h3 className="text-2xl md:text-3xl font-bold mb-3">{title}</h3>
        <div className={`flex items-start gap-4`}>
          <div className={`flex flex-col justify-center relative pl-6 border-l-4 ${borderColor}`}>
            <p className={`${textColor} text-base`}>{description}</p>
          </div>
        </div>
      </div>
    );
  }

  // Default: horizontal layout (like Impact/Portals)
  return (
    <div className="grid md:grid-cols-2 gap-6 items-start mb-10">
      <div>
        {label && <p className="italic text-lg text-gray-500 mb-1">{label}</p>}
        <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
      </div>
      <div className={`flex flex-col justify-center relative pl-6 border-l-4 ${borderColor}`}>
        <p className={`${textColor} text-base`}>{description}</p>
      </div>
    </div>
  );
};

export default SectionHeading;
