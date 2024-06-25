import React, { createContext } from 'react';

export interface Filters {
  name: string;
  startDate: string;
  endDate: string;
}

interface FilterContextType {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export default FilterContext;
