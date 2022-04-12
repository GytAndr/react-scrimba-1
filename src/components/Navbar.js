import logoImage from "../images/reactjs-icon.png";
export default function Navbar() {
	return (
		<nav>
			<img src={logoImage} />
			<h3>ReactFacts</h3>
			<h4>React Course - Project 1 </h4>
		</nav>
	);
}
