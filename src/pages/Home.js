import React, { useState, useContext } from "react";

import { searchUser, getUser, getUserRepos } from "../api/endPoints";

import { ModalContext } from "../context/ModalContext";

import WithLoading from "../hoc/WithLoading";
import Search from "../components/Search";
import UserCard from "../components/UserCard";
import Modal from "../components/Modal";
import UserDetails from "../components/UserDetails";

const Home = () => {
  const [text, setText] = useState("");
  const [state, setState] = useState({
    loading: false,
    userLoading: false,
    users: [],
    user: {},
    repos: []
  });

  const { show, openModal, closeModal } = useContext(ModalContext);

  let err, response;

  const onChangeInput = e => setText(e.target.value);

  const searchUsers = async () => {
    setState({ ...state, loading: true });
    if (state.text === "") {
      return setState({ ...state, users: [], loading: false });
    }

    [err, response] = await searchUser(text);
    if (err) return err.resopnse;

    setState({ ...state, users: response.data.items, loading: false });
  };

  const singleUser = async user => {
    openModal();
    setState({ ...state, userLoading: true });

    const [errorUser, responseUser] = await getUser(user.login);

    const [errorRepos, responseRepos] = await getUserRepos(user.login);

    if (errorUser || errorRepos) return;
    setState({
      ...state,
      user: responseUser.data,
      repos: responseRepos.data,
      userLoading: false
    });
  };

  const { loading, userLoading, users, user, repos } = state;

  return (
    <div className="container pt-5 pb-5">
      <Search
        inputValue={text}
        onChange={onChangeInput}
        onKeyUp={searchUsers}
      />

      <WithLoading loading={loading}>
        <div className="card-holder row pt-5">
          {users &&
            users.map(user => (
              <UserCard
                key={user.id}
                name={user.login}
                avatar={user.avatar_url}
                publicUrl={user.html_url}
                onClickUser={() => singleUser(user)}
              />
            ))}
        </div>
      </WithLoading>

      <Modal show={show} close={closeModal} loading={userLoading}>
        <UserDetails
          name={user.name}
          login={user.login}
          avatar={user.avatar_url}
          bio={user.bio}
          blog={user.blog}
          followers={user.followers}
          following={user.following}
          public_repos={user.public_repos}
          repos={repos}
        />
      </Modal>
    </div>
  );
};

export default Home;
