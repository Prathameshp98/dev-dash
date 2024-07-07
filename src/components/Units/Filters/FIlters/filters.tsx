
import styles from './filters.module.css';

import Dropdown from '../Dropdown/dropdown';
import Date from '../Date/date';

const Filter = () => {

    return (
        <div className={styles.filters}>
            <Dropdown />
            <Date />
        </div>
    )
}

export default Filter;