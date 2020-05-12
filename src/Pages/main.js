import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Axios from 'axios';

import DaysWeek from '../Components/daysWeek';
import Calendar from '../Components/Calendar';

const heightAndWidth = '35px';

const Loader = styled.p`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
`;

const MainWrapper = styled.div`
    width: 100%;
    margin-top: 90px;
`;

const DayWrapper = styled.div`
    text-align: center;
    font-family: 'Segoe UI Regular';
`;

const DayAsButton = styled.button`
    width: ${heightAndWidth};
    height: ${heightAndWidth};
    background-color: inherit;
    font-size: 14px;
    border: 2px solid #ffd105;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.1s linear;

    &:hover,
    &:focus {
        background-color: #ffd105;
    }
`;

const DayAsSpan = styled.span`
    display: inline-block;
    line-height: ${heightAndWidth};
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

export default () => {
    const [draws, setDraws] = useState([]);

    useEffect(() => {
        const getDraws = async () => {
            const result = await Axios.get('http://localhost:3001/draws');
            setDraws(result.data);
        }
        getDraws();


    }, []);

    if (draws.length === 0) {
        return <Loader>Ładowanie...</Loader>;
    }

    const drawsTime = draws.map(({ time }) => time);

    return (
        <MainWrapper>
            <DaysWeek />
            <Calendar
                start={drawsTime}
                end={drawsTime[drawsTime.length - 1]}
                month={{
                    names: months,
                    styles: `margin-bottom: 15px;`
                }}
                day={{
                    element: (props) => {
                        return (
                            <DayWrapper>{
                                drawsTime.includes(props.time.toJSON()) ?
                                    <DayAsButton>{props.children}</DayAsButton> :
                                    <DayAsSpan>{props.children}</DayAsSpan>
                            }</DayWrapper>
                        )
                    }
                }}
            />
        </MainWrapper>
    );
}
