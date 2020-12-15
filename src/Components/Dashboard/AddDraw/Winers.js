import React, { useState } from 'react';
import styled from 'styled-components';

import { colors } from '../../../config/styles';
import Section from '../../Section';

const ToggleFields = styled.p`
    display: inline-block;
    padding: 10px 15px;
    margin-bottom: 5px;
    border: 1px solid ${colors.lines};
`;

const WinersWrapper = styled.div`
    width: 100%;
`;

const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Cell = styled.div`
    text-align: center;
    width: ${props => props.short ? '5rem' : '8rem'};
`;

const WinerInput = styled.input`
    text-align: center;
    padding: 0.8rem;
    margin: 0.5rem 0;
    width: 7rem;
    border: 1px solid ${colors.lines};
`;

const FormWiners = ({register}) => {
    const [showWiners, setShowWiners] = useState(true);

    const toggleShowWiners = () => {
        setShowWiners(!showWiners);
    }

    return (
        <Section title="wygrane">
            <ToggleFields onClick={toggleShowWiners}>{showWiners ? 'Zamknij' : 'Otwórz'}</ToggleFields>
            {!showWiners
                ? <p>brak danych dla wygranych</p>
                : (
                    <WinersWrapper>
                        <Row>
                            <Cell short></Cell>
                            <Cell>ilość</Cell>
                            <Cell>kwota</Cell>
                        </Row>
                        <Row>
                            <Cell short>szóstki <input type="hidden" ref={register} name="winers[0].type" defaultValue={6} disable="disable" /></Cell>
                            <Cell><WinerInput type="text" ref={register} name="winers[0].count" /></Cell>
                            <Cell><WinerInput type="text" ref={register} name="winers[0].prize" /></Cell>
                        </Row>
                        <Row>
                            <Cell short>piątki <input type="hidden" ref={register} name="winers[1].type" defaultValue={5} disable="disable" /></Cell>
                            <Cell><WinerInput type="text" ref={register} name="winers[1].count" /></Cell>
                            <Cell><WinerInput type="text" ref={register} name="winers[1].prize" /></Cell>
                        </Row>
                        <Row>
                            <Cell short>czwórki <input type="hidden" ref={register} name="winers[2].type" defaultValue={4} disable="disable" /></Cell>
                            <Cell><WinerInput type="text" ref={register} name="winers[2].count" /></Cell>
                            <Cell><WinerInput type="text" ref={register} name="winers[2].prize" /></Cell>
                        </Row>
                        <Row>
                            <Cell short>trójki <input type="hidden" ref={register} name="winers[3].type" defaultValue={3} disable="disable" /></Cell>
                            <Cell><WinerInput type="text" ref={register} name="winers[3].count" /></Cell>
                            <Cell><WinerInput type="text" ref={register} name="winers[3].prize" /></Cell>
                        </Row>
                    </WinersWrapper>
                )
        }
        </Section>
    )
}

export default FormWiners;
