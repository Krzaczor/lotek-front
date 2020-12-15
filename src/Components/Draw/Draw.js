import React from 'react';
import { compose } from 'recompose';

import withHandleError from '../../hocs/withHandleError';
import withHandleLoading from '../../hocs/withHandleLoading';
import useMatchMedia from '../../hooks/useMatchMedia';

import Modal from './DrawModal';
import Layout from './DrawLayout';

const DrawComponent = () => {
    const { hasMoreWidth } = useMatchMedia();

    return hasMoreWidth ? <Layout /> : <Modal />;
}

export default compose(
    withHandleLoading,
    withHandleError
)(DrawComponent);