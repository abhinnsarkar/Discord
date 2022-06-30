export const logout = () => {
  localStorage.clear();
  window.location.pathname = "/login";
};

export const deleteAccount = (req, res) => {
  
};
