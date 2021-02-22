import moment from 'moment';

export const getFormattedTargetDate = (startDate) => {
    const nextSunday = getNextSunday(startDate);

    return formatDate(nextSunday);
};

export const getNextSunday = (startDate) => {
    const SUNDAY = 7;
    const startDayOfWeek = moment(startDate).isoWeekday();

    if (startDayOfWeek === SUNDAY) {
        return moment(startDate);
    }

    return moment(startDate).isoWeekday(SUNDAY);
};

const formatDate = (inputDate) => {
    return inputDate.format('M/D/YY');
};
