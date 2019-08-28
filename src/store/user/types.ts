import { InferValueTypes } from "../types";
import * as actions from './actions'

export interface User {
  email: string;
  token: string;
  loading: boolean;
  registered: boolean
}

export interface UserInfo{
  email: string;
  password: string
}

export interface UserState extends User {}

export enum UserAction {
  Register = 'REGISTER',
  Login = "LOGIN",
  Logout = "LOGOUT",
  SetUserInfo = 'SET_USER_INFO'
}

export type UserActionsTypes = ReturnType<InferValueTypes<typeof actions>>