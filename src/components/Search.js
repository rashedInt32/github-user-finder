import React from "react";

import Input from "./Input";

const Search = ({ inputValue, onChange, onKeyUp }) => (
  <Input
    name="user"
    type="text"
    value={inputValue}
    onChange={onChange}
    onKeyUp={onKeyUp}
    placeholder="Type user name here..."
  />
);

export default Search;
