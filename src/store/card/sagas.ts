import {call, put, takeLatest} from 'redux-saga/effects'
import {fetchCardList} from "../../api";
import { loadCards, setCardList} from "./actions";
import {CardAction} from "./types";

export function* fetchCardListSaga(action: ReturnType<typeof loadCards>) {
    try {
        const response = yield call(fetchCardList, action.payload)
        yield put(setCardList(response.data))
    } catch (e) {
        console.warn(e)
    }
}

export const cardSagas = [
    takeLatest(CardAction.LoadCards, fetchCardListSaga)
]