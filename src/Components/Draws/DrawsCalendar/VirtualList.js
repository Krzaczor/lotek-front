import React, { useCallback, useState } from 'react';
import debounce from 'lodash.debounce';
import { List, AutoSizer, CellMeasurerCache, CellMeasurer, InfiniteLoader, WindowScroller } from 'react-virtualized';

// const cellCacheParams = {
//     defaultHeight: 266,
//     fixedWidth: true,
// };

const cellCacheParams = new CellMeasurerCache({
    defaultHeight: 266,
    fixedWidth: true,
})

const VirtualList = ({ months, hasMore, loadMore, month: Month }) => {
    // const [cache, setCache] = useState(() => new CellMeasurerCache(cellCacheParams));

    // const handleResize = useCallback(debounce(() => {
    //     setCache(new CellMeasurerCache(cellCacheParams));
    // }, 200), []);

    return (
        <InfiniteLoader
            isRowLoaded={({ index }) => !!months[index] && hasMore}
            loadMoreRows={loadMore}
            threshold={10}
            rowCount={1000}
        >
            {({ registerChild, onRowsRendered }) => (
                // <WindowScroller onResize={handleResize} >
                <WindowScroller>
                    {({ isScrolling, scrollTop }) => (
                        <AutoSizer>
                            {({ width, height }) => (
                                <List
                                    style={{marginTop: '3em'}}
                                    autoHeight={true}
                                    width={width}
                                    height={height}
                                    scrollTop={scrollTop}
                                    isScrolling={isScrolling}
                                    ref={registerChild}
                                    onRowsRendered={onRowsRendered}
                                    // deferredMeasurementCache={cache}
                                    // rowHeight={cache.rowHeight}
                                    deferredMeasurementCache={cellCacheParams} // zamiast state -> cache
                                    rowHeight={cellCacheParams.rowHeight} // zamiast state -> cache
                                    rowCount={months.length}
                                    rowRenderer={({ index, key, style, parent }) => (
                                        <CellMeasurer
                                            key={key}
                                            // cache={cache}
                                            key={cellCacheParams} // zamiast state -> cache
                                            parent={parent}
                                            columnIndex={0}
                                            rowIndex={index}
                                        >
                                            <Month index={index} style={style} />
                                        </CellMeasurer>
                                    )}
                                />
                            )}
                        </AutoSizer>
                    )}
                </WindowScroller>
            )}
        </InfiniteLoader>
    )
}

export default VirtualList;
