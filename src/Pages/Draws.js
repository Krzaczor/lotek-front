import React, { useEffect } from 'react';
import styled from 'styled-components';

import { device } from '../config/styles';
import { DrawsContextProvider } from '../drawsContext';
import { useDrawsContext } from '../hooks/useDrawsContext';
import useMatchMedia from '../hooks/useMatchMedia';
import Navbar from '../components/Navbar';
import Draws from '../containers/Draws';
import Draw from '../containers/Draw';

const Main = styled.main`
  margin-top: 3em;
`;

const Section = styled.section`
    @media ${device.tablet} {
        display: flex;
    }
`;

const styleBodyElement = document.querySelector('body').style;

export default () => {
    const {showModal} = useDrawsContext();
    const { hasMoreWidth } = useMatchMedia();

    useEffect(() => {
        hasMoreWidth && showModal
            ? styleBodyElement.setProperty('overflow', 'hidden')
            : styleBodyElement.removeProperty('overflow');
    }, [showModal, hasMoreWidth]);

    return (
        <DrawsContextProvider>
            <Navbar />
            <Main>
                <Section>
                    <Draws />
                    <Draw />
                </Section>
            </Main>
        </DrawsContextProvider>
    );
}
