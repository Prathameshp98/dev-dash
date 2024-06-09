
import Card from "../../Card/card";

import styles from './dropdown.module.css';
import DropdownProps from './dropdown.d';

const Dropdown = ({ 
    setFilters,
    filters,
    devData
}: DropdownProps) => {

    return (
        <Card
            heading={'Developer Name'}
            height={'fit-content'}
            width={250}
        >
            <select 
                className={styles.dropdown}
                onChange={(event) => {
                    setFilters?.({
                        ...filters,
                        name: event.target.value
                    })
                }}
            >
                {devData.map((each: any, index: number) => (
                    <option 
                        value={each.name}
                        key={index}
                    >
                        {each.name}
                    </option>
                ))}
            </select>
        </Card>
    )
}

export default Dropdown;