import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function NavbarComponent() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand as={Link} to="/"><img
                src="/GG logo.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="Gourmet Games logo"
            /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/recipes">Recipes</Nav.Link>
                    <NavDropdown title="Winning Recipes" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to="/pickles">Pickles</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/pie">Pie</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/caserole">Caserole</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={Link} to="/submit">Submit to Win</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavbarComponent;

