import userMock from "../mocks/user.mock";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

export function receiveLogin(user) {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
}

function loginError(payload) {
  return {
    type: LOGIN_FAILURE,
    payload,
  };
}

function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
  };
}

export function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS,
  };
}

// Logs the user out
export function logoutUser() {
  return (dispatch) => {
    dispatch(requestLogout());
    localStorage.removeItem("authenticated");
    localStorage.removeItem("useId");
    dispatch(receiveLogout());
  };
}

export function loginUser({ email: loginEmail }) {
  return (dispatch) => {
    if (!loginEmail) {
      dispatch(loginError("Something was wrong. Try again"));
    }

    const user = userMock.find(({ email }) => email === loginEmail);

    if (user) {
      dispatch(receiveLogin(user));
      localStorage.setItem("authenticated", true);
      localStorage.setItem("useId", user.id);
    } else {
      dispatch(loginError("User or password invalid."));
    }
  };
}

export function checkSession() {
  return (dispatch) => {
    const userIdSession = localStorage.getItem("useId");
    const user = userMock.find(({ id }) => id === userIdSession);

    dispatch(receiveLogin(user));
  };
}
