import { calculateSubscriptionPeriod } from './index';

// 테스트 함수
function runTests() {
  // 테스트 케이스 1: 연간 구독, 시작일 기준
  const yearlyStart = new Date('2023-07-31T01:08:34.000Z');
  const yearlyStartResult = calculateSubscriptionPeriod('yearly', 'start', yearlyStart);
  console.log('Yearly subscription (start date):');
  console.log('Start:', yearlyStartResult.startDate);
  console.log('End:', yearlyStartResult.endDate);
  console.log('---');

  // 테스트 케이스 2: 연간 구독, 종료일 기준
  const yearlyEnd = new Date('2024-07-31T01:08:34.000Z');
  const yearlyEndResult = calculateSubscriptionPeriod('yearly', 'end', yearlyEnd);
  console.log('Yearly subscription (end date):');
  console.log('Start:', yearlyEndResult.startDate);
  console.log('End:', yearlyEndResult.endDate);
  console.log('---');

  // 테스트 케이스 3: 월간 구독, 시작일 기준 (31일이 있는 달)
  const monthlyStart31 = new Date('2023-07-31T01:08:34.000Z');
  const monthlyStart31Result = calculateSubscriptionPeriod('monthly', 'start', monthlyStart31);
  console.log('Monthly subscription (start date, 31-day month):');
  console.log('Start:', monthlyStart31Result.startDate);
  console.log('End:', monthlyStart31Result.endDate);
  console.log('---');

  // 테스트 케이스 4: 월간 구독, 종료일 기준 (30일이 있는 달에서 31일로 넘어가는 경우)
  const monthlyEnd30 = new Date('2023-07-31T01:08:34.000Z');
  const monthlyEnd30Result = calculateSubscriptionPeriod('monthly', 'end', monthlyEnd30);
  console.log('Monthly subscription (end date, 30 to 31-day month):');
  console.log('Start:', monthlyEnd30Result.startDate);
  console.log('End:', monthlyEnd30Result.endDate);
  console.log('---');
}

// 테스트 실행
runTests();