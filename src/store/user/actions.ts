import { UserAction, User } from './types';

export const login = (email: string, password: string) => ({
  type: UserAction.Login,
  payload: {email, password}
} as const)

export const register = (email: string, password: string) => ({
  type: UserAction.Register,
  payload: {email, password}
} as const)

export const logout = () => ({
  type: UserAction.Logout
} as const)

export const setUserInfo = (userInfo: Partial<User>) => ({
  type : UserAction.SetUserInfo,
  payload: userInfo
} as const)