import logo from './logo.svg';
import './App.css';

function App() {
	const name = '영후';
	return (
		<>
			<h1 className='orange'>Hello!</h1>
			<h2>hello</h2>
			<p>{name}</p>
			<ul>
				<li style={{ color: 'red' }}>우유</li>
				<li>딸기</li>
				<li>바나나</li>
			</ul>
		</>
	);
}

export default App;
