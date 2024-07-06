
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
import { DeveloperContextType, Developer } from './Context/createContext/userContext';

function App() {

  const[developer, setDeveloper] = useState<Developer[]>([
      {
          name: '',
          totalActivity: [],
          dayWiseActivity: [],
          activeDays: ''
      }
  ]);
  const[filters, setFilters] = useState<Filters>({
    name: 'all',
    startDate: '2024-05-06',
    endDate: '2024-05-19'
  })

  useEffect(() => {
    (async() => {
      const res = await getDeveloperStats(filters.name);
      setDeveloper(res.AuthorWorklog.rows);
    })();
  }, [filters]);

  return (
    <UserContext.Provider value={{developer, setDeveloper}}>
      <FilterContext.Provider value={{filters, setFilters}}>
        <Main />
      </FilterContext.Provider>
    </UserContext.Provider>
  )
}

export default App
