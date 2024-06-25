
import { 
    useEffect, 
    useState
} from 'react';

import styles from './table.module.css';

import Card from '../Units/Card/card';

import formatDate from '../../utils/formatDate';
import { colorCodes } from '../../constants';
import { useUserContext } from '../../Context/useContext/useUserContext';
import { useFilterContext } from '../../Context/useContext/useFilterContext';

const Table = () => {

    const devData = useUserContext();
    const { filters } = useFilterContext();
    const[tableData, setTableData] = useState<{
        dates: string[];
        tableCells: string[][];
    }>({
        dates: [],
        tableCells: []
    })

    useEffect(() => {

        if(devData.length){
            const filteredDevData = devData.filter((data: any) => data.name == filters?.name)[0];

            const dates = filteredDevData.dayWiseActivity.map((each: any) => formatDate(each.date));
            dates.unshift('')
            const tableCells: any[] = [];

            colorCodes.map((each: any) => {
                tableCells.push([each.label])
            });

            tableCells.map((_, index: number) => {
                filteredDevData.dayWiseActivity.map((each: any) => {
                    const isReq = each.items.children.find((item: any) => item.label === tableCells[index][0])
                    if(isReq){
                        tableCells[index].push(isReq.count);
                    }
                });
            });

            console.log(tableCells)

            setTableData({
                dates: dates,
                tableCells: tableCells
            });
        }
    }, [filters, devData]);

    return (
        <Card
            width={550}
            height={380}
            heading={'Summary'}
        >
            <div className={styles.tableContainer}>
                {tableData.dates && 
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                {tableData.dates.map((date: string, index: number) => (
                                    <th key={index}>{date}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.tableCells.map((row: any, index: number) => (
                                <tr
                                    key={index}
                                >
                                    {row.map((cell: string, index: number) => (
                                        <td key={index}>{cell}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                }
            </div>
        </Card>
    )
};

export default Table;