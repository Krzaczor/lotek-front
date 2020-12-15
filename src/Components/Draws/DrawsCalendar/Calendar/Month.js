import React from 'react';
import styled from 'styled-components';

import { device } from '../../../../config/styles';
import Day from './Day';

const MonthWrapper = styled.div`
    &:last-child {
        padding-bottom: 15px;
    }
`;

const MonthTitle = styled.h3`
    margin-bottom: 10px;

    @media ${device.tablet} {
        padding-left: 15px;
    }
`;

const Days = styled.div`
    display: flex;
    flex-wrap: wrap;

    & > *:first-child {
        margin-left: calc((${props => props.firstDay} / 7) * 100%);
    }
`;

const getCountDaysInMonth = (year, month) => {
    return (new Date(year, month, 0)).getDate();
}

const getFirstName = (year, month) => {
    const day = (new Date(year, month - 1, 1)).getDay();
    return (day === 0) ? 6 : day - 1;
}

const Month = ({ style, month, year }) => {
    const name = month.name;
    const monthNumber = parseInt(month.number);
    const yearNumber = parseInt(year);
    const daysInMonth = getCountDaysInMonth(yearNumber, monthNumber);
    const firstDay = getFirstName(yearNumber, monthNumber);
    const allDays = [];

    for (let day = 1; day <= daysInMonth; ++day) {
        allDays.push(day);
    }

    return (
        <MonthWrapper style={style}>
            <MonthTitle>{`${yearNumber} ${name}`}</MonthTitle>
            <Days firstDay={firstDay}>
                {allDays.map(day =>
                    <Day
                        key={day}
                        number={day}
                        id={`${yearNumber}${monthNumber > 9 ? monthNumber : `0${monthNumber}`}${day > 9 ? day : `0${day}`}`}
                    />
                )}
            </Days>
        </MonthWrapper>
    )
};

export default Month;
