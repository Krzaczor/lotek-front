import React from 'react';
import styled from 'styled-components';

const Week = styled.ul`
    list-style-type: none;
    display: flex;
    align-content: center;
    align-items: center;
    width: 100%;
    padding: 10px 20px;
    position: fixed;
    top: 50px;
    background-color: #fff;
`;

const Day = styled.li`
    width: calc(100% / 7);
    text-align: center;
    border-right: 1px solid lightgray;
    margin: 0 3px;

    &:first-child {
        margin-left: 0;
    }

    &:last-child {
        margin-right: 0;
        border-right: none;
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