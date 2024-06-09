
import styles from './SkeletonStructure.module.css';

import SkeletonShell from '../SkeletonShell/skeletonShell';

const SkeletonStructure = () => {

    return (
        <div className={styles.skeleton}>
            <div className={styles.filterSkeleton}>
                <SkeletonShell 
                    width={800}
                    height={90}
                />
                <div className={styles.metricsSkeleton}>
                    {[...Array(4)].map((_, index:number) => (
                        <SkeletonShell 
                            key={index}
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
                        height={380}
                        width={550}
                    />
                    <SkeletonShell 
                        height={380}
                        width={350}
                    />
                </div>
            </div>
        </div>
    )
}

export default SkeletonStructure;