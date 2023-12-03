import { handlePost } from "../Axios"

export const makeNewUserInDb = async () => {
  await handlePost('/user/create-user', {}, {}, true);
}