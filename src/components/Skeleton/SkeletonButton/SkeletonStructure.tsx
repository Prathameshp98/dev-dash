
import styles from './SkeletonStructure.module.css';

import SkeletonShell from '../SkeletonShell/skeletonShell';

const SkeletonStructure = () => {

    return (
        <div className={styles.skeleton}>
            <div className={styles.filterSkeleton}>
                <SkeletonShell 
                    width={800}
                    height={70}
                />
                <div className={styles.metricsSkeleton}>
                    {[...Array(4)].map(() => (
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
                <div className={styles.chartSkeleton}>
                    <SkeletonShell 
                        height={400}
                        width={550}
                    />
                    <SkeletonShell 
                        height={400}
                        width={350}
                    />
                </div>
            </div>
        </div>
    )
}

export default SkeletonStructure;