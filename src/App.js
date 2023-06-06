import './App.css';
import React, { useState } from 'react';
//const [name,setName]=useState()
// useEffect(()=>{}) срабатывает при загрузке и по окончанию
//name-наименование состояния; setName-метод обновления состояния
// Устаревший вариант, классовый компонент
// class Welcome extends React.Component {
// 	constructor(props) {
// 		super(props)
// 		this.state = {
// 			name: 'Volodya'
// 		}
// 	}


// 	render() {
// 		const updateName = (name) => {
// 			const state = this.state
// 			this.setState({ ...state, name: name })
// 		}
// 		return (
// 			<>
// 				<p>{this.state.name}</p>
// 				<button type="" onClick={() => updateName('yyy')}>Upd name</button>
// 			</>
// 		)
// 	}
// }
// export default Welcome;


// function App() {
// 	const [name, setName] = useState('Valera')
// 	const updateName = (name) => {
// 		setName(name)
// 	}

// 	const getData = async () => {
// 		let data = await fetch('https://jsonplaceholder.typicode.com/users')
// 			.then(res => res.json())
// 			.then(res => res)
// 		console.log('res', data)
// 	}
// 	getData()
// 	return (
// 		<>
// 			<p style={{ color: 'blue', fontSize: '24px' }}> {name} </p>
// 			<button type="" onClick={() => { updateName('xxx') }}>Update name</button>
// 		</>
// 	)
// }

// export default App;
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
