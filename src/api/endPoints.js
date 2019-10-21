import to from 'await-to-js';
import { config } from '../config/config';
import { http } from '../http';


const searchUser = async user => await to(
    http.get(`search/users?q=${user}&access_token=${config.appToken}`)
  );

const getUser = async userName =>
  await to(
    http.get(
      `/users/${userName}`
    )
  );

const getUserRepos = async userName =>
  await to(
    http.get(
      `https://api.github.com/users/${userName}/repos?per_page=10&sort=created:asc`
    )
  );

export { searchUser, getUser, getUserRepos };
