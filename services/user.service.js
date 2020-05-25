import axios from "axios";
import authHeader from "./auth-header";

const API_URL = process.env.baseURL;

class UserService {
  getPublicContent() {
    return axios.get(API_URL);
  }

  getAdminBoard() {
    return axios.get(API_URL + "/admin", { headers: authHeader() });
  }
  // getAdminBoard() {
  //   return axios.get(API_URL2 + "admin", { headers: authHeader() });
  // }
}

export default new UserService();
