import {useState} from 'react';
import Link from "next/link";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavbarText
} from 'reactstrap';

import auth0Client from "../services/auth0";

const BsLink = ({route, text}) => {
    return (
        <NavItem className="port-navbar-item">
            <Link href={route}>
                <a className="nav-link port-navbar-link">{text}</a>
            </Link>
        </NavItem>
    );
};

const Login = () => {
    return (
        <span className="nav-link port-navbar-link clickable" onClick={auth0Client.login}>
            Login
        </span>
    );
};

const Logout = () => {
    return (
        <span className="nav-link port-navbar-link clickable" onClick={auth0Client.logout}>
            Logout
        </span>
    );
};

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="transparent" dark expand="md" className="port-navbar port-default absolute">
                <NavbarBrand href="/" className="port-navbar-brand">Aria Azadi Pour</NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <BsLink route="/" text="Home"/>
                        <BsLink route="/about" text="About"/>
                        <BsLink route="/blog" text="Blog"/>
                        <BsLink route="/cv" text="CV"/>
                        <BsLink route="/portfolios" text="Portfolios"/>
                    </Nav>
                    <NavbarText className="port-navbar-text">
                        {
                            auth0Client.isAuthenticated() ?
                                <Logout/> :
                                <Login/>
                        }
                    </NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default Header;