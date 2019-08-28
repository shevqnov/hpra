import {CardState, CardActionsTypes, CardAction} from "./types";
export {cardSagas} from './sagas'

const initialState: CardState = {
    cardList: [],
    loading: false,
    errors: []
}


export const cardReducer = (state = initialState, action: CardActionsTypes): CardState => {
    switch (action.type) {
        // case CardAction.AddCard:
        //     return {...state, cardList: [...state.cardList, action.payload]}
        case CardAction.LoadCards:
          return {...state, loading: true}
        case CardAction.SetCardList:
            return {...state, cardList: action.payload, loading: false}
        default:
            return state
    }
}

