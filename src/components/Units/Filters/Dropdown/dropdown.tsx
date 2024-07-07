
import Card from "../../Card/card";

import styles from './dropdown.module.css';
import { useFilterContext } from "../../../../Context/useContext/useFilterContext";
import getNames from "../../../../api/getNames";
import { useEffect, useState } from "react";
import Loader from "../../../Loader/loader";
import { useUserContext } from "../../../../Context/useContext/useUserContext";
import { developerDefault } from "../../../../constants";

const Dropdown = () => {

    const[names, setNames] = useState<string[]>([]);
    const {
        developer,
        setDeveloper
    } = useUserContext();
    const {
        filters,
        setFilters
    } = useFilterContext();

    useEffect(() => {
        (async() => {
            const response = await getNames();
            setNames(response);
        })();
    }, []);

    return (
        <Card
            heading={'Developer Name'}
            height={'fit-content'}
            width={250}
        >
                {names.length ? 
                    <>
                        <select 
                            className={styles.dropdown}
                            onChange={(event) => {
                                setDeveloper(developerDefault);
                                setFilters?.({
                                    ...filters,
                                    name: event.target.value
                                });
                            }}
                        >
                            <option value={'all'}>All</option>
                            {names.map((each: any, index: number) => (
                                <option 
                                    value={each}
                                    key={index}
                                    selected={each === developer[0].name ? true : false}
                                >
                                    {each}
                                </option>
                            ))} 
                        </select>
                    </>
                : 
                    <Loader />
                }
        </Card>
    )
}

export default Dropdown;