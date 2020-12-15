import React from 'react';
import styled from 'styled-components';

import { device, colors } from '../../../../config/styles';

const Week = styled.ul`
    list-style-type: none;
    padding: 0 20px;
    display: flex;
    align-items: center;
    position: fixed;
    z-index: 999;
    height: 2.5em;
    left: 0;
    width: 100%;
    background-color: ${colors.background};

    &:before {
        content: '';
        display: inline-block;
        height: 1px;
        bottom: 0;
        background-color: ${colors.lines};
        position: absolute;
        width: calc(100% - 2.5em);
        left: 20px;

        @media ${device.tablet} {
            width: calc(100% - 30px);
            left: 15px;
        }
    }

    @media ${device.tablet} {
        width: 50%;
        padding: 10px 0;
    }
`;

const Day = styled.li`
    text-align: center;
    position: relative;
    flex: 1;

    &:last-child {
        border-right: none;
    }

    &:before {
        content: "";
        width: 1px;
        height: 100%;
        background-color: ${colors.lines};
        position: absolute;
        right: 0;
    }

    &:last-child:before {
        content: none;
    }
`;

const DaysWeek = () => {
    return (
        <Week>
            <Day>pn</Day>
            <Day>wt</Day>
            <Day>śr</Day>
            <Day>czw</Day>
            <Day>pt</Day>
            <Day>sb</Day>
            <Day>nd</Day>
        </Week>
    )
};

export default DaysWeek;
