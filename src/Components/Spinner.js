import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { device } from '../config/styles';

const LoaderWrapper = styled.div`
    position: relative;
    height: ${props => props.suspense ? '100vh' : '20vh'};

    @media ${device.tablet} {
        ${props => props.suspense ? '' : 'width: 50%'};
        ${props => props.suspense ? '' : 'height: calc(100vh - 3rem)'};
    }
`;

const Loader = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
`;

const AminationElectron = keyframes`
    0% {
        transform: scale(1);
        opacity: 1;
    }

    45% {
        transform: scale(0.1);
        opacity: 0.7;
    }

    100% {
        transform: scale(1);
        opacity: 1;
    }
`;

const Element = styled.span`
    background-color: #01a0e2;
    width: 15px;
    height: 15px;
    margin: 3px;
    border-radius: 100%;
    display: inline-block;
    animation: 0.6s linear ${props => props.time ? props.time : ''} infinite ${AminationElectron};
`;

const Snipper = ({suspense}) => {
    return (
        <LoaderWrapper suspense={suspense}>
            <Loader>
                <Element />
                <Element time={'0.08s'} />
                <Element time={'0.16s'} />
            </Loader>
        </LoaderWrapper>
    )
}

Snipper.propTypes = {
    suspense: PropTypes.bool,
}

Snipper.defaultProps = {
    suspense: false,
}

export default Snipper;
