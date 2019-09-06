import React from "react";

import { CardState, Card } from "../store/card/types";
import CardComponent from "./Card";

export interface CardListDispatchProps {
  addCard: (card: Card) => void;
  loadCards: (limit: number) => void;
}

export interface CardListStateProps extends CardState {}

export const CardList: React.FC<CardListStateProps & CardListDispatchProps> = props => {
  React.useEffect(() => {
    props.loadCards(10);
    // eslint-disable-next-line
  }, []);
  return (
    <ul>
      {props.cardList.map(card => (
        <CardComponent key={card.id} {...card} />
      ))}
    </ul>
  );
};
