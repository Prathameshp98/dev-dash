
import Card from "../../Card/card";

import styles from './dropdown.module.css';
import { useUserContext } from "../../../../Context/useContext/useUserContext";
import { useFilterContext } from "../../../../Context/useContext/useFilterContext";

const Dropdown = () => {

    const { 
        developer
    } = useUserContext();
    const {
        filters,
        setFilters
    } = useFilterContext();

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
                {developer.map((each: any, index: number) => (
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