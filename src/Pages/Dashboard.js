import React from 'react';
import { Admin, Resource } from 'react-admin';

import dataProvider from '../dataProvider';
import authProvider from '../authProvider';
import draws from '../components/Dashboard/Draws';

const Dashboard = () => {
    return (
        <Admin
            dataProvider={dataProvider}
            authProvider={authProvider}
        >
            <Resource name='draws' {...draws} />
        </Admin>
    );
}

export default Dashboard;
