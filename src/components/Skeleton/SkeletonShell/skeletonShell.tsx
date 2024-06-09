
import styles from './skeletonShell.module.css';
import SkeletonShellProps from './SkeletonShell.d';

const SkeletonShell = ({
    width = 100,
    height = 100,
}: SkeletonShellProps) => {

    return (
        <div 
            className={styles.isLoading}
            style={{
                width: width,
                height: height
            }}    
        />
    )
}

export default SkeletonShell;