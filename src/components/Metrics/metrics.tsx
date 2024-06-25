
import styles from './metrics.module.css';

import Card from '../Units/Card/card';
import { useEffect, useState } from 'react';
import formatDate from '../../utils/formatDate';
import { useUserContext } from '../../Context/useContext/useUserContext';
import { useFilterContext } from '../../Context/useContext/useFilterContext';

const Metrics = () => {

    const devData = useUserContext();
    const { filters } = useFilterContext();
    const[cardData, setCardData] = useState<{
        heading: string;
        count: number | string;
    }[]>([]);
    const[formattedDate, setFormattedDate] = useState<{
        start: string;
        end: string;
    }>({
        start: '',
        end: ''
    });

    useEffect(() => {
        if(devData.length){
            const filteredDevData = devData.filter((data: any) => data.name == filters?.name);
            setCardData([
                { heading: 'Total commits', count: filteredDevData[0].totalActivity[2].value },
                { heading: 'Avg commits per day', count: Math.round(filteredDevData[0].totalActivity[2].value/14) },
                { heading: 'Total PR reviewed', count: filteredDevData[0].totalActivity[3].value },
                { heading: 'Total PR comments', count: filteredDevData[0].totalActivity[4].value },
            ]);
    
            setFormattedDate({
                start: formatDate(filters?.startDate),
                end: formatDate(filters?.endDate)
            })
        }
  
    }, [filters, devData]);

    return (
        <div className={styles.metrics}>
            <div className={styles.metricsInner}>
                {cardData.map((card, index) => (
                    <Card 
                        key={index} 
                        heading={card.heading}
                        height={180}
                        width={450}
                    >
                        <h2>{card.count}</h2>
                        {formattedDate.start && 
                            <p className={styles.range}>between <span>{formattedDate.start}</span> and <span>{formattedDate.end}</span></p>
                        }
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default Metrics;