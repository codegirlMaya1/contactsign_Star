import React from "react";

interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  placeholder,
}) => {
  return (
    <>
      <div className="input-group">
        <label className="input-label">{label}</label>
        <div className="input-wrapper">
          <input
            type={type}
            placeholder={placeholder}
            className="input-field"
          />
        </div>
      </div>
      <style jsx>{`
        .input-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .input-label {
          font-family: "Lato", sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
          color: #000;
        }
        .input-wrapper {
          display: flex;
          align-items: center;
          padding: 15px 16px;
          border: 1px solid #d8dadc;
          border-radius: 10px;
          background-color: #fff;
        }
        .input-field {
          width: 100%;
          border: none;
          outline: none;
          font-family: "Inter", sans-serif;
          font-size: 16px;
          line-height: 26px;
          color: rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </>
  );
};

export default InputField;
