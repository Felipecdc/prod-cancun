import { ChangeEvent, RefObject } from "react";
import "./input.scss";

import { FaSearch } from "react-icons/fa";

interface InputProps {
  placeholder: string;
  type: string;
  inputRef: RefObject<HTMLInputElement>;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}

const Input = ({ placeholder, type, inputRef, onClick }: InputProps) => {
  return (
    <div className="container-input">
      <input type={type} placeholder={placeholder} ref={inputRef} />
      <button onClick={onClick}>
        <FaSearch />
      </button>
    </div>
  );
};

export default Input;
