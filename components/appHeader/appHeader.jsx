import { useState } from 'react';
import Link from 'next/link'
import { Container, Navbar, Nav } from 'react-bootstrap';

const AppHeader = ({ brandName, expand, children }) => {

    const [expanded, setExpanded] = useState();
    return (
        <Navbar expanded={expanded} onToggle={() => setExpanded(true)} expand={expand} bg="dark" variant="dark">
            <Container fluid className="m-0">
                <Navbar.Brand href="/" style={{ color: 'rgb(250, 183, 28)' }}>{brandName}</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto" onClick={() => setExpanded(false)}>
                        <Link href="/player"><a className="nav-link">Piese</a></Link>
                        <Link href="/lyrics"><a className="nav-link">Texte</a></Link>
                        <Link href="/artists"><a className="nav-link">Artisti</a></Link>
                        <Link href="/imagesandstories"><a className="nav-link">Imagini</a></Link>
                        <Link href="/shop"><a className="nav-link">Cumpara</a></Link>
                        <Link href="/posts"><a className="nav-link">Impresii</a></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default AppHeader;