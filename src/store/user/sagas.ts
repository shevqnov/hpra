import { UserAction } from "./types";
import { register, setUserInfo, login } from "./actions";
import * as api from "../../api";
import { put, takeLatest } from "redux-saga/effects";
import history from "../../history";
import { safeRequest } from "../../helpers";

export function* registerSaga(action: ReturnType<typeof register>) {
  const { ok, data } = yield safeRequest(api.register, action.payload);
  if (ok) {
    yield put(setUserInfo({ registered: true }));
    history.push("/cards");
  } else {
    console.warn(data);
  }
}

export function* loginSaga(action: ReturnType<typeof login>) {
  const { ok, data } = yield safeRequest(api.login, action.payload);
  if (ok) {
    yield window.localStorage.setItem("token", data.token);
    yield put(setUserInfo({ registered: true, email: action.payload.email, token: data.token, loading: false }));
    history.push("/cards");
  } else {
    console.warn(data);
  }
}

export function* logoutSaga() {
  yield put(setUserInfo({ registered: false, email: "", token: "" }));
  yield window.localStorage.removeItem("token");
  history.push("/login");
}

export const userSagas = [
  takeLatest(UserAction.Register, registerSaga),
  takeLatest(UserAction.Login, loginSaga),
  takeLatest(UserAction.Logout, logoutSaga)
];
