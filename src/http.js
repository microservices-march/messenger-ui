import axios from "axios";
import { initializeAxiosMockAdapter, isMockEnabled } from "./mock/mock.config";
console.log("URI BUDDAY ", `http://${process.env.REACT_APP_BACKEND_HOST}`);
let instance = axios.create({
  baseURL: `http://${process.env.REACT_APP_BACKEND_HOST}`,
  headers: {
    "Content-type": "application/json",
  },
});

if (isMockEnabled()) {
  initializeAxiosMockAdapter(instance);
}

export const http = instance;
