import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// antd的全局组件样式
import 'antd/dist/antd.css';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
