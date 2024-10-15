import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx';
import { ToastProvider } from "./providers/ToastProvider.tsx";
import './index.css'

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons"; // Import all solid icons
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fas, far);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ToastProvider>
      <App />
    </ToastProvider>
  </React.StrictMode>,
)
