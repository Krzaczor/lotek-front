import React from 'react';
import styled from 'styled-components';

import { colors } from '../../../config/styles';
import Section from '../../Section';

const NumbersWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const Number = styled.input`
    width: 3rem;
    height: 3rem;
    margin: 5px;
    border: 1px solid ${colors.lines};
    border-radius: 50%;
    text-align: center;
`;

const Msg = styled.p`
    color: ${colors.danger};
    text-align: center;
`;

export default ({register, errors = []}) => {
    const errorsType = (type) => {
        const index = !Array.isArray(errors) ? -1 : errors.findIndex((error) => error?.type === type);
        return index !== -1 ? <Msg>{errors[index].message}</Msg> : null;
    }

    return (
        <Section title="liczby">
            <NumbersWrapper>
                <Number type="text" ref={register} name="numbers[0]" />
                <Number type="text" ref={register} name="numbers[1]" />
                <Number type="text" ref={register} name="numbers[2]" />
                <Number type="text" ref={register} name="numbers[3]" />
                <Number type="text" ref={register} name="numbers[4]" />
                <Number type="text" ref={register} name="numbers[5]" />
            </NumbersWrapper>
            {errors?.type === 'unique' ? <Msg>{errors.message}</Msg> : null}
            {errors?.type === 'length' ? <Msg>{errors.message}</Msg> : null}
            {errorsType('typeError')}
            {errorsType('max')}
            {errorsType('min')}
        </Section>
    )
}