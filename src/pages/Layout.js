import { Container, OverlayTrigger, Row, Col, Tooltip, Nav, Navbar } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import './Layout.css';

// fix click effect. the color must stay rgb(179,229,255)
// when Nav.Link is clicked

function ParseLayout (props) {
    const renderTooltip = (props2) => (
        <Tooltip id="button-tooltip" {...props2}>
          {props.data.title}
        </Tooltip>
      );
    return (
    <Nav.Item>
        <OverlayTrigger placement="bottom" overlay={renderTooltip} delay={{ show: 100, hide: 100 }}>
            <Nav.Link as={Link} to={props.data.route} eventKey={props.data.eventkey} className="text-white fs-5">{props.data.title}</Nav.Link>
        </OverlayTrigger>
    </Nav.Item>
    );
}


function Layout() {
    const dataHome = {title: "Home", route: "/", eventkey: "/"};
    const dataPortfolio = {title: "Portfolio", route: "/portfolio", eventkey: "link-1"};
    const dataResume = {title: "Resume", route: "/resume", eventkey: "link-2"};
    const dataContact = {title: "Contact", route: "/contact", eventkey: "link-3"}
    return (
        <>
        <Container fluid className="bg-primary bg-opacity-80">
            <Row className="mx-3 p-2">
                <Col md={8}>
                    <h2 className="text-white my-2">About Me</h2>
                </Col>
                <Col md={4}>
                    <Navbar expand="lg">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav variant="pills" defaultActiveKey="/" className="gap-5">
                                <ParseLayout data={dataHome} />
                                <ParseLayout data={dataPortfolio} />
                                <ParseLayout data={dataResume} />
                                <ParseLayout data={dataContact} />
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
            </Row>
        </Container>
        <Outlet />
        </>
    )
};

export default Layout;