import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const Section = styled.section`
    margin-bottom: 1rem;
    width: 100%;
`;

const Title = styled.h2`
    background-color: #01a0e2;
    text-transform: uppercase;
    padding: 7px;
    font-size: 1rem;
    color: white;
    text-align: center;
    margin-bottom: 1.3rem;
`;

const SectionComponent = ({title, children}) => {
    return (
        <Section>
            <Title>{title}</Title>
            {children}
        </Section>
    )
}

SectionComponent.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired,
}

export default SectionComponent;
