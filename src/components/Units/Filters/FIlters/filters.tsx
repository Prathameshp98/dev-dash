
import styles from './filters.module.css';
import FilterProps from './filters.d';

import Dropdown from '../Dropdown/dropdown';
import Date from '../Date/date';

const Filter = ({
    setFilters,
    filters,
    devData
}: FilterProps) => {

    return (
        <div className={styles.filters}>
            <Dropdown
                setFilters={setFilters}
                filters={filters}
                devData={devData}
            />
            <Date 
                setFilters={setFilters}
                filters={filters}
            />
        </div>
    )
}

export default Filter;