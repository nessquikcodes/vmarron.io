import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<nav className="navigation">
					<div className="nav-brand">
						<img src={logo} className="logo-image" alt="Logo" />
					</div>
					<div className="nav-links">
						<Link to="/" className="item">
							Projects
						</Link>
						<Link to="/about" className="item">
							About
						</Link>
						<Link to="/contact" className="item">
							Contact
						</Link>
					</div>
					<div className="nav-buttons">
						<a href="https://github.com/vmarron" target="" className="item">
							<i className="fa fa-github"></i>
						</a>
						<a
							href="https://www.linkedin.com/in/vanessamarron/"
							target=""
							className="item">
							<i className="fa fa-linkedin"></i>
						</a>
					</div>
				</nav>

				<Routes>
					<Route exact path="/" element={<Projects />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
