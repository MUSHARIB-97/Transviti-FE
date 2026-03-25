import { CustomButtonProps } from "../types/dataTypes";

const baseStyles = "flex items-center justify-center gap-2 rounded-md transition-transform whitespace-nowrap";
const primaryStyles = "px-6 py-1 bg-primary font-light text-white hover:scale-105";
const outlineStyles = "border border-text-secondary hover:border-primary hover:text-primary min-h-8 px-2 text-text-secondary font-normal";

function CustomButton({ title, onClick, isOutline, rightIcon, customStyles = "" }: CustomButtonProps) {
  const buttonClass = `${baseStyles} ${isOutline ? outlineStyles : primaryStyles} ${customStyles}`;

  return (
    <button onClick={onClick} className={buttonClass}>
      {rightIcon && <img src={rightIcon} alt="" className="w-4 h-4 object-contain" />}
      {title}
    </button>
  );
}

export default CustomButton;
