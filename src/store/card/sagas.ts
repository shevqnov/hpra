import { put, takeLatest } from "redux-saga/effects";
import * as api from "../../api";
import { loadCards, setCardList } from "./actions";
import { CardAction } from "./types";
import { safeRequest } from "../../helpers";

export function* fetchCardListSaga(action: ReturnType<typeof loadCards>) {
  const { ok, data } = yield safeRequest(api.fetchCardList, action.payload);
  if (ok) {
    yield put(setCardList(data));
  } else {
    console.warn(data);
  }
}

export const cardSagas = [takeLatest(CardAction.LoadCards, fetchCardListSaga)];
