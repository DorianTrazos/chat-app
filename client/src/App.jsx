import { useContext, useEffect, useState } from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import Login from './components/login/Login';
import Register from './components/register/Register';
import AuthProvider from './lib/providers/AuthProvider';
import { AuthContext } from './lib/contexts/AuthContext';
import AuthForms from './components/auth-forms/AuthForms';

const App = () => {
	return (
		<div>
			<GlobalStyles />
			<AuthProvider>
				<AuthForms />
			</AuthProvider>
		</div>
	);
};

export default App;
