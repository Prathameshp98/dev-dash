
import styles from './metrics.module.css';

import Card from '../Units/Card/card';

const cardData = [
    {
        heading: 'Total commits'
    },
    {
        heading: 'Avg commits per day'
    },
    {
        heading: 'Total PR comments'
    },
    {
        heading: 'Total PR reviewed'
    },
];

const Metrics = ({

}) => {

    return (
        <div className={styles.metrics}>
            <div className={styles.metricsInner}>
                {cardData.map((card, index) => (
                    <Card 
                        key={index} 
                        heading={card.heading}
                        height={200}
                        width={400}
                    >
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default Metrics;