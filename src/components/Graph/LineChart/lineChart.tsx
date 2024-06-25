import { 
    useEffect, 
    useState
} from 'react';

import Card from '../../Units/Card/card';
import formatDate from '../../../utils/formatDate';
import { 
    graphOptions,
    colorCodes
} from '../../../constants';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import { useUserContext } from '../../../Context/useContext/useUserContext';
import { useFilterContext } from '../../../Context/useContext/useFilterContext';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const LineChart = () => {
    const devData = useUserContext();
    const { filters } = useFilterContext();
    const[selected, setSelected] = useState<string>('PR Open');
    const[lineGraph, setLineGraph] = useState<any>({
        labels: [],
        datasets: []
    });

    useEffect(() => {

        if(devData.length){
            const filteredDevData = devData.filter((data: any) => data.name == filters?.name)[0];

            const labels: any[] = filteredDevData.dayWiseActivity.map((each: any) => {
                return formatDate(each.date)
            });

            const data: any[] = filteredDevData.dayWiseActivity.map((each: any) => {
                const isSelectedItem = each.items.children.find((item: any) => item.label === selected);
                if (isSelectedItem) {
                    return isSelectedItem.count;
                }
            });

            const findOption = colorCodes.find((item: any) => item.label === selected);
            let borderColor;
            if(findOption){
                borderColor = findOption.fillColor;
            }

            const lineChartData: any = {
                labels: labels,
                datasets: [
                    {
                        data: data,
                        borderColor: borderColor,
                        borderWidth: 3,
                    }
                ]
            }

            setLineGraph(lineChartData);
        }
    }, [filters, selected, devData]);

    

    return (
        <Card
            height={500}
            width={950}
            heading={`${selected} over days`}
            hasDropdown={true}
            dropdownOptions={[
                "PR Open", "PR Merged", "Commits", "PR Reviewed", "PR Comments", "Incident Alerts", "Incidents Resolved"
            ]}
            setSelected={(val) => setSelected(val)}
        >
            <Line 
                options={graphOptions}
                data={lineGraph}
            />
        </Card>
    );
}

export default LineChart;