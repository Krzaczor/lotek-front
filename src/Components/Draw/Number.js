import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../config/styles';

const StyledNumber = styled.span`
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

const Number = ({number}) => {
    return <StyledNumber>{number}</StyledNumber>
}

Number.propTypes = {
    number: PropTypes.number.isRequired,
}

export default Number;
