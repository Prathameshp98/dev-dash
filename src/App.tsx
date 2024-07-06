
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
import { Developer } from './Context/createContext/userContext';

import { 
  developerDefault,
  filterDefault 
} from './constants';

function App() {

  const[developer, setDeveloper] = useState<Developer[]>(developerDefault);
  const[filters, setFilters] = useState<Filters>(filterDefault)

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
