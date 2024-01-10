import './Heading.css';
import logoImage from '../../img/titule.png'
export default function Heading() {
	return (
		<h1 className="heading">
            <img src={logoImage} alt="Pokedex Logo" className="logo" />
		</h1>
	);
}
