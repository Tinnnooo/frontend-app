function formattedDate(date){
    const myDate = new Date(date);
    const options = {month: 'long', day: 'numeric', year: 'numeric'};
    const newDate = myDate.toLocaleDateString('en-US', options);

    return newDate;
}

export default formattedDate;