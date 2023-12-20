import { createContext } from "react";

const UserContext = createContext({
  loggedInuser: "Default user",
});

export default UserContext;
