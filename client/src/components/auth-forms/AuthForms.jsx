import { useContext } from 'react';
import Login from '../login/Login';
import Register from '../register/Register';
import { AuthContext } from '../../lib/contexts/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../../lib/config/firebase.config';

const AuthForms = () => {
	const { user } = useContext(AuthContext);
	return (
		<>
			{!user && (
				<>
					<Login />
					<Register />
				</>
			)}

			{user && <button onClick={logout}>Sign Out</button>}
		</>
	);
};

const logout = async () => {
	await signOut(auth);
};

export default AuthForms;
