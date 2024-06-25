
import { useContext } from "react";
import UserContext from "../createContext/userContext";

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) {
      throw new Error('useFilterContext must be used within a UserProvider');
    }
    return context;
};