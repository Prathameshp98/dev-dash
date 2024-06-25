
import { 
  useEffect, 
  useState, 
} from 'react';
import './base_styles.css';
import getDeveloperStats from './api/getDeveloperStats';

import { Main } from './components';
import UserContext from './Context/createContext/userContext';
import FilterContext from './Context/createContext/filterContext';

import { Filters } from './Context/createContext/filterContext';

function App() {

  const[devData, setDevData] = useState([]);
  const[filters, setFilters] = useState<Filters>({
    name: 'all',
    startDate: '2024-05-06',
    endDate: '2024-05-19'
  })

  useEffect(() => {
    (async() => {
      const res = await getDeveloperStats();
      setDevData(res.AuthorWorklog.rows);
    })();
  });

  return (
    <UserContext.Provider value={devData}>
      <FilterContext.Provider value={{filters, setFilters}}>
        <Main />
      </FilterContext.Provider>
    </UserContext.Provider>
  )
}

export default App
