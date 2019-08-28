import { UserState, UserActionsTypes, UserAction } from './types';
export {userSagas} from './sagas'

const initialState: UserState = {
  email: '',
  token: window.localStorage.getItem('token') || '',
  loading: false,
  registered: Boolean(window.localStorage.getItem('token'))
}

export const userReducer = (state = initialState, action: UserActionsTypes): UserState => {
  switch(action.type){
    case UserAction.Register:
    case UserAction.Login:
      return {...state, loading: true}
    case UserAction.SetUserInfo:
      return {...state, ...action.payload}
    default: return initialState
  }
}