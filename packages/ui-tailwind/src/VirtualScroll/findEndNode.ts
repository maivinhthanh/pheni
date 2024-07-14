export const findEndNode = (nodePositions: number[], startNode: number, itemCount: number, height: number): number => {
  let endNode: number;
  for (endNode = startNode; endNode < itemCount; endNode++) {
    if (nodePositions[endNode] > nodePositions[startNode] + height) {
      return endNode;
    }
  }
  return endNode;
};
