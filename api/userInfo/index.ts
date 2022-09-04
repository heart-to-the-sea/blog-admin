import http from "~~/utils/http";
import { GET_USER_INFO } from "~/utils/url";
export const getUserInfoAll = () => {
  return http.get(GET_USER_INFO);
};
