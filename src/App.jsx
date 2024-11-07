
import { useState } from 'react';
import './App.css';
import Modal from './components/Modal/Modal';
import TaskCard from './components/TaskCard/TaskCard';
import { AppContext } from './context/AppContext';

function App() {
	const [appState, setAppState] = useState({
		isModalOpen: false,
		attachments: [],
		originalFiles: []
	});

	return (
		<AppContext.Provider value={{ appState, setAppState }}>
			<main className='main-container'>
				<div className='content'>
					<TaskCard title="Incomplete" indicator={true} indicatorColor='#D21010' />
					<TaskCard title="To Do" indicator={true} indicatorColor='#00B5FF' />
					<TaskCard title="Doing" indicator={true} indicatorColor='#FFE700' />
					<TaskCard title="Under Review" />
					<TaskCard title="Completed" />
				</div>

				<Modal title={'Attachmens'} />
			</main>
		</AppContext.Provider>
	)
}

export default App
