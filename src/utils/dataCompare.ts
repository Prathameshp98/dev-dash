
// compare the date in order to avoid date selection where start date > end date
const dataCompare = (start: string, end: string) => {
    if(start && end){
        const startDateObj = new Date(start);
        const endDateObj = new Date(end);
        if (startDateObj > endDateObj) {
            return false;
        } else {
            return true;
        }
        
    } else {
        return true;
    }

}

export default dataCompare;