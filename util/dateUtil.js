export const getNextSunday = () => {
    var date = new Date();    
    date.setDate(date.getDate() + (7 - date.getDay())) % 7;

    const formattedDate = (date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear().toString().substr(-2);

    return formattedDate;
};
