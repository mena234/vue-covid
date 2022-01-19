import moment from 'moment';

export const dayNumberWithMonth = (date) => {
    return new moment(date).format("MMM, DD")
}