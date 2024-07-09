import { getColor } from "../utils";
import { ButtonProps } from "./type";


const getClassNameButton = ({
  variant,
  color,
}: {
  variant: string;
  color: string;
}) => {
  switch (variant) {
    case "Text":
      return `bg-transparent text-${color}-600 hover:bg-${color}-300`;
    case "Outlined":
      return `bg-transparent text-${color}-600 hover:bg-${color}-300 boder boder-solid boder-${color}-600`;
    default:
      return `bg-${color}-600 text-transparent text-white hover:bg-${color}-300`;
  }
};

function Button({
  variant,
  color,
  size,
  label,
  className,
  onClick,
  disabled,
  icon,
  subIcon,
  block,
}: ButtonProps) {
  const variantClassName = getClassNameButton({ variant, color: getColor(color) });
  const classNameDefault = "rounded-sm";

  return (
    <>
      <button
        className={[variantClassName, classNameDefault, className].join(" ")}
        onClick={onClick}
        disabled={disabled}
      >
        {label}
      </button>
    </>
  );
}

export default Button;
