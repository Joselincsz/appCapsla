import React, { ReactNode } from "react";

interface ButtonProps {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  className = "",
  children,
  onClick,
}) => {
  return (
    <button
      type="button"
      className={`btn btn-sm ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
