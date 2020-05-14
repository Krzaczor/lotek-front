import React from 'react';
import styled from 'styled-components';

import Month from './month';

const Calendar = styled.div`
    ${props => props.styles}
`;
const DefaultDay = (props) => <button>{props.children}</button>;

const getMonthsName = () => ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', ' October', ' November', 'December'];
const getdaysName = () => ['mo', 'tu', 'we', 'th', 'fr', 'sa', 'su'];

export default (props) => {
    const calendar = {
        start: props?.start ?? new Date(),
        styles: props?.styles ?? '',
        year: {
            styles: props?.year?.styles ?? ''
        },
        month: {
            names: props?.month?.names ?? getMonthsName(),
            styles: props?.month?.styles ?? ''
        },
        day: {
            names: props?.day?.names ?? getdaysName(),
            element: props?.day?.element ?? DefaultDay,
            styles: props?.day?.styles ?? ''
        }
    }

    let months = calendar.start.map(time => `${new Date(time).getFullYear()} ${new Date(time).getMonth() + 1}`);
    months = Array.from(new Set(months));

    return (
        <Calendar styles={calendar.styles}>{
            months.map((time) =>
                <Month
                    key={time}
                    day={calendar.day}
                    year={Number(time.split(' ')[0])}
                    month={{
                        name: calendar.month.names[Number(time.split(' ')[1] - 1)],
                        number: Number(time.split(' ')[1]),
                        styles: calendar.month.styles
                    }}
                />
            )
        }</Calendar>
    )
}