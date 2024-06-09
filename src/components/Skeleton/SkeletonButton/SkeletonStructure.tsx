
import styles from './SkeletonStructure.module.css';

import SkeletonShell from '../SkeletonShell/skeletonShell';
import Card from '../../Units/Card/card';

const SkeletonStructure = () => {

    return (
        <div className={styles.skeleton}>
            <div className={styles.filterSkeleton}>
                <SkeletonShell 
                    width={800}
                    height={70}
                />
                <div className={styles.metricsSkeleton}>
                    {[...Array(4)].map((each) => (
                        <SkeletonShell 
                            height={180}
                            width={450}
                        />
                    ))}
                </div>
                <SkeletonShell 
                    height={500}
                    width={930}
                />
            </div>
        </div>
    )
}

export default SkeletonStructure;