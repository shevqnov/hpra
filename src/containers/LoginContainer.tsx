import { MapStateToProps, MapDispatchToProps } from "react-redux";
import LoginForm, { LoginFormStateProps, LoginFormDispatchProps } from "../components/Login";
import { AppState } from "../store";
import { login, register } from "../store/user/actions";
import { connect } from 'react-redux'

const mapStateToProps: MapStateToProps<LoginFormStateProps, {}, AppState> = state => ({
  registered: state.user.registered,
  loading: state.card.loading
})

const mapDispatchToProps: MapDispatchToProps<LoginFormDispatchProps, {}> = dispatch => ({
  login: (email, password) => dispatch(login(email, password)),
  register: (email, password) => dispatch(register(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)