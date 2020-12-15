import React from 'react';
import {
    Create,
    SimpleForm,
    DateInput,
    CheckboxGroupInput,
    NumberInput,
    TextInput,
    TextField,
    
} from 'react-admin';

const numbersList = Array
    .from(Array(49))
    .map((value, index) => ++index)
    .map(value => ({
        id: value,
        name: value,
    }));

const DrawsList = (props) => {
    return (
        <Create {...props}>
            <SimpleForm>
                <CheckboxGroupInput label="Liczby" source="numbers" choices={numbersList} translateChoice={false} />
                {[6, 5, 4, 3].map((number, index) =>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridGap: '5px' }}>
                        <NumberInput disabled defaultValue={number} source={`winers[${index}].type`} label="type" />
                        <NumberInput source={`winers[${index}].count`} label="count" />
                        <NumberInput source={`winers[${index}].prize`} label="prize" />
                    </div>
                )}
                <DateInput label="Data losowania" source="time" />
            </SimpleForm>
        </Create>
    )
}

export default DrawsList;
