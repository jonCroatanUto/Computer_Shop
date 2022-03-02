import React from "react";
import "./inputTextStyles.css";

function InputText({ type, id, label, value, placeholder, handleChange }) {
  return (
    <>
      <div className="field">
        <input
          className="input-field"
          type={type}
          name={id}
          id={id}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
        />
        <label className="input-label" htmlFor={id}>
          {label}
        </label>
      </div>
    </>
  );
}
export default InputText;
