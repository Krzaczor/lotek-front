import React from 'react';
import styled from 'styled-components';

import { colors } from '../../../config/styles';

const ButtonsWrapper = styled.section`
    display: flex;
    width: 100%;
`;

const Button = styled.button`
    /* flex: 1; */
    padding: 10px 15px;
    margin-right: 10px;
    font-size: 1rem;
    border: none;
    cursor: pointer;
    background-color: ${({color}) => color ? color : colors.primary};
    color: ${colors.fontLight};
`;

export default () => {
    return (
        <ButtonsWrapper>
            <Button type="submit">Dodaj</Button>
            <Button color={colors.danger} type="reset">Wyczyść</Button>
        </ButtonsWrapper>
    )
}