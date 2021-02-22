import { getFormattedTargetDate } from './dateUtil';

describe('Date Util', () => {
    it('Should return the date of the next upcoming Sunday', () => {
        const monday = new Date('2021-02-01T00:00:00');
        const expectedFormattedDate = '2/7/21';

        const result = getFormattedTargetDate(monday);

        expect(result).toBe(expectedFormattedDate);
    });

    it('Should return the current day if it is a Sunday', () => {
        const sunday = new Date('2021-02-07T23:59:59');
        const expectedFormattedDate = '2/7/21';

        const result = getFormattedTargetDate(sunday);

        expect(result).toBe(expectedFormattedDate);
    });
});
