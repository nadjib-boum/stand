import { LoadingIcon } from "../icons";
import { style } from "@/utils/style";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "danger";
  size?: "sm" | "md" | "lg";
  full?: boolean;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  full = false,
  className,
  loading = false,
  ...rest
}) => {
  return (
    <button
      type="button"
      className={style(
        "py-2.5 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 tracking-wide cursor-pointer",
        { "w-full": full },
        {
          "bg-blue-500 text-white hover:bg-blue-600  focus:ring-blue-500 ":
            variant === "primary",
        },
        {
          "bg-white text-gray-700 shadow-sm hover:bg-gray-50  focus:ring-offset-white focus:ring-gray-400":
            variant === "outline",
        },
        className
      )}
      {...rest}
    >
      {loading ? <LoadingIcon /> : children}
    </button>
  );
};

export default Button;
