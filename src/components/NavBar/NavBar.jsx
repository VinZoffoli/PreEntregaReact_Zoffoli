import CartWidget from '../CartWidget/CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar({ onCartClick }) {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#inicio">Bahamut</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#colaboraciones">Colaboraciones</Nav.Link>
                        <Nav.Link href="#tendencias">Tendencia</Nav.Link>
                        <NavDropdown title="Productos" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#comics">Comics</NavDropdown.Item>
                            <NavDropdown.Item href="#videojuegos">Videojuegos</NavDropdown.Item>
                            <NavDropdown.Item href="#peliculas">Peliculas & TV</NavDropdown.Item>
                            <NavDropdown.Item href="#anime">Anime & Manga</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <CartWidget onCartClick={onCartClick} /> 
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
