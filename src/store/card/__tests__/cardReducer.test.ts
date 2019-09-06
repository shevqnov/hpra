import { cardReducer, initialState } from "..";
import * as actions from "../actions";

describe("card reducer test", () => {
  it("action 'LoadCards' should set loading status to 'true'", () => {
    expect(cardReducer(initialState, actions.loadCards(10)).loading).toBeTruthy();
  });

  it("action 'SetCardList' should set cardList and loading status to false", () => {
    const cardList = [{ id: 1, word: "test", meaning: "тест", image: "test" }];
    expect(cardReducer({ ...initialState, loading: true }, actions.setCardList(cardList)).cardList).toBe(cardList);
  });
});
