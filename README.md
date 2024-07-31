# Subscription Period Calculator

A simple and efficient TypeScript function to calculate subscription periods for monthly and yearly subscriptions.

## Installation

You can install this package using npm:

```bash
npm install subscription-period-calculator
```

## Usage
Here's how you can use the calculateSubscriptionPeriod function:

```typescript
import { calculateSubscriptionPeriod } from 'subscription-period-calculator';

// Calculate yearly subscription period
const yearlyStart = new Date('2023-07-31T01:08:34.000Z');
const yearlyResult = calculateSubscriptionPeriod('yearly', 'start', yearlyStart);
console.log('Yearly subscription:');
console.log('Start:', yearlyResult.startDate);
console.log('End:', yearlyResult.endDate);

// Calculate monthly subscription period
const monthlyEnd = new Date('2023-07-31T01:08:34.000Z');
const monthlyResult = calculateSubscriptionPeriod('monthly', 'end', monthlyEnd);
console.log('Monthly subscription:');
console.log('Start:', monthlyResult.startDate);
console.log('End:', monthlyResult.endDate);
```

## API
calculateSubscriptionPeriod(type, dateType, date)
Calculates the start and end dates for a subscription period.
**Parameters:**

* `type` (SubscriptionType): 'monthly' or 'yearly'
* `dateType` (DateInput): 'start' or 'end'
* `date` (Date): The known date (either start or end date of the subscription)

**Returns:**
An object with startDate and endDate properties, both of type Date.
**Testing**
To run the tests locally:

1. Clone this repository
2. Install dependencies: npm install
3. Run the test script: npm test

The test script will run several test cases and output the results to the console.

## Examples

#### Yearly Subscription
```typescript
const yearlyStart = new Date('2023-07-31T01:08:34.000Z');
const result = calculateSubscriptionPeriod('yearly', 'start', yearlyStart);
// result.startDate: 2023-07-31T01:08:34.000Z
// result.endDate:   2024-07-31T01:08:34.000Z
```

#### Monthly Subscription
```typescript
const monthlyEnd = new Date('2023-07-31T01:08:34.000Z');
const result = calculateSubscriptionPeriod('monthly', 'end', monthlyEnd);
// result.startDate: 2023-06-30T01:08:34.000Z
// result.endDate:   2023-07-31T01:08:34.000Z
```

## Notes
* For monthly subscriptions, the function handles edge cases like months with different numbers of days.
* The function throws an error for invalid inputs (e.g., invalid date or subscription type).


## License
This project is licensed under the MIT License.
