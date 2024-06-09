
import { useEffect } from 'react';
import './base_styles.css';
import styles from './App.module.css';

import getDeveloperStats from './api/getDeveloperStats';

import Layout from './components/Layout/Layout';
import Metrics from './components/Metrics/metrics';

function App() {

  useEffect(() => {
    (async() => {
      const res = await getDeveloperStats();
      console.log(res)
    })();
  });

  return (
    <Layout>
      <div className={styles.app}>
        <Metrics />
      </div>
    </Layout>
  )
}

export default App
