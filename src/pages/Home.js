import React, { useState } from "react";

import { searchUser } from "../api/endPoints";

import WithLoading from '../hoc/WithLoading';
import Search from "../components/Search";
import Loader from "../components/Loader";

const Home = () => {
  const [userName, setUserName] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  let err, response;

  const onChangeInput = e => setUserName(e.target.value);

  const getUser = async () => {
    setLoading(true);
    if (userName === "") {
      setLoading(false);
      return setUsers([]);
    }

    [err, response] = await searchUser(userName);
    if (err) return err.resopnse;

    setUsers(response.data.items);
    setLoading(false);
  };

  return (
    <div className="container pt-5">
      <Search
        inputValue={userName}
        onChange={onChangeInput}
        onKeyUp={getUser}
      />

      <WithLoading loading={loading}>
        {users && users.map(user =>
          <div>{user.login}</div>
        )}
      </WithLoading>
    </div>
  );
};

export default Home;
