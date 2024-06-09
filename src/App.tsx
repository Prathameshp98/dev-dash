
import { useEffect, useState } from 'react';
import './base_styles.css';
import styles from './App.module.css';

import getDeveloperStats from './api/getDeveloperStats';

import Layout from './components/Layout/Layout';
import Metrics from './components/Metrics/metrics';
import Filter from './components/Units/Filters/FIlters/filters';
import LineChart from './components/Graph/LineChart/lineChart';
import SkeletonStructure from './components/Skeleton/SkeletonStructure/SkeletonStructure';
import PieChart from './components/Graph/PieChart/pieChart';
import Table from './components/Table/table';

function App() {

  const[devData, setDevData] = useState(null);
  const[filters, setFilters] = useState<{
    name: string;
    startDate: string;
    endDate: string;
  }>({
    name: 'all',
    startDate: '2024-05-06',
    endDate: '2024-05-19'
  })

  useEffect(() => {
    (async() => {
      const res = await getDeveloperStats();
      setDevData(res.AuthorWorklog.rows);
    })();
  });

  return (
    <Layout>
      {devData ?
        <div className={styles.app}>
          <div className={styles.filter}>
            <Filter 
              setFilters={(val) => setFilters(val)}
              filters={filters}
              devData={devData}
            />
          </div>
          <Metrics 
            devData={devData}
            filters={filters}
          />
          <LineChart 
            devData={devData}
            filters={filters}
          />
          <div className={styles.graphGroup}>
            <Table 
              devData={devData}
              filters={filters}
            />
            <PieChart 
              devData={devData}
              filters={filters}
            />
          </div>
        </div>
      : <SkeletonStructure />}
    </Layout>
  )
}

export default App
