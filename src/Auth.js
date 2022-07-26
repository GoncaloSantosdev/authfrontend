const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT;

export const registerUser = async (username, password) => {
  const response = await fetch(`${urlEndpoint}/auth/register-user`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ username: username, password: password }),
  });
  const responseJSON = await response.json();
  return responseJSON.success;
};

export const loginUser = async (username, password) => {
  const response = await fetch(`${urlEndpoint}/auth/login-user`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ username: username, password: password }),
  });
  const responseJSON = await response.json();
  if (responseJSON.success) {
    localStorage.setItem(
      process.env.REACT_APP_TOKEN_HEADER_KEY,
      JSON.stringify(responseJSON.token)
    );
  }
  return responseJSON.success;
};

export const logoutUser = () => {
  localStorage.removeItem(process.env.REACT_APP_TOKEN_HEADER_KEY);
  return;
};

export const getUserToken = () => {
  return JSON.parse(
    localStorage.getItem(process.env.REACT_APP_TOKEN_HEADER_KEY)
  );
};