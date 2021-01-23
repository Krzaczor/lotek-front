import React from 'react';
import { compose } from 'recompose';

import withHandleError from '../../hocs/withHandleError';
import withHandleLoading from '../../hocs/withHandleLoading';
import useMatchMedia from '../../hooks/useMatchMedia';

import Modal from './DrawModal';
import Layout from './DrawLayout';
import { useDrawsContext } from '../../hooks/useDrawsContext';

const DrawComponent = () => {
    const { newestDraw } = useDrawsContext();
    const { hasMoreWidth } = useMatchMedia();

    if (newestDraw === null) {
        return 'Nie ma losowania';
    }

    return hasMoreWidth ? <Layout /> : <Modal />;
}

export default compose(
    withHandleLoading,
    withHandleError
)(DrawComponent);