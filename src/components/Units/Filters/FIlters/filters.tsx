
import styles from './filters.module.css';

import Dropdown from '../Dropdown/dropdown';

const Filter = () => {

    return (
        <div className={styles.filters}>
            <Dropdown />
        </div>
    )
}

export default Filter;