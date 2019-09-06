import { UserInfo } from "./store/user/types";
import { Card } from "./store/card/types";
import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

// export const fetchTodoById = (id: number) => api.get(`/todos/${id}`)
export const createCard = (card: Card) => api.post("/card", card);
export const fetchCardList = (limit: number) => api.get(`/card?limit=${limit}`);
export const register = (userInfo: UserInfo) => api.post("/register", userInfo);
export const login = (userInfo: UserInfo) => api.post("/login", userInfo);
