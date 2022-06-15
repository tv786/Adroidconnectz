
import {
BrowserRouter as Router,

Route,
Routes

} from "react-router-dom";

// import Home component
import Home from "./components/Home.js";
import Contact_us from './components/Contactus.js';
import Features from "./components/features.js"



function App() {
return (
	<>
	{/* This is the alias of BrowserRouter i.e. Router */}
	<Router>
		<Routes>
		{/* This route is for home component
		with exact path "/", in component props
		we passes the imported component*/}
		<Route exact path="/" element={<Home/>} />
		<Route path="/features" element={<Features/>} />

	
		<Route path="/contact" element={<Contact_us/>} />
			
		{/* If any route mismatches the upper
		route endpoints then, redirect triggers
		and redirects app to home component with to="/" */}

		</Routes>
	</Router>
	</>
);
}

export default App;
