import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    DateField,
    EditButton,
    DeleteButton,
} from 'react-admin';

import Numbers from '../../Draw/Numbers';

const CustomNumbersField = ({record, source}) => {
    return <Numbers numbers={record[source]} />
}

const DrawsList = (props) => {
    return (
        <List {...props} sort={{field: 'time', order: 'desc'}}>
            <Datagrid>
                <TextField source="id" />
                <DateField source="time" />
                <CustomNumbersField source="numbers" />
                <EditButton basePath="/draws" />
                <DeleteButton base="/draws" />
            </Datagrid>
        </List>
    )
}

export default DrawsList;
