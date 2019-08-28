import { UserAction } from './types';
import { register, setUserInfo, login } from './actions';
import * as api from '../../api'
import { call, put, takeLatest } from 'redux-saga/effects';
import history from '../../history';

export function* registerSaga(action: ReturnType<typeof register>) {
  try {
    yield call(api.register, action.payload)
    yield put(setUserInfo({ registered: true }))
     //@TODO redirect to '/'
    history.push('/cards')
  } catch (e) {
    console.warn(e)
  }
}

export function* loginSaga(action: ReturnType<typeof login>) {
  try {
    const response = yield call(api.login, action.payload)
    yield window.localStorage.setItem('token', response.data.token)
    yield put(setUserInfo({ registered: true, email: action.payload.email, token: response.data.token, loading: false }))
    //@TODO redirect to '/'
    history.push('/cards')
  } catch (e) {
    console.warn(e)
  }
}

export function* logoutSaga() {
  yield put(setUserInfo({ registered: false, email: '', token: '' }))
  yield window.localStorage.removeItem('token')
  history.push('/login')
}

export const userSagas = [
  takeLatest(UserAction.Register, registerSaga),
  takeLatest(UserAction.Login, loginSaga),
  takeLatest(UserAction.Logout, logoutSaga)
]