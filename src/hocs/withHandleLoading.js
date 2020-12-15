import React from 'react';
import Spinner from '../components/Spinner';

const withHandleLoading = Component => (props) => {
    const {loading, ...otherProps} = props;

    if (loading) {
        return <Spinner />;
    }

    return <Component {...otherProps} />;
}

export default withHandleLoading;
