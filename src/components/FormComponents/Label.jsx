export default function Label({
  children,
  htmlFor,
  variant = "primary",
  className = "",
  ...props
}) {
  const variantClasses = {
    primary: "text-zinc-100 text-lg font-medium",
    secondary: "text-zinc-90 text-base",
    danger: "text-red-600 text-base",
  };

  const variantClass = variantClasses[variant] || variantClasses.primary;

  const combinedClasses = `${variantClass} ${className}`;
  return (
    <label htmlFor={htmlFor} className={combinedClasses} {...props}>
      {children}
    </label>
  );
}
