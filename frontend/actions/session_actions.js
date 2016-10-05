export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SIGNUP = 'SIGNUP';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const login = (user, callback) => {
  return {
    type: LOGIN,
    user,
    callback
  };
};

export const logout = () => {
  return {
    type: LOGOUT
  };
};

export const signup = (user, callback) => {
  return {
    type: SIGNUP,
    user,
    callback
  };
};

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});
