import React from 'react';
import styled from 'styled-components';

import { device } from '../../config/styles';
import Calendar from './DrawsCalendar/Calendar/Calendar';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    padding: 0 20px;

    @media ${device.tablet} {
        width: 50%;
        padding: 0;
    }
`;

const DrawsComponent = ({draws, hasNextDraws, moreDraws}) => {
    return (
        <Wrapper>
            <Calendar
                draws={draws}
                hasMore={hasNextDraws}
                loadMore={moreDraws}
            />
        </Wrapper>
    )
};

export default DrawsComponent;
