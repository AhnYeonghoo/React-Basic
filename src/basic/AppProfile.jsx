import './App.css';
import Profile from './components/Profile';
import Avatar from './components/Avatar';
function AppProfile() {
	const handleClick = (event) => {
		console.log(event);
	};
	return (
		<>
			<button onClick={handleClick}>버튼</button>

			<Avatar
				image='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80'
				isNew={true}
			/>
			<Profile
				isNew={true}
				image='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80'
				title='프론트엔드 개발자'
				name='James Kim'
			/>
			<Profile
				image='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80'
				title='백엔드 개발자'
				name='Bob Yu'
			/>
		</>
	);
}

export default AppProfile;
