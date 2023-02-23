import logo from './logo.svg';
import './App.css';

import React from 'react';

function App() {

	const clientId = "532205455452-8v9g5lghea3po322jujds7dkv4sl0tbe.apps.googleusercontent.com";

	function init() {
	}

	var url = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&`
	url += `client_id=${clientId}`;
	url += `&scope=openid%20email`;
	url += `&redirect_uri=http://localhost:8080/login/oauth2/code/google`;
	url += `&state=security_token%3D138r5719ru3e1%26url%3Dhttp://localhost:3000`;
	url += `&nonce=testNonce`

	const onSuccess = function (res) {
		console.log(res);

	}

	const onFailure = function (res) {
		console.log(res);
	}
	
	return (
		<div className="App">
			<button
			type="button"
			onClick={(e) => {
				e.preventDefault();
				window.location.href=url;
			}}
			>구글 로그인</button>
		</div>
		);
}

export default App;
