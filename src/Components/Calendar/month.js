import React from 'react';
import styled from 'styled-components';

const Month = styled.div`
    width: 100%;
    ${props => props.styles}
`;

const MonthTitle = styled.h2`
    margin-bottom: 5px;
`;

const Days = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);

    & > *:first-child {
        grid-column-start: ${props => props.firstDay};
    }
`;

// const Day = ({ element = 'button', styles = false }) => {
//     if (styles) {
//         return styled(element)``;
//     } else {
//         return styled.button``;
//     }
// }

const Day = styled(({ tag, children, ...props }) => React.createElement(tag, props, children))`
  ${props => props.styles}
`

const getCurrentYear = () => (new Date()).getFullYear();
const getCurrentMonth = () => (new Date()).getMonth();

const getCountDaysInMonth = (year, month) => {
    if (!year) year = (new Date()).getFullYear();
    if (!month) month = (new Date()).getMonth();

    return (new Date(year, month, 0)).getDate();
}

export default (props) => {
    const calendar = {
        year: props.year ?? getCurrentYear(),
        month: props.month ?? getCurrentMonth()
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
                        tag={calendar.customDay.element}
                        styles={calendar.customDay.styles}
                    >{day}</Day>
                )}
            </Days>
        </Month>
    )
}