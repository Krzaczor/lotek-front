import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Axios from 'axios';

import Calendar from '../Components/Calendar';

const Loader = styled.p`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
`;

const MainWrapper = styled.div`
    display: 100vw;
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

export default () => {
    const [draws, setDraws] = useState([]);

    useEffect(() => {
        const getDraws = async () => {
            const result = await Axios.get('http://localhost:3000/draws');
            setDraws(result.data);
        }
        getDraws();
    }, []);

    if (draws.length === 0) {
        return <Loader>Ładowanie...</Loader>;
    }

    return (
        <MainWrapper>
            <Calendar
                year={2020}
                month={5}
                monthsName={months}
                data={draws}
                day={{
                    styles: (props) => `
                        font-family: 'Segoe UI Regular';
                        font-size: 18px;
                        cursor: pointer;
                        background-color: inherit;
                        border: ${props.collaction.find(({ time }) => time === props.time.toJSON()) ? '1px solid #ffd105' : 'none'};
                        border-radius: ${props.collaction.find(({ time }) => time === props.time.toJSON()) ? '50%' : 'none'};
                    `
                }}
            />
        </MainWrapper>
    );
}
