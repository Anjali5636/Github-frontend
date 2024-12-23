import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import './index.css'
import { AuthProvider } from './authContext.jsx'
import ProjectRoutes from './Routes.jsx';
import { BrowserRouter as Router } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<AuthProvider>
<Router>
  <ProjectRoutes />
</Router>
</AuthProvider> 
);