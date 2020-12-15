import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../config/styles';

const Numbers = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 1.3rem;
`;

const Number = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 2.1em;
    height: 2.1em;
    background-color: ${colors.secondary};
    margin-right: 10px;

    &:last-child {
        margin-right: 0;
    }
`;

const NumbersComponent = ({ numbers }) => {
    return (
        <Numbers>{
            numbers.map(number =>
                <Number key={number}>{number}</Number>
            )
        }</Numbers>
    )
}

NumbersComponent.propTypes = {
    numbers: PropTypes.arrayOf(PropTypes.number).isRequired
}

export default NumbersComponent;
