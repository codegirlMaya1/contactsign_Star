"use client";
import React, { useState } from 'react';
import LogInPage from './LogInPage';
import SignUpPage from './SignUpPage';
import Footer from './Footer';

const App: React.FC = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div>
   
      {showSignUp ? <SignUpPage /> : <LogInPage />}
      <button onClick={() => setShowSignUp(!showSignUp)}>
        {showSignUp ? "Go to Log In" : "Go to Sign Up"}
      </button>
      <Footer />
    </div>
  );
};

export default App;