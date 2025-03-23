export default function Input({
  className = "",
  type="text",
  variant = "primary",
  ...props
}) {
  const variantClasses = {
    primary:
      "w-full border-2 border-zinc-100 bg-zinc-800 text-zinc-50 outline-none px-4 py-2 text-sm rounded-lg mt-2 transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-1 focus:ring-offset-zinc-900 placeholder:text-zinc-400 hover:border-zinc-500",
    secondary: "text-zinc-90 text-base",
    danger: "text-red-600 text-base",
  };

  const variantClass = variantClasses[variant] || variantClasses.primary;

  const combinedClasses = `${variantClass} ${className}`;
  return <input {...props} className={combinedClasses} type={type} />;
}
