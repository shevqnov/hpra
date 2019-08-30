import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import { addCard, loadCards } from "../store/card/actions";
import { CardList, CardListDispatchProps, CardListStateProps } from "../components/CardList";
import { AppState } from "../store";
import { Card } from "../store/card/types";

const mapStateToProps: MapStateToProps<CardListStateProps, {}, AppState> = state => ({
  cardList: state.card.cardList,
  loading: state.card.loading,
  errors: state.card.errors
});

const mapDispatchToProps: MapDispatchToProps<CardListDispatchProps, {}> = dispatch => ({
  addCard: (card: Card) => dispatch(addCard(card)),
  loadCards: (limit: number) => dispatch(loadCards(limit))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardList);
