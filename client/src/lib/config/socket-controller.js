import { io } from 'socket.io-client';

const getOrCreateUserId = () => {
	let id = localStorage.getItem('userId');
	if (!id) {
		id = crypto.randomUUID();
		localStorage.setItem('userId', id);
	}
	return id;
};

const userId = getOrCreateUserId();
const socket = io('http://localhost:3000', {
	auth: { userId }
});

export default socket;
