import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Number from './Number';

const Numbers = styled.div`
    display: flex;
`;

const NumbersComponent = ({ numbers }) => {
    return (
        <Numbers>{
            numbers.map(number =>
                <Number key={number} number={number} />
            )
        }</Numbers>
    )
}

NumbersComponent.propTypes = {
    numbers: PropTypes.arrayOf(PropTypes.number).isRequired
}

export default NumbersComponent;
