import React from 'react';
import styled from 'styled-components';

const Week = styled.ul`
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-column-gap: 11px;
    width: 100%;
    padding: 10px 20px;
    position: fixed;
    top: 50px;
    background-color: #fff;
`;

const Day = styled.li`
    text-align: center;
    position: relative;

    &:last-child {
        border-right: none;
    }

    &:before {
        content: "";
        display: inline-block;
        width: 1px;
        height: 100%;
        background-color: lightgray;
        position: absolute;
        right: 0;
        transform: translateX(7px);
    }

    &:last-child:before {
        content: none;
    }
`;

export default () => {
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
}