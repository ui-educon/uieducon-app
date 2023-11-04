import { handlePost } from "../Axios"

export const makeNewUserInDb = async () => {
  const res = await handlePost('/user/create-user', {}, {}, true);
  return res.data;
}