import React from 'react';
import styled from 'styled-components';

import { monthsName } from '../../../../config/vars';

import DaysWeek from './DaysWeek';
import VirtualList from '../VirtualList';
import Month from './Month';

const CalendarWrapper = styled.div`
    width: 100%;
    height: calc(100vh - 5.5rem);
`;

const Calendar = ({ draws, hasMore, loadMore }) => {
    const months = draws
        .map(draw => draw.id.substring(0, 6))
        .filter((time, index, arr) => arr.indexOf(time) === index);

    return (
        <CalendarWrapper>
            <DaysWeek />
            <VirtualList
                months={months}
                hasMore={hasMore}
                loadMore={loadMore}
                month={({ style, index }) => {
                    const id = months[index];

                    return (
                        <Month
                            style={style}
                            year={id.substring(0, 4)}
                            month={{
                                name: monthsName[id.substring(4, 6) - 1],
                                number: id.substring(4, 6),
                            }}
                        />
                    )

                }}
            />
        </CalendarWrapper>
    )
};

export default Calendar;
