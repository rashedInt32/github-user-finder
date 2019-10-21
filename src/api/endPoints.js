import to from 'await-to-js';
import { config } from '../config/config';
import { http } from '../http';


const searchUser = async user => {
  return await to(
    http.get(`search/users?q=${user}&access_token=${config.appToken}`)
  );
}

export { searchUser };
