import React, { ChangeEventHandler, FocusEventHandler } from "react";
import "./style.css";

interface Props {
  name: string;
  label: string;
  value: string | number;
  onChange: ChangeEventHandler;
  onBlur: FocusEventHandler;
  errMsg: string;
}

function Input(props: Props) {
  return (
    <div className="input-container">
      <label htmlFor={props.name}>{props.label}</label>
      <textarea
        rows={10}
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
  errMsg: ""
};

export default Input;