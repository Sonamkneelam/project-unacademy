import { createContext, useState } from "react";
export const UserContext = createContext({
  user: 0,
  handleChange: () => {},
});

export const UserProvider = ({ children }) => {
  const [user, setuser] = useState(0);
  const handleChange = (data) => {
    console.log("data:", data);
    if (data !== 0) setuser(data);
  };

  return (
    <UserContext.Provider value={{ user, handleChange }}>
      {children}
    </UserContext.Provider>
  );
};
