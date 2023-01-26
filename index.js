import axios from "axios";

const API = axios.create({ baseURL: "http://192.168.0.142:8080" });
// const API = axios.create({ baseURL: "http://192.168.0.109:8080" });
// const API = axios.create({ baseURL: "http://10.113.60.134:8080" });
// const API = axios.create({baseURL: 'http://192.168.43.189:8080'});

export const withdrawRequests = () => API.get("/withdraw/withdrawRequests");
export const claimedUsers = () => API.get("/withdraw/claimedStatus");
export const claimedMoney = (form) => API.post("/withdraw/claimedMoney", form);
