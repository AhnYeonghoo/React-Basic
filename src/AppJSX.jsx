import logo from './logo.svg';
import './App.css';

function App() {
	const name = '영후';
	const list = ['우유', '딸기', '바나나', '요거트'];
	return (
		<>
			<h1 className='orange'>{`Hello ${name}`}</h1>
			<h2>hello</h2>
			<p>{name}</p>
			<ul>
				{list.map((item) => (
					<li>{item}</li>
				))}
			</ul>
		</>
	);
}

export default AppJSX;
