import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../config/styles';
import Section from '../Section';

const Message = styled.p`
    text-align: center;
    padding: 15px 0;
`;

const Wrapper = styled.div`
    display: grid;
    margin-bottom: 1.3rem;
`;

const Row = styled.div`
    display: flex;
    border-bottom: 1px solid ${colors.lines};
    padding: 7px 0;
    ${props => props.header ? 'font-weight: bold' : ''};

    &:first-child {
        padding-top: 0;
    }

    &:last-child {
        border-bottom: none;
        padding-bottom: 0;
    }

    & > * {
        flex: 1;
    }
`;

const typeToText = {
    3: 'trójka',
    4: 'czwórka',
    5: 'piątka',
    6: 'szóstka'
}

const WinersComponent = ({winers}) => {
    return (
        <Section title="wygrane">
            {winers.length === 0
                ? <Message>Brak danych</Message>
                : <Wrapper>
                    <Row header>
                        <p>stopień</p>
                        <p>ilość</p>
                        <p>kwota (zł)</p>
                    </Row>
                    {winers.map(winner =>
                        <Row key={winner.type}>
                            <p>{typeToText[winner.type]}</p>
                            <p>{winner.count}</p>
                            <p>{winner.prize}</p>
                        </Row>
                    )}
                </Wrapper>
            }
        </Section>
    )
}

WinersComponent.propTypes = {
    winers: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.number,
        count: PropTypes.number,
        prize: PropTypes.number,
    }))
}

WinersComponent.defaultProps = {
    winers: [],
}

export default WinersComponent;
