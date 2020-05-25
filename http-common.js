import axios from "axios";

export default axios.create({
  baseURL: process.env.baseURL,
  headers: {
    "content-type": "application/json"
  }
});
