import * as actions from "./actions";
import { InferValueTypes } from "../types";

export interface Card {
  id: number;
  word: string;
  meaning: string;
  image: string;
}

export interface CardState {
  cardList: Card[];
  loading: boolean;
  errors: string[];
}

export enum CardAction {
  AddCard = "ADD_CARD",
  LoadCards = "LOAD_CARDS",
  SetCardList = "SET_CARD_LIST"
}

export type CardActionsTypes = ReturnType<InferValueTypes<typeof actions>>;
