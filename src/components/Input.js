import React from "react";

const Input = props => (
  <div className="form-group">
    <input
      value={props.value}
      type={props.type}
      onKeyUp={props.onKeyUp}
      name={props.name}
      className="form-control"
      placeholder={props.placeholder}
    />
  </div>
);

export default Input;
