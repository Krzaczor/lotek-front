import React from 'react';
import styled from 'styled-components';

import Day from './day';

const Month = styled.div`
    ${props => props.styles ?? ''}
`;

const MonthTitle = styled.h3`
    margin-bottom: 10px;
`;

const Days = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 6px 11px;

    & > *:first-child {
        grid-column-start: ${props => props.firstDay};
    }
`;

const getCountDaysInMonth = (year, month) => {
    if (!year) year = (new Date()).getFullYear();
    if (!month) month = (new Date()).getMonth();

    return (new Date(year, month, 0)).getDate();
}

const getFirstName = (year, month) => {
    const day = (new Date(year, month - 1, 1)).getDay();
    return (day === 0) ? 7 : day;
}

export default (props) => {
    const name = props.month.name;
    const monthNumber = props.month.number;
    const yearNumber = props.year;
    const daysInMonth = getCountDaysInMonth(yearNumber, monthNumber);
    const firstDay = getFirstName(yearNumber, monthNumber);
    const allDays = [];

    for (let day = 1; day <= daysInMonth; ++day) {
        allDays.push(day);
    }

    return (
        <Month styles={props.month.styles}>
            <MonthTitle>{`${name} ${yearNumber}`}</MonthTitle>
            <Days firstDay={firstDay}>
                {allDays.map(day =>
                    <Day
                        key={day}
                        number={day}
                        time={new Date(yearNumber, monthNumber - 1, day)}
                        styles={props.day.styles}
                        element={props.day.element}
                        children={day}
                    />
                )}
            </Days>
        </Month>
    )
}