import React from 'react';
import {
    Create,
    SimpleForm,
    DateInput,
    CheckboxGroupInput
} from 'react-admin';

import numbersList from './numbers';

const DrawsList = (props) => {
    return (
        <Create {...props} title="Tworzenie losowania">
            <SimpleForm>
                <CheckboxGroupInput label="Liczby" source="numbers" choices={numbersList} translateChoice={false} />
                <DateInput label="Data losowania" source="time" />
            </SimpleForm>
        </Create>
    )
}

export default DrawsList;
