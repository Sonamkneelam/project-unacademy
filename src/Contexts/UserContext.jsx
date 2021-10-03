import { createContext, useState } from "react";
export const UserContext = createContext({
  user: 0,
  handleChange: () => {},
  setModalData: () => {},
  dModel: undefined
});

export const UserProvider = ({ children }) => {
  const [user, setuser] = useState(0);
  const [dModel, setDModel] = useState(false);
  const handleChange = (data) => {
    console.log("data:", data);
    if (data !== 0) setuser(data);
  };

  const setModalData = () => {
    setDModel(!dModel)
    // console.log("hello")
  }

  return (
    <UserContext.Provider value={{ user, handleChange, dModel, setModalData }}>
      {children}
    </UserContext.Provider>
  );
};
