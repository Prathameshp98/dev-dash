import { useEffect, useState } from "react";
import Card from "../../Units/Card/card";

import PieChartProps from './pieChart.d';

import { colorCodes } from "../../../constants";
import { 
    Chart as ChartJS, 
    ArcElement, 
    Tooltip, 
    Legend 
} from 'chart.js';
import { Pie } from 'react-chartjs-2';


ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({
    devData,
    filters
}: PieChartProps) => {

    const[pieGraph, setPieGraph] = useState<any>({
        labels: [],
        datasets: []
    });

    useEffect(() => {

        const filteredDevData = devData.filter((data: any) => data.name == filters?.name)[0];

        const count = filteredDevData.totalActivity.map((each: any) => parseInt(each.value));
        const countSum = count.reduce((acc: number, curr: number) => {
            return acc + curr;
        }, 0);
        const percentage = count.map((each: number) => Math.round((each/countSum)*100));
        const labels = colorCodes.map((each:any) => each.label);
        const backgroundColor = colorCodes.map((each:any) => each.fillColor);

        const data = {
            labels: labels,
            datasets: [
              {
                label: '%',
                data: percentage,
                backgroundColor: backgroundColor,
                borderWidth: 1,
              },
            ],
        };

        setPieGraph(data);
    }, [filters]);

    return (
        <Card
            height={380}
            width={350}
            heading={'Percentage Distribution'}
        >
            <Pie    
                style={{
                    marginTop: '10px'
                }}
                data={pieGraph} 
            />
        </Card>
    )
}

export default PieChart;