import moment from 'moment';

export const getFormattedTargetDate = (startDate) => {
    const nextSunday = getNextSunday(startDate);

    return formatDate(nextSunday);
};

const getNextSunday = (startDate) => {
    const SUNDAY = 7;
    return moment(startDate).isoWeekday(SUNDAY);
};

const formatDate = (inputDate) => {
    return inputDate.format('M/D/YY');
};
