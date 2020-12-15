import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    DateField,
    EditButton,
    DeleteButton,
} from 'react-admin';

const DrawsList = (props) => {
    return (
        <List{...props}>
            <Datagrid>
                <TextField source="id" />
                <DateField source="time" />
                <TextField source="numbers" />
                <TextField source="winers" emptyText={'daada'} />
                <EditButton basePath="/draws" />
                <DeleteButton base="/draws" />
            </Datagrid>
        </List>
    )
}

export default DrawsList;
