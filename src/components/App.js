import React, { createContext, useContext, useState } from "react";
import '../styles/App.css';

export const AuthContext = createContext(null);

const Auth = () => {
  const { authenticated, setAuthenticated } = useContext(AuthContext);

  return (
    <section className="auth-panel" aria-labelledby="auth-title">
      <div className="auth-mark" aria-hidden="true" />
      <h1 id="auth-title">Verify your identity</h1>
      <p className="auth-description">Complete this check to continue.</p>

      <label className="captcha-check">
        <input
          type="checkbox"
          checked={authenticated}
          onChange={(event) => setAuthenticated(event.target.checked)}
        />
        <span>I'm not a robot</span>
      </label>

      <p className={`auth-status${authenticated ? ' is-authenticated' : ''}`} role="status" aria-live="polite">
        {authenticated
          ? 'You are authenticated.'
          : 'Please verify that you are not a robot.'}
      </p>
    </section>
  );
};

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
      <main id="main" className="auth-page">
        <Auth />
      </main>
    </AuthContext.Provider>
  );
};

export default App;
