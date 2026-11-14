import 'antd/dist/reset.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import GlobalStylesApp from './components/GlobalStylesApp';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStylesApp>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GlobalStylesApp>
  </React.StrictMode>,
);
