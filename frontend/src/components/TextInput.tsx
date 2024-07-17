import React from 'react';

interface TextInputProps {
  text: string;
}

const TextInput: React.FC<TextInputProps> = ({ text }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={text} className="font-playfair font-bold mb-1">
        {text}
      </label>
      <input
        type="text"
        placeholder={`Enter your ${text.toLowerCase()}`}
        className="py-3 px-5 mb-2 rounded-lg font-playfair focus:outline-none focus:border-riseblue-0 focus:ring-riseblue-0 focus:ring-1"
      />
    </div>
  );
};

export default TextInput;
