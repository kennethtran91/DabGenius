export const signup = (user, success, error) => {
  $.ajax({
    url: '/api/users',
    method: 'POST',
    data: {user: user},
    success,
    error
  });
};

export const login = (user, success, error) => {
  $.ajax({
    url: '/api/session',
    method: 'POST',
    data: {user: user},
    success,
    error
  });
};

export const logout = (success, error) => {
  $.ajax({
    url: '/api/session',
    method: 'DELETE',
    success,
    error
  });
};

export const requestCurrentUser = (id, success) => {
  $.ajax({
    url: `api/users/${id}`,
    method: 'GET',
    success
  });
};
