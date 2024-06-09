
import styles from './card.module.css';

import CardProps from './card.d';

const Card = ({
    children,
    heading,
    width = 300,
    height = 300,
    hasDropdown = false,
    dropdownOptions,
    setSelected
}: CardProps) => {

    return (
        <div 
            className={styles.card}
            style={{
                width: width,
                height: height
            }}
        >
            <div className={styles.cardHeader}>
                <p className={styles.cardHeading}>{heading}</p>
                {hasDropdown &&
                    <select 
                        className={styles.dropdown}
                        onChange={(event) => {
                            setSelected?.(event.target.value);
                        }}
                    >
                        {dropdownOptions?.map((each:string, index: number) => (
                            <option 
                                key={index}
                                value={each}
                            >
                                {each}
                            </option>
                        ))}
                    </select>
                }
            </div>
            {children}
        </div>
    )
}

export default Card;