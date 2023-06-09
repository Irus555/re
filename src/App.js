import './App.css';
import React, { useState } from 'react';

function App() {

	const [users, setUsers] = useState([])

	const getData = () => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(res => res.json())
			.then(res => {
				if (res && Array.isArray && res.length > 0) {
					setUsers(res)

				}
			})
	}

	const loadUsers = () => {
		getData()
	}
	const styles = {
		color: 'black',
		border: '1px solid black',
		padding: '10px',
		margin: '0 auto',
		borderRaduis: '5px',
		backgroundColor: 'aquamarine'
	}
	return (
		<>
			<h2> Users: <button type='' onClick={() => { loadUsers() }}>Загрузить список пользователей</button> </h2>
			<div style={{ margin: 50 }}>
				{users.length > 0 && users.map(user => {
					return <p key={Math.random()} style={styles}>Имя:  {user.name},   Никнейм : {user.username},   email : {user.email}</p>


				})
				}
			</div>
		</>
	)
}

export default App;
