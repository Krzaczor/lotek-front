import React from 'react';
import styled from 'styled-components';

const Day = styled((props) => typeof props.element === 'function' ? props.element(props) : props.element)`
    ${props => typeof props.styles === 'string' ? props.styles : props.styles(props)};
`;

export default (props) => {
    return (
        <Day {...props} />
    )
}