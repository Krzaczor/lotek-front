import React from 'react';
import styled from 'styled-components';

import Calendar from '../Components/Calendar/calendar';

const MainWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    overflow: hidden;
    padding: 20px;
    margin-top: 90px;
`;

const months = [
    'Styczeń',
    'Luty',
    'Marzec',
    'Kwiecień',
    'Maj',
    'Czerwiec',
    'Lipiec',
    'Sierpień',
    'Wrzesień',
    'Październik',
    'Listopad',
    'Grudzień'
];

// const days = [
//     'poniedziałek',
//     'wtorek',
//     'środa',
//     'czwartek',
//     'piątek',
//     'sobota',
//     'niedziela'
// ];

export default () => {

    return (
        <MainWrapper>
            <Calendar
                year={2020}
                month={4}
                monthsName={months}
                day={{
                    styles: `
                        height: 45px;
                        font-family: 'Segoe UI Regular';
                        font-size: 16px;
                        border: none;
                        cursor: pointer;
                        background-color: inherit;
                    `
                }}
            />
        </MainWrapper>
    );
}
