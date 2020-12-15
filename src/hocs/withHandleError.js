import React from 'react';
import HandleFailed from '../components/Failed';

const withHandleLoading = Component => (props) => {
    const {error, ...otherProps} = props;

    if (error) {
        return <HandleFailed />
    }

    return <Component {...otherProps} />;
}

export default withHandleLoading;
