import { useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { auth } from '../config/firebase.config';

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const unsuscribe = auth.onAuthStateChanged(user => {
			if (user) {
				console.log(user);
				setUser(user);
			} else {
				console.log('No user');
				setUser(null);
			}
		});

		return () => unsuscribe();
	}, []);

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
