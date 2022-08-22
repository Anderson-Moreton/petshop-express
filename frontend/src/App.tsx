import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, RouteProps } from 'react-router-dom';
import { getToken } from '@services/auth';

import './index.css';
import Error404Page from '@pages/404';

export const LOGIN_PATH = '/login';
export const PASSWORD_RESET_PATH = '/usuario/redefinicao-de-senha/';

export const redirectToLogin = (): void => {
  window.location.href = `${LOGIN_PATH}?redirect=${window.location.pathname}`;
};

export const isLoginPath = (): boolean => window.location.pathname === LOGIN_PATH;
export const isPasswordResetPath = (): boolean => window.location.pathname.includes(PASSWORD_RESET_PATH);

const App: React.FC = () => {
  useEffect(() => {
    const token = getToken();
    if (token) {
      //
    } else if (!isLoginPath() && !isPasswordResetPath()) {
      redirectToLogin();
    }
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="*" component={Error404Page} />
      </Switch>
    </Router>
  );
};

export default App;
