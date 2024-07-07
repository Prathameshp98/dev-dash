
import Card from "../../Card/card";

import styles from './date.module.css';
import dataCompare from "../../../../utils/dataCompare";
import { useRef } from "react";
import { useFilterContext } from "../../../../Context/useContext/useFilterContext";
import { useUserContext } from "../../../../Context/useContext/useUserContext";
import { developerDefault } from "../../../../constants";

const Date = () => {

    const {
        filters,
        setFilters
    } = useFilterContext();
    const {
        setDeveloper
    } = useUserContext();
    const startDateRef = useRef<HTMLInputElement>(null);
    const endDateRef = useRef<HTMLInputElement>(null);

    return (
        <Card
            heading={'Date Range'}
            height={'fit-content'}
            width={'fit-content'}
        >
            <div className={styles.dateGroup}>
                <input 
                    type="date" 
                    value={filters.startDate}
                    onChange={(event) => {
                        if(dataCompare?.(event.target.value, filters.endDate)){
                            setFilters?.({
                                ...filters,
                                startDate: event.target.value
                            });
                        } else {
                            alert('Start date should be less than end date');
                            if(startDateRef?.current?.value)
                                startDateRef.current.value = filters.startDate;
                        }
                    }}
                    min="2024-05-06"
                    max="2024-05-19"
                    ref={startDateRef}
                />
                <input 
                    type="date" 
                    value={filters.endDate}
                    onChange={(event) => {
                        if(dataCompare?.(filters.startDate, event.target.value)){
                            setDeveloper(developerDefault);
                            setFilters?.({
                                ...filters,
                                endDate: event.target.value
                            });
                        } else {
                            alert('Start date should be less than end date');
                            if(endDateRef?.current?.value)
                                endDateRef.current.value = filters.endDate;
                        }
                    }}
                    min="2024-05-06"
                    max="2024-05-19"
                />
            </div>
        </Card>
    )
}

export default Date;