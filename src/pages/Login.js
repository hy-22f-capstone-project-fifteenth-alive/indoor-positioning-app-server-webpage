import React from "react";
import { Navigate } from "react-router-dom";

var isLogged = 0;

const checkLoginOption = {
	url: "localhost:8080/user/v1/logged",
	method: "GET",
};

const clientId =
	"532205455452-8v9g5lghea3po322jujds7dkv4sl0tbe.apps.googleusercontent.com";
var url = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&`;
url += `client_id=${clientId}`;
// https://www.googleapis.com/auth/cloud-platform.read-only
url += `&scope=openid%20email`;
url += `&redirect_uri=http://localhost:8080/login/oauth2/code/google`;
url += `&state=security_token%3D138r5719ru3e1%26url%3Dhttp://localhost:3000/map`;

function Login() {
	if (isLogged) {
		return (
			<Navigate to='/map' />
		);
	} else {
		return (
			<button
				type="button"
				onClick={(e) => {
					e.preventDefault();
					window.location.href = url;
					isLogged = 1;
				}}
			>
				구글 로그인
			</button>
		);
	}
}

export default Login;
