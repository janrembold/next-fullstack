export function calculateAverageTimeDifference(
  timeDifferences: number[]
): number {
  const q1: number = percentile(timeDifferences, 25);
  const q3: number = percentile(timeDifferences, 75);
  const iqr: number = q3 - q1;
  const outlierThreshold: number = 1.5;

  const filteredTimeDifferences: number[] = timeDifferences.filter(
    (diff) =>
      diff >= q1 - outlierThreshold * iqr && diff <= q3 + outlierThreshold * iqr
  );

  return filteredTimeDifferences.length > 0
    ? average(filteredTimeDifferences)
    : 0;
}

function percentile(arr: number[], percentile: number): number {
  const sortedArr: number[] = arr.slice().sort((a, b) => a - b);
  const index: number = Math.ceil((percentile / 100) * arr.length) - 1;
  return sortedArr[index];
}

function average(arr: number[]): number {
  const sum: number = arr.reduce((acc, val) => acc + val, 0);
  return sum / arr.length;
}

// // Example usage
// const timeDifferences: number[] = [
//   /* results of API calls */
// ];
// const avgTimeDiff: number = calculateAverageTimeDifference(timeDifferences);
// console.log("Average Time Difference:", avgTimeDiff);
