
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

    const { 
        developer
    } = useUserContext();
    const { filters } = useFilterContext();
    const[tableData, setTableData] = useState<{
        dates: string[];
        tableCells: string[][];
    }>({
        dates: [],
        tableCells: []
    })

    useEffect(() => {

        if(developer[0].name){

            const dates = developer[0].dayWiseActivity.map((each: any) => formatDate(each.date));
            dates.unshift('')
            const tableCells: any[] = [];

            colorCodes.map((each: any) => {
                tableCells.push([each.label])
            });

            tableCells.map((_, index: number) => {
                developer[0].dayWiseActivity.map((each: any) => {
                    const isReq = each.items.children.find((item: any) => item.label === tableCells[index][0])
                    if(isReq){
                        tableCells[index].push(isReq.count);
                    }
                });
            });

            setTableData({
                dates: dates,
                tableCells: tableCells
            });
        }
    }, [filters, developer]);

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