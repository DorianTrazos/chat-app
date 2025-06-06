import { useEffect, useState } from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import socket from './config/socket-controller';

const App = () => {
	const [nombre, setNombre] = useState('');
	const [texto, setTexto] = useState('');
	const [mensajes, setMensajes] = useState([]);

	useEffect(() => {
		const recibirMensaje = data => {
			const nuevosMensajes = [...mensajes, data];
			setMensajes(nuevosMensajes);
		};

		socket.on('mensaje', recibirMensaje);

		return () => socket.off('mensaje', recibirMensaje);
	}, [mensajes]);

	const enviarMensaje = () => {
		if (nombre && texto) {
			const nuevoMensaje = { nombre, texto };
			const nuevosMensajes = [...mensajes, nuevoMensaje];
			setMensajes(nuevosMensajes);
			socket.emit('mensaje', nuevoMensaje);
			setTexto('');
		}
	};

	return (
		<div>
			<GlobalStyles />
			<main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
				<h2>Clon de WhatsApp</h2>
				<div>
					<input
						placeholder='Tu nombre'
						value={nombre}
						onChange={e => setNombre(e.target.value)}
					/>
					<input
						placeholder='Mensaje'
						value={texto}
						onChange={e => setTexto(e.target.value)}
						onKeyDown={e => e.key === 'Enter' && enviarMensaje()}
					/>
					<button onClick={enviarMensaje}>Enviar</button>
				</div>
				<hr />
				<div>
					{mensajes.map((msg, i) => (
						<p key={i}>
							<strong>{msg.nombre}</strong>: {msg.texto}
						</p>
					))}
				</div>
			</main>
		</div>
	);
};

export default App;
