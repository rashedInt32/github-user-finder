import React from "react";

const Input = props => (
  <div className="form-group">
    <input
      value={props.value}
      type={props.type}
      onChange={props.onChange}
      onKeyUp={props.onKeyUp}
      name={props.name}
      className="form-control form-control-lg"
      placeholder={props.placeholder}
    />
  </div>
);

export default Input;
