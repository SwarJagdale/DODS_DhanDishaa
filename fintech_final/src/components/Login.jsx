import React, { useState } from 'react';
import { GoogleLogin,GoogleOAuthProvider } from '@react-oauth/google';



const Login = () => {
  const [userData, setUserData] = useState(null);

  const handleGoogleLoginSuccess = (response) => {
    // Handle successful Google login here, e.g., store user data in state.
    setUserData(response.profileObj);
  };

  const handleGoogleLoginFailure = (error) => {
    // Handle Google login failure here, e.g., display an error message.
    console.error('Google login failed:', error);
  };

  return (
    <div className=' mx-4'>
      {/* <h1>Google OAuth Example</h1> */}
      <GoogleOAuthProvider clientId="828415142731-snl80829pjjm13cslkqk54r7djcjo1pi.apps.googleusercontent.com">
      <GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/></GoogleOAuthProvider>
      
    </div>
  );
};

export default Login;