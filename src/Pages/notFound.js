import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const NotFound = styled.div`
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
`;

const Message = styled.p`
    line-height: 40px;
`;

export default () => {
    return (
        <NotFound>
            <Message>Nie znaleziono strony</Message>
            <p><Link to={'/'}>Wróć do strony głównej</Link></p>
        </NotFound>
    );
}
