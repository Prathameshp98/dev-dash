
import styles from './filters.module.css';
import FilterProps from './filters.d';

import Dropdown from '../Dropdown/dropdown';

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
        </div>
    )
}

export default Filter;