import { useGoogleLogin } from "@react-oauth/google";

function SignIn({ onLogin }) {
  const login = useGoogleLogin({
    scope: "https://www.googleapis.com/auth/youtube.readonly",
    onSuccess: tokenResponse => {
      console.log("Access Token: ", tokenResponse.access_token);
      // Use tokenResponse.access_token for API calls instead of credentialResponse.credential
      localStorage.setItem('accessToken', tokenResponse.access_token);
      // setAccessToken(tokenResponse.access_token);
      onLogin(tokenResponse.access_token);
    },
    onError: () => alert("Login Failed"),
  });

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <h3>Please sign in to continue</h3>
      <button onClick={login}>Login</button>
    </div>
  );
}

export default SignIn;
