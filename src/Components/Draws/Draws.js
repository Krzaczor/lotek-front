import React from 'react';
import styled from 'styled-components';
import { compose } from 'recompose';

import withHandleError from '../../hocs/withHandleError';
import withHandleLoading from '../../hocs/withHandleLoading';

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
    if (draws === null) {
        return null;
    }

    if (draws.length === 0) {
        return <Wrapper>Nie ma losowań</Wrapper>;
    }

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

export default compose(
    withHandleLoading,
    withHandleError
)(DrawsComponent);
