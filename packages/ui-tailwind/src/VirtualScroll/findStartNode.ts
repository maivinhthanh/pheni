export const findStartNode = (scrollTop: number, nodePositions: number[], itemCount: number): number => {
  let startRange = 0;
  let endRange = itemCount - 1;
  while (endRange !== startRange) {
    // console.log(startRange, endRange);
    const middle = Math.floor((endRange - startRange) / 2 + startRange);

    if (nodePositions[middle] <= scrollTop && nodePositions[middle + 1] > scrollTop) {
      // console.log("middle", middle);
      return middle;
    }

    if (middle === startRange) {
      // edge case - start and end range are consecutive
      // console.log("endRange", endRange);
      return endRange;
    } else {
      if (nodePositions[middle] <= scrollTop) {
        startRange = middle;
      } else {
        endRange = middle;
      }
    }
  }
  return itemCount;
};
