import React from "react";
import styled from "styled-components";

const BoxContent = styled.div`
    border-radius: 15px;
    background-color: white;
    overflow: hidden;
`;

const BoxScroll = styled.div`
    height: 100%;
    overflow-y: auto;
    border-radius: 15px;
    background-color: white;
`;

const Content = styled.div`
    padding: 15px;
`;

const Wrapper = ({children}) => {
  return (
    <BoxContent>
        <BoxScroll tabIndex="0">
            <Content>
                {children}
            </Content>
        </BoxScroll>
    </BoxContent>
  );
};

export default Wrapper;
