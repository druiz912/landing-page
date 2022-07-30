import React from "react";

//import components
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx"
import CardContainer from "./cards-container.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid padding-none">
			<Navbar title="LANDING PAGE" />
			<Jumbotron title="Welcome!" description="Welcome to the project 'Landing page'" buttonLabel="4GEEKS"/>
			<CardContainer />
			<Footer />
		</div>
	);
};

export default Home;