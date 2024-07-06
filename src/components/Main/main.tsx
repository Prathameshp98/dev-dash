
import { 
    Layout,
    Metrics,
    LineChart,
    Table,
    PieChart,
    SkeletonStructure,
    Filter 
} from "..";
import styles from '../../App.module.css';
import { useUserContext } from "../../Context/useContext/useUserContext";

const Main = () => {

    const { 
        developer
    } = useUserContext();

    return (
        <Layout>
            {developer[0].name ?
                <div className={styles.app}>
                    <div className={styles.filter}>
                        <Filter />
                    </div>
                <Metrics />
                <LineChart />
                <div className={styles.graphGroup}>
                    <Table />
                    <PieChart />
                </div>
                </div>
            : <SkeletonStructure />}
        </Layout>
    )
}

export default Main;