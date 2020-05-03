import React from 'react';
import styled from 'styled-components';

const Month = styled.div`
    width: 100%;
    ${props => props.styles}
`;

const MonthTitle = styled.h2`
    margin-bottom: 15px;
`;

const Days = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 6px;

    & > *:first-child {
        grid-column-start: ${props => props.firstDay};
    }
`;

const Day = styled(({ tag, children, ...props }) => React.createElement(tag, props, children))`
    ${props => props.styles}
`

const getCurrentYear = () => (new Date()).getFullYear();
const getCurrentMonth = () => (new Date()).getMonth();
const getMonthsName = () => ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', ' October', ' November', 'December'];
const getdaysName = () => ['mo', 'tu', 'we', 'th', 'fr', 'sa', 'su'];


const getCountDaysInMonth = (year, month) => {
    if (!year) year = (new Date()).getFullYear();
    if (!month) month = (new Date()).getMonth();

    return (new Date(year, month, 0)).getDate();
}

export default (props) => {
    const calendar = {
        start: props.start ?? null,
        end: props.end ?? null,
        year: props.year ?? getCurrentYear(),
        month: props.month ?? getCurrentMonth(),
        monthsName: props.monthsName ?? getMonthsName(),
        daysName: props.daysName ?? getdaysName(),
        day: {
            element: props?.day?.element ?? 'button',
            styles: props?.day?.styles ?? '&:hover {cursor: pointer;}'
        }
    }

    const daysInMonth = getCountDaysInMonth(calendar.year, calendar.month);
    const firstDay = (new Date(calendar.year, calendar.month - 1, 1)).getDay();
    const allDays = [];

    for (let day = 1; day <= daysInMonth; ++day) {
        allDays.push(day);
    }

    return (
        <Month>
            <MonthTitle>{calendar.monthsName[calendar.month - 1]} {calendar.year}</MonthTitle>
            <Days firstDay={firstDay}>
                {allDays.map(day =>
                    <Day
                        key={day}
                        tag={calendar.day.element}
                        styles={calendar.day.styles}
                    >{day}</Day>
                )}
            </Days>
        </Month>
    )
}