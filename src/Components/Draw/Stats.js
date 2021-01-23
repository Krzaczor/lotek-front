import React from 'react';
import styled from 'styled-components';
import { colors } from '../../config/styles';
import Section from '../Section';

const Stat = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${colors.lines};
    margin-bottom: 1.3rem;
    padding-bottom: 10px;

    &:last-child {
        border: none;
    }

    & > * {
        text-align: left;
    }
`;

const StatNumbersList = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 10px;
`;

const StatsNumbersItem = styled.div`
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-column-gap: 15px;
`;

const Number = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 2.1em;
    height: 2.1em;
    background-color: ${colors.secondary};
`;

const Info = styled.div`
    font-size: 1rem;
`;

const Stats = ({stats}) => {
    return (
        <Section title="szczegóły">
            <Stat><p>Losowania z takimi samymi liczbami:</p><p>0</p></Stat>
            <Stat><p>Rozpiętość liczb:</p><p>40</p></Stat>
            <StatNumbersList>
                <StatsNumbersItem>
                    <Number>23</Number>
                    <Info><p>kiedy ostanio:</p><p> ilość wystąpień:</p></Info>
                    <Info><time>13.04.2021 (wtorek)</time><p>345</p></Info>
                </StatsNumbersItem>
                <StatsNumbersItem>
                    <Number>23</Number>
                    <Info><p>kiedy ostanio:</p><p> ilość wystąpień:</p></Info>
                    <Info><time>13.04.2021 (wtorek)</time><p>345</p></Info>
                </StatsNumbersItem>
                <StatsNumbersItem>
                    <Number>23</Number>
                    <Info><p>kiedy ostanio:</p><p> ilość wystąpień:</p></Info>
                    <Info><time>13.04.2021 (wtorek)</time><p>345</p></Info>
                </StatsNumbersItem>
                <StatsNumbersItem>
                    <Number>23</Number>
                    <Info><p>kiedy ostanio:</p><p> ilość wystąpień:</p></Info>
                    <Info><time>13.04.2021 (wtorek)</time><p>345</p></Info>
                </StatsNumbersItem>
                <StatsNumbersItem>
                    <Number>23</Number>
                    <Info><p>kiedy ostanio:</p><p> ilość wystąpień:</p></Info>
                    <Info><time>13.04.2021 (wtorek)</time><p>345</p></Info>
                </StatsNumbersItem>
                <StatsNumbersItem>
                    <Number>23</Number>
                    <Info><p>kiedy ostanio:</p><p> ilość wystąpień:</p></Info>
                    <Info><time>13.04.2021 (wtorek)</time><p>345</p></Info>
                </StatsNumbersItem>
            </StatNumbersList>
        </Section>
    )
}

export default Stats;
