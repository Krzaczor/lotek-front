import React from 'react';
// import { Link } from "react-router-dom";
import styled from 'styled-components';

const Navbar = styled.nav`
    width: 100vw;
    background-color: #01a0e2;
    color: #fff;
    height: 50px;
    margin-bottom: 1px;
    position: fixed;
    top: 0;
`;

const List = styled.ul`
    list-style-type: none;
    display: flex;
    align-content: center;
    align-items: center;
    height: 100%;
`;

const ListItem = styled.li`
    margin-left: 20px;
`;

const Url = styled.a`
    display: inline-block;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: inherit;
    line-height: 2em;
`;

export default () => {
    return (
        <Navbar>
            <List>
                <ListItem><Url href='/' active>główna</Url></ListItem>
            </List>
        </Navbar>
    )
}
