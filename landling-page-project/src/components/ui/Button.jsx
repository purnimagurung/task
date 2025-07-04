import { Link } from "react-router-dom";

const Button = ({
  children,
  to,
  className = "",
  variant = "primary", // 'primary' | 'secondary'
  size = "md",         // 'sm' | 'md' | 'lg'
  ...props
}) => {
  const baseClasses =
    "font-semibold transition shadow-md text-center inline-flex items-center justify-center";

  const variantClasses = {
    primary: "bg-primary hover:bg-primary-dark text-white",
    secondary: "bg-secondary hover:bg-secondary-dark text-white",
  };

  const sizeClasses = {
    sm: "text-sm px-3 py-2",
    md: "text-sm px-4 py-2",
    lg: "text-base px-6 py-3",
  };

  const allClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  // Render a <Link> if `to` prop is provided, otherwise render a <button>
  return to ? (
    <Link to={to} className={allClasses} {...props}>
      {children}
    </Link>
  ) : (
    <button className={allClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
