import React from 'react';
import {
    Edit,
    SimpleForm,
    DateInput,
    CheckboxGroupInput
} from 'react-admin';

import numbersList from './numbers';

const DrawsEdit = (props) => {
    return (
        <Edit {...props} title="Edycja losowania">
            <SimpleForm>
            <CheckboxGroupInput label="Liczby" source="numbers" choices={numbersList} translateChoice={false} />
                <DateInput label="Data losowania" source="time" />
            </SimpleForm>
        </Edit>
    )
}

export default DrawsEdit;
