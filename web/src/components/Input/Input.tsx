import React from "react";

interface Props {
  type: "text" | "number";
  name: string;
  label: string;
  value: string | number;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  onBlur(e: React.FocusEvent<HTMLInputElement>): void;
  errMsg: string;
}

function Input(props: Props) {
  return (
    <div className="input-container">
      <label htmlFor={props.name}>{props.label}</label>
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        placeholder={props.label}
        onBlur={props.onBlur}
        onChange={props.onChange}
      />
      <span className="err-msg">{props.errMsg}</span>
    </div>
  );
}

Input.defaultProps = {
  type: "text",
  errMsg: ""
};

export default Input;