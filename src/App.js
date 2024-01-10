
import { Routes, Route, Navigate } from 'react-router-dom';
import { PokedexView } from './components/PokedexView';
import { DetailsView } from './components/DetailsView';
import { Navigation } from './components/Navigation';
import { Heading } from './components/Heading';
import { withRouter } from './HOCs';
import PokemonsProvider from './context/PokemonsProvider';
import generations from './data/generations';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
	return (
		<PokemonsProvider>
			<div className="pokedex-app">
				<Heading />
				<Navigation />
				<Routes>
					<Route path="/" element={<Navigate to={generations[0].link} />} />
					{generations.map(({ id, link }) => (
						<Route key={id} path={`/${link}`} element={<PokedexView generation={id} />} />
					))}
					</Routes>
				<DetailsView />
				<Footer></Footer>
			</div>
		</PokemonsProvider>
	);
}

export default withRouter( App );
