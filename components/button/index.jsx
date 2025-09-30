

const Button = ({ title, as = "button", className = "", children, ...props }) => {
  const Component = as;
  return (
    <Component
      className={` text-white px-4 py-2 rounded-md  transition duration-300 ease-in-out cursor-pointer ${className}`}
      {...props}
    >
      {children ?? title}
    </Component>
  );
};

export default Button;