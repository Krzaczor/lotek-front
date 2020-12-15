import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
    width: 100%;
    background-color: #01a0e2;
    padding: 0 1em;
    position: fixed;
    top: 0;
    z-index: 999;
`;

const List = styled.ul`
    height: 3em;
    list-style-type: none;
    display: flex;
    align-items: center;
`;

const ListItem = styled.li`
    text-transform: uppercase;
    letter-spacing: 1px;
    padding-left: 1em;

    &:first-child {
        padding: 0;
    }
`;

const Url = styled(Link)`
    display: inline-block;
    text-decoration: none;
    line-height: 2em;
    color: #fff;
`;

const Navbar = () => {
    return (
        <Nav>
            <List>
                <ListItem><Url to='/' title='strona główna'>główna</Url></ListItem>
            </List>
        </Nav>
    )
}

export default Navbar;
