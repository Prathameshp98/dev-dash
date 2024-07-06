import { 
    useEffect, 
    useState
} from "react";
import Card from "../../Units/Card/card";

import { colorCodes } from "../../../constants";
import { 
    Chart as ChartJS, 
    ArcElement, 
    Tooltip, 
    Legend 
} from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useUserContext } from "../../../Context/useContext/useUserContext";
import { useFilterContext } from "../../../Context/useContext/useFilterContext";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {

    const { 
        developer
    } = useUserContext();
    const { filters } = useFilterContext();
    const[pieGraph, setPieGraph] = useState<any>({
        labels: [],
        datasets: []
    });

    useEffect(() => {
        if(developer[0].name){

            const count = developer[0].totalActivity.map((each: any) => parseInt(each.value));
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
        }
    }, [filters, developer]);

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