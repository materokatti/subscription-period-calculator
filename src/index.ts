type SubscriptionType = 'monthly' | 'yearly';
type DateInput = 'start' | 'end';

export function calculateSubscriptionPeriod(
  type: SubscriptionType,
  dateType: DateInput,
  date: Date,
): { startDate: any; endDate: any } {


  if (!(date instanceof Date) || isNaN(date.getTime())) {
    throw new Error('Invalid date input');
  }

  if (type === 'yearly') {
    const startDate = new Date(date);
    const endDate = new Date(date);

    if (dateType === 'start') {
      endDate.setFullYear(endDate.getFullYear() + 1);
    } else {
      startDate.setFullYear(startDate.getFullYear() - 1);
    }

    return { startDate, endDate };
  } else if (type === 'monthly') {
    const startDate = new Date(date);
    const endDate = new Date(date);

    if (dateType === 'start') {
      endDate.setMonth(endDate.getMonth() + 1);
      if (endDate.getDate() !== startDate.getDate()) {
        endDate.setDate(0);
      }
    } else {
      startDate.setMonth(startDate.getMonth() - 1);
      if (startDate.getDate() !== date.getDate() && startDate.getDate() < date.getDate()) {
        startDate.setDate(startDate.getDate() - 1);
      }
    }

    return { startDate, endDate };
  } else {
    throw new Error('Invalid subscription type');
  }
}