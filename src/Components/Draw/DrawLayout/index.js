import React from 'react'
import styled from 'styled-components'

import { colors, device } from '../../../config/styles';
import { useDrawsContext } from '../../../hooks/useDrawsContext';

import Time from '../Time';
import Numbers from '../Numbers';
import Stats from '../Stats';

const Wrapper = styled.div`
    display: none;
    background-color: ${colors.primary};
    color: ${colors.fontDark};
    width: 50%;

    @media ${device.tablet} {
        display: block;
        position: fixed;
        right: 0;
        padding: 1rem 2rem;
        height: calc(100% - 3rem);
    }
`;

const Content = styled.div`
    padding: 2rem;
    background-color: ${colors.background};
    height: calc(100% - 3.5rem);
    overflow-y: auto;
`;

const DrawLayout = () => {
    const { hasSelectedDraw, selectedDraw, newestDraw } = useDrawsContext();
    const draw = hasSelectedDraw ? selectedDraw : newestDraw;

    return (
        <Wrapper>
            <Time time={draw.time} />
            <Content>
                <Numbers numbers={draw.numbers} />
                <Stats stats={draw.stats} />
            </Content>
        </Wrapper>
    )
}

export default DrawLayout;
