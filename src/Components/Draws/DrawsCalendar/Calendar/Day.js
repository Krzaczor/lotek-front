import React, { useCallback } from 'react';
import styled from 'styled-components';

import { mediaWidth ,colors } from '../../../../config/styles';
import { useDrawsContext } from '../../../../hooks/useDrawsContext';

const heightAndWidth = '2.2rem';

const DayWrapper = styled.div`
    text-align: center;
    width: calc(100% / 7);
    margin-bottom: 0.5em;
`;

const DayAsButton = styled.button`
    width: ${heightAndWidth};
    height: ${heightAndWidth};
    background-color: inherit;
    font-size: 1em;
    border: 2px solid ${colors.secondary};
    border-radius: 50%;
    cursor: pointer;

    &:hover,
    &:focus {
        background-color: ${colors.secondary};
    }
`;

const DayAsSpan = styled.span`
    display: inline-block;
    line-height: ${heightAndWidth};
`;

const Day = ({ id, number }) => {
    const { draws, showModal, setSelectDraw, setShowModal } = useDrawsContext();

    const handleDraw = useCallback((draw) => () => {
        setSelectDraw(draw);

        if (window.innerWidth >= mediaWidth.tablet) {
            if (showModal) {
                setShowModal(false);
            }
        } else {
            setShowModal(true);
        }
        
    }, []);

    const draw = draws.find(draw => draw.id === id);

    return (
        <DayWrapper>{(
            !!draw
                ? <DayAsButton onClick={handleDraw(draw)}>{number}</DayAsButton>
                : <DayAsSpan>{number}</DayAsSpan>
        )}
        </DayWrapper>
    )
};

export default Day;
