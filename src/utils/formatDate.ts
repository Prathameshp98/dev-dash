
const formatDate = (dateString: string | undefined) => {

    let date;
    if(dateString){
        date = new Date(dateString);
    }

    const options: any = { year: 'numeric', month: 'long', day: 'numeric' };
    const formatter = new Intl.DateTimeFormat('en-US', options);

    return formatter.format(date);
}

export default formatDate;