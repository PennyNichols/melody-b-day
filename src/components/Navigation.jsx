import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaBirthdayCake } from "react-icons/fa";

const Navigation = () => {
	return (
		<Navbar
			className="sticky"
			variant="dark"
			expand="md"
			style={{
				backgroundColor: "rgba(255,255,255,.5)",
				backdropFilter: "blur(5px)",
			}}
		>
			<Container fluid>
				<Link
					to="/"
					style={{ textDecoration: "none"}}
					className="cake-wrapper"
				>
					<FaBirthdayCake style={{ fontSize: "3rem" }}className="cake" />
				</Link>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto" style={{gap:'1.5rem'}}>
						<Link style={{fontSize:'1.5rem',  textDecoration:'none'}} to="/">Home</Link>
						<Link style={{fontSize:'1.5rem',  textDecoration:'none'}} to="/guest-list">RSVP</Link>
						<Link style={{fontSize:'1.5rem',  textDecoration:'none'}}  to="/login">Login</Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Navigation;
