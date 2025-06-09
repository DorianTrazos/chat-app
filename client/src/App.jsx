import { useEffect, useState } from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import socket from './lib/config/socket-controller';
import { v4 } from 'uuid';

const App = () => {
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		socket.on('server-message', data =>
			serverMessage(data, messages, setMessages)
		);

		return () => socket.off('server-message', serverMessage);
	}, [messages]);

	return (
		<div>
			<GlobalStyles />
			<main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
				<h2>Clon de WhatsApp</h2>
				<form
					onSubmit={event => {
						sendMessage(event, event.target.message.value);
					}}
				>
					<input placeholder='Mensaje' name='message' />
					<button>Enviar</button>
				</form>
				<hr />
				<div>
					{messages.map(msg => (
						<p key={v4()}>{msg.message}</p>
					))}
				</div>
			</main>
		</div>
	);
};

const sendMessage = (event, message) => {
	event.preventDefault();
	if (message) {
		socket.emit('client-message', { message });
		event.target.reset();
	}
};

const serverMessage = (data, messages, setMessages) => {
	setMessages([...messages, data]);
};

export default App;
