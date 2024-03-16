import React, { useState } from "react";
import copySvg from "../../assets/copy.svg";

interface InputCopyProps {
  title: string;
  value: string;
}

const InputCopy: React.FC<InputCopyProps> = (props) => {
  const [copySuccess, setCopySuccess] = useState<boolean>(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(props.value);
    setCopySuccess(true);

    setTimeout(() => {
      setCopySuccess(false);
    }, 2000);
  };

  return (
    <div className="relative space-y-2">
      <label className="text-sm text-dark" htmlFor="name">
        {props.title}
      </label>
      <input
        id="name"
        type="text"
        value={props.value}
        className="bg-gray-100 text-sm text-dark font-bold pl-4 w-full h-10 rounded-md outline-none"
        disabled
      />

      <img
        onClick={copyToClipboard}
        className="w-[14px] h-[14px] cursor-pointer absolute bottom-3 right-5"
        src={copySvg}
        alt="copy"
      />
      {copySuccess && (
        <div className="absolute -top-4 right-0 bg-primaryLight p-2 rounded-md text-primary">
          &#10004; Copied!
        </div>
      )}
    </div>
  );
};

export default InputCopy;
