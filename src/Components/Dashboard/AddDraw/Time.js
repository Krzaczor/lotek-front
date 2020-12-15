import React from 'react';
import styled from 'styled-components';

import { colors } from '../../../config/styles';
import Section from '../../Section';

const TimeWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const Number = styled.input`
    height: 3rem;
    margin: 5px;
    border: 1px solid ${colors.lines};
    text-align: center;
`;

const Msg = styled.p`
    color: ${colors.danger};
    text-align: center;
`;

export default ({register, errors}) => {

    return (
        <Section title="czas">
            <TimeWrapper>
                <Number type="text" ref={register} name="time" />
            </TimeWrapper>
        {errors?.type === 'typeError' ? <Msg>{errors.message}</Msg> : null}
        </Section>
    )
}