import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const ButtonCancel = styled.button`
    background-color: #fff;
    padding: 15px;
    border: none;
    border-radius: 15px;
    cursor: pointer;
`;

const ButtonComponent = ({ handleClick }) => {
    return <ButtonCancel role="button" onClick={handleClick}>Zamknij</ButtonCancel>
}

ButtonComponent.propTypes = {
    handleClick: PropTypes.func.isRequired,
}

export default ButtonComponent;
