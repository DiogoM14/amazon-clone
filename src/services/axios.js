import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "https://us-central1-clone-b076e.cloudfunctions.net/api",
});
export default instance;
