import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { Outlet, Link } from "react-router-dom";


function Layout() {
    return (
        <>
            <Container fluid className="bg-secondary bg-opacity-10">
                <Nav fill variant="pills" defaultActiveKey="/" className="justify-content-around">
                    <Nav.Item>
                        <Nav.Link as={ Link } to="/" eventKey="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={ Link } to="/portfolio" eventKey="link-1">Portfolio</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={ Link } to="/resume" eventKey="link-2">Resume</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={ Link } to="/contact" eventKey="link-3">Contact Me</Nav.Link>
                    </Nav.Item>
            </Nav>
        </Container>
        <Outlet />
        </>
    )
};

export default Layout;