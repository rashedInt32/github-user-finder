import React from "react";

import Input from "./Input";

const Search = ({ inputValue, onKeyUp }) => (
  <Input name="user" type="text" value={inputValue} onKeyUp={onKeyUp} />
);

export default Search;
