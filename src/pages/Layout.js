import { Container, OverlayTrigger } from "react-bootstrap";
import Tooltip from 'react-bootstrap/Tooltip';
import Nav from "react-bootstrap/Nav";
import { Outlet, Link } from "react-router-dom";


function ParseLayout (props) {
    const renderTooltip = (props2) => (
        <Tooltip id="button-tooltip" {...props2}>
          {props.data.title}
        </Tooltip>
      );
    return (
    <Nav.Item>
        <OverlayTrigger placement="bottom" overlay={renderTooltip} delay={{ show: 100, hide: 100 }}>
            <Nav.Link as={Link} to={props.data.route} eventKey={props.data.eventkey}>{props.data.title}</Nav.Link>
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
            <Container fluid className="bg-secondary bg-opacity-10">
                <Nav fill variant="pills" defaultActiveKey="/" className="justify-content-around">
                    <ParseLayout data={dataHome} />
                    <ParseLayout data={dataPortfolio} />
                    <ParseLayout data={dataResume} />
                    <ParseLayout data={dataContact} />
            </Nav>
        </Container>
        <Outlet />
        </>
    )
};

export default Layout;