import { ChangeEvent, KeyboardEvent, RefObject } from "react";
import "./input.scss";

import { FaSearch, FaUnlock } from "react-icons/fa";

interface InputProps {
  placeholder: string;
  type: string;
  inputRef: RefObject<HTMLInputElement>;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
  icon: string;
}

const Input = ({ placeholder, type, inputRef, onClick, icon }: InputProps) => {
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onClick();
    }
  };

  let iconComponent;
  switch (icon) {
    case "search":
      iconComponent = <FaSearch />;
      break;
    case "send":
      iconComponent = <FaUnlock />;
      break;
  }

  return (
    <div className="container-input">
      <input
        type={type}
        placeholder={placeholder}
        ref={inputRef}
        onKeyDown={handleKeyDown}
      />
      <button onClick={onClick}>{iconComponent}</button>
    </div>
  );
};

export default Input;
