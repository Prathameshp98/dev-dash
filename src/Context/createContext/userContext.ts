
import { createContext } from "react";

export interface Developer {
    name: string;
    totalActivity: Array<any>;
    dayWiseActivity: Array<any>;
    activeDays: any;
}

const UserContext = createContext<Developer[]>([]);

export default UserContext;