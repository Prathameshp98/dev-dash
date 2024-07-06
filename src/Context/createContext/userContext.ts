
import { createContext } from "react";

export interface Developer {
    name: string;
    totalActivity: Array<any>;
    dayWiseActivity: Array<any>;
    activeDays: any;
}

export interface DeveloperContextType {
    developer: Developer[];
    setDeveloper: React.Dispatch<React.SetStateAction<Developer[]>>; 
}

const UserContext = createContext<DeveloperContextType | undefined>(undefined);

export default UserContext;