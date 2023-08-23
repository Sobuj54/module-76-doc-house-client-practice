import { createContext } from "react";

export const AuthContext = createContext();

const ContextAPI = ({ children }) => {
  const userInfo = {};

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default ContextAPI;
