import {CardAction, Card} from "./types";

export const addCard = (card: Card) => ({
    type: CardAction.AddCard,
    payload: card
} as const)

export const loadCards = (limit: number) => ({
    type: CardAction.LoadCards,
    payload: limit
} as const)

export const setCardList = (cardList: Card[]) => ({
    type: CardAction.SetCardList,
    payload: cardList
})