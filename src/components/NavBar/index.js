
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './index.css';

const HeaderMenu = () => {
    return (
        <div className='header-menu'>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                         
                            <Nav.Link href="/">
                                <Link to="/">Home</Link>   
                            </Nav.Link> 
                            <Nav.Link href="/portfolio">
                                <Link to="/portfolio">Portfolio</Link>
                            </Nav.Link>
                            <Nav.Link href="/about">
                                <Link to="/about">About Me</Link>
                            </Nav.Link>
                            <Nav.Link href="/contact">
                                <Link to="/contact">Conact</Link>
                            </Nav.Link>
                            <Nav.Link href="/cv">
                                <Link to="/cv">CV</Link>
                            </Nav.Link>
                            <Nav.Link href="/blogs">
                                <Link to="/blogs">Blogs</Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default HeaderMenu;