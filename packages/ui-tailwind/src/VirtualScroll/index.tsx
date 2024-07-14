import React, { useMemo, memo } from 'react';
import { useScrollAware } from './useScrollAware';
import { findStartNode } from './findStartNode';
import { findEndNode } from './findEndNode';

export interface VirtualScrollProps {
  Item: React.FC<{ index: number }>;
  itemCount: number;
  height: number;
  getChildHeight: (index: number) => number;
  renderAhead?: number;
}

export const VirtualScroll: React.FC<VirtualScrollProps> = memo(
  ({ Item, itemCount, height, getChildHeight, renderAhead = 20 }) => {
    const childPositions = useMemo(() => {
      let results = [0];
      for (let i = 1; i < itemCount; i++) {
        results.push(results[i - 1] + getChildHeight(i - 1));
      }
      return results;
    }, [getChildHeight, itemCount]);

    const [scrollTop, ref] = useScrollAware();
    const totalHeight = childPositions[itemCount - 1] + getChildHeight(itemCount - 1);

    const firstVisibleNode = useMemo(
      () => findStartNode(scrollTop, childPositions, itemCount),
      [scrollTop, childPositions, itemCount],
    );

    const startNode = Math.max(0, firstVisibleNode - renderAhead);

    const lastVisibleNode = useMemo(
      () => findEndNode(childPositions, firstVisibleNode, itemCount, height),
      [childPositions, firstVisibleNode, itemCount, height],
    );
    const endNode = Math.min(itemCount - 1, lastVisibleNode + renderAhead);
    const visibleNodeCount = endNode - startNode + 1;
    const offsetY = childPositions[startNode];

    const visibleChildren = useMemo(
      () =>
        new Array(visibleNodeCount)
          .fill(null)
          .map((_, index) => <Item key={index + startNode} index={index + startNode} />),
      [startNode, visibleNodeCount, Item],
    );

    return (
      <div style={{ height, overflow: 'auto' }} ref={ref}>
        <div
          className="viewport"
          style={{
            overflow: 'hidden',
            willChange: 'transform',
            height: totalHeight,
            position: 'relative',
          }}
        >
          <div
            style={{
              willChange: 'transform',
              transform: `translateY(${offsetY}px)`,
            }}
          >
            {visibleChildren}
          </div>
        </div>
      </div>
    );
  },
);
