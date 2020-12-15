import React from 'react';
import styled from 'styled-components';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { addDraw } from '../../../utils';
import { mediaWidth } from '../../../config/styles';

import Time from './Time';
import Numbers from './Numbers';
import Winers from './Winers';
import Buttons from './Buttons';

const Form = styled.form`
    margin: 0 auto;
    max-width: ${mediaWidth.tablet}px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const schema = yup.object().shape({
    numbers: yup.array().of(
        yup.number().positive().typeError('Podaj tylko liczby').min(1, 'Najmniejszą dozwoloną liczbą jest 1').max(49, 'Największą dozwoloną liczbą jest 49').required()
    ),
    winers: yup.lazy(val => (
        Array.isArray(val)
            ? yup.array().of(
                yup.object().shape({
                    type: yup.number().integer().required(),
                    count: yup.number().integer().required(),
                    prize: yup.number().required(),
                }),
            )
            : yup.string().default('none')
    )),
    time: yup.date().typeError('niepoprawny dormat daty. YYYY-MM-DD').max(new Date()).required()
});

export default () => {
    const { register, errors, setError, handleSubmit } = useForm({
        resolver: yupResolver(schema)
      });

    const onSubmit = (data) => {
        if (data.numbers.length !== 6) {
            setError('numbers', {
                type: 'length',
                message: 'Podałeś za mało lub za dużo liczb.',
            });

            return;
        }

        if (data.numbers.length !== (new Set(data.numbers)).size) {
            setError('numbers', {
                type: 'unique',
                message: 'Liczby nie mogą się powtarzać.',
            });

            return;
        }

        const hasSendForm = window.confirm('Czy chcesz wysłać formularz?');

        if (hasSendForm) {
            addDraw({
                data,
                success: ({data}) => {
                    let resultString = "";

                    for (const [key, value] of Object.entries(data)) {
                        resultString += `${key}: ${value}\n`;
                    }

                    window.alert(resultString);
                },
                fail: (result) => window.alert(result.response.data.message)
            });
        }
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Time register={register} errors={errors?.time} />
            <Numbers register={register} errors={errors?.numbers} />
            <Winers register={register} errors={errors?.winers} />
            <Buttons />
        </Form>
    )
}