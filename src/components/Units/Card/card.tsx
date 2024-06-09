
import styles from './card.module.css';

import CardProps from './card.d';

const Card = ({
    children,
    heading,
    width = 300,
    height = 300
}: CardProps) => {

    return (
        <div 
            className={styles.card}
            style={{
                width: width,
                height: height
            }}
        >
            <p className={styles.cardHeading}>{heading}</p>
            {children}
        </div>
    )
}

export default Card;