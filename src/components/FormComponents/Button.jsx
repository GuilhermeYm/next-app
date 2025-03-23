export default function Button({
  children,
  isLoading = false,
  disabled = false,
  className = "",
  type = "button",
  size = "md",
  variant = "primary",
  ...props
}) {
  const variantClasses = {
    primary:
      "bg-blue-600 border border-zinc-100 hover:bg-blue-700 hover:border-blue-50 text-white",
    secondary: "bg-gray-200 border border-gray-300 hover:bg-blue-500 hover:text-white text-black",
    success: "bg-green-500 border border-white hover:bg-green-600 hover:border-zinc-500 text-white",
    danger: "bg-red-500 border border-red-600 hover:bg-red-700 hover:border-zinc-400 text-white duration-500", 
    
  };

  const sizeClasses = {
    sm: "py-1 px-4 text-sm",
    md: "py-2 px-6 text-base",
    lg: "py-3 px-8 text-lg",
  };

  const disabledClasses =
    isLoading || disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer";

  return (
    <button
      className={`${variantClasses[variant]} ${sizeClasses[size]} ${className} outline-none rounded-xl text-center w-fit my-2 transition-all duration-300 ease-in-out focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-500 focus:ring-blue-600 ${disabledClasses} bg-green
      `}
      type={type}
      disabled={isLoading || disabled}
      {...props}
    >
      {children}
    </button>
  );
}
