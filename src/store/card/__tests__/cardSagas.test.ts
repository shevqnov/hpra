import { setCardList } from "./../actions";
import { fetchCardListSaga } from "../sagas";
import { loadCards } from "../actions";
import { put } from "redux-saga/effects";
import * as api from "../../../api";
import { safeRequest } from "../../../helpers";

jest.mock("../../../helpers", () => ({
  safeRequest: jest.fn()
}));

describe("fetch card list saga test", () => {
  it("should call fetch card list api and set cart list to store", () => {
    const iterator = fetchCardListSaga(loadCards(10));
    const cardList = [{ id: 1, word: "test", meaning: "тест", image: "test" }];
    iterator.next()
    expect(safeRequest).toBeCalledWith(api.fetchCardList, 10)
    expect(iterator.next({ data: cardList, ok: true }).value).toEqual(put(setCardList(cardList)));
    expect(iterator.next().done).toBeTruthy();
  });
});
