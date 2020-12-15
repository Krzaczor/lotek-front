import React from 'react';

const withHandleLoadingAuth = Component => (props) => {
    const {loading, ...otherProps} = props;

    if (loading) {
        return null;
    }

    return <Component {...otherProps} />;
}

export default withHandleLoadingAuth;
