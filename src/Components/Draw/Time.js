import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

import { device, colors } from '../../config/styles';
import { monthsName } from '../../config/vars';

const Time = styled.time`
    display: block;
    font-size: 1.2em;
    text-align: center;
    margin-bottom: 1.3rem;

    @media ${device.tablet} {
        color: ${colors.fontLight};
        text-align: left;
    }
`;

const TimeComponent = ({ time }) => {
    const day = time.getDate();
    const month = monthsName[time.getMonth()];
    const year = time.getFullYear();

    const date = [day, month, year].join(' ');
    const dateForDateTime = [year, time.getMonth() + 1, day].join('-')

    return (
        <Time dateTime={dateForDateTime}>{date}</Time>
    )
}

TimeComponent.propTypes = {
    time: PropTypes.instanceOf(Date).isRequired
}

export default TimeComponent;
