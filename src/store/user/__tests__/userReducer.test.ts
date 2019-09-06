import { userReducer, initialState } from "..";
import * as actions from "../actions";

describe("userReducer test", () => {
  it("Register and Login actions should set loading status to 'true'", () => {
    expect(userReducer(initialState, actions.login("test@email.test", "password")).loading).toBeTruthy();
    expect(userReducer(initialState, actions.register("test@email.test", "password")).loading).toBeTruthy();
  });

  it("SetUserInfo action should set loading status to 'false' and userInfo", () => {
    const userInfo = { token: "token", email: "test@email.test" };
    expect(userReducer({ ...initialState, loading: true }, actions.setUserInfo(userInfo))).toStrictEqual({
      ...userInfo,
      loading: false,
      registered: false
    });
  });
});
