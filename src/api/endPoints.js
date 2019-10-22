import to from "await-to-js";
import { config } from "../config/config";
import { http } from "../http/http";

/**
 * searchUser function
 * @desc search user based on user name provide
 * @params {user} username value input
 * @return [error, response] return array with error and response object
 */
const searchUser = async user =>
  await to(http.get(`search/users?q=${user}&access_token=${config.appToken}`));

/**
 * getUser function
 * @desc get single user details
 * @params {userName} take userName from user
 * @return [error, response] return array with error and response object
 */
const getUser = async userName => await to(http.get(`/users/${userName}`));

/**
 * getUserRepos function
 * @desc get user repo list
 * @params {userName} take userName from user
 * @return [error, response] return array with error and response object
 */
const getUserRepos = async userName =>
  await to(
    http.get(`https://api.github.com/users/${userName}/repos?sort=created:asc`)
  );

export { searchUser, getUser, getUserRepos };
